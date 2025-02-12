import React, { useEffect, useState } from 'react';
import { FaTasks } from 'react-icons/fa';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { 
  DashboardContainer,
  SectionTitle,
  SummaryGrid,
  SummaryTile,
  TileHeader,
  TileBody,
  TaskGrid,
  TaskCard,
  TaskHeader,
  TaskTitle,
  TaskBody,
  TaskFooter 
} from './Dashboard.styles';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [summary, setSummary] = useState({
    totalTasks: 0,
    completedTasks: 0,
    inProgressTasks: 0,
    todoTasks: 0,
    activeProjects: 0,
  });

  const auth = getAuth();
  const db = getFirestore();

  useEffect(() => {
    const fetchData = async () => {
      const user = auth.currentUser;
      if (!user) return;
    
      try {
        const projectsRef = collection(db, 'projects');
        const projectSnapshot = await getDocs(projectsRef);
        let totalTasks = 0;
        let completedTasks = 0;
        let inProgressTasks = 0;
        let todoTasks = 0;
        let activeProjectsCount = 0;
        const userTasks = [];
    
        // Iterate through projects and tasks
        for (const projectDoc of projectSnapshot.docs) {
          const projectData = projectDoc.data();
          const projectName = projectData.name;
    
          // Check if the user is a member of the project
          const isUserMember = projectData.members && projectData.members.some(member => member.id === user.uid);
          if (!isUserMember) continue;
    
          activeProjectsCount++;
          const allTasks = projectData.tasks || {};
    
          // Iterate through tasks
          for (const taskKey in allTasks) {
            const task = allTasks[taskKey];
    
            if (task.assignedTo === user.uid) {
              userTasks.push({
                id: taskKey,
                title: task.name,
                status: task.status,
                projectName,
                priority: task.priority,
                expirationDate: task.expirationDate,
              });
    
              totalTasks++;
              if (task.status === 'Done') completedTasks++;
              else if (task.status === 'InProgress') inProgressTasks++;
              else if (task.status === 'ToDo') todoTasks++;
            }
          }
        }
    
        // Sort tasks by expiration date and get the next two tasks
        const sortedTasks = userTasks.sort((a, b) => new Date(a.expirationDate) - new Date(b.expirationDate));
        const nextTasks = sortedTasks.slice(0, 2);
    
        setTasks(nextTasks);
        setSummary({ totalTasks, completedTasks, inProgressTasks, todoTasks, activeProjects: activeProjectsCount });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    

    fetchData();
  }, [auth, db]);

  return (
    <DashboardContainer>
      <SectionTitle>General Summary</SectionTitle>
      <SummaryGrid>
        <SummaryTile>
          <TileHeader>Total Tasks</TileHeader>
          <TileBody>{summary.totalTasks}</TileBody>
        </SummaryTile>
        <SummaryTile>
          <TileHeader>Completed</TileHeader>
          <TileBody>{summary.completedTasks}</TileBody>
        </SummaryTile>
        <SummaryTile>
          <TileHeader>In Progress</TileHeader>
          <TileBody>{summary.inProgressTasks}</TileBody>
        </SummaryTile>
        <SummaryTile>
          <TileHeader>To Do</TileHeader>
          <TileBody>{summary.todoTasks}</TileBody>
        </SummaryTile>
      </SummaryGrid>

      <SectionTitle>Upcoming Tasks</SectionTitle>
      <TaskGrid>
        {tasks.length === 0 ? (
          <p>You have no assigned tasks.</p>
        ) : (
          tasks.map((task) => (
            <TaskCard key={task.id} priority={task.priority}>
              <TaskHeader>
                <FaTasks />
                <TaskTitle>{task.title}</TaskTitle>
              </TaskHeader>
              <TaskBody>
                <p>
                  <strong>Project:</strong> {task.projectName}
                </p>
                <p>
                  <strong>Status:</strong> {task.status}
                </p>
              </TaskBody>
              <TaskFooter>
                <span className="priority">
                  Priority: {task.priority}
                </span>
                {task.expirationDate && (
                  <span className="expiration">
                    Expires: {new Date(task.expirationDate).toLocaleDateString()}
                  </span>
                )}
              </TaskFooter>
            </TaskCard>
          ))
        )}
      </TaskGrid>
    </DashboardContainer>
  );
};

export default Dashboard;
