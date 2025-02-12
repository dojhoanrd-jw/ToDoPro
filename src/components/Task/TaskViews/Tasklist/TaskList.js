import React, { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import TaskAdmin from '../TaskAdmin';
import { ScrollableContainer, Table, TableHeader, TableCell, TableRow, NoDataRow } from './TaskList.styles';

const TaskList = ({ projectId }) => {
  const [tasks, setTasks] = useState([]);
  const [modalData, setModalData] = useState(null);
  const auth = getAuth();
  const db = getFirestore();

  // Fetch tasks from Firestore
  useEffect(() => {
    const fetchTasks = async () => {
      if (!projectId) return;

      try {
        const user = auth.currentUser;
        if (!user) return;

        const projectRef = doc(db, 'projects', projectId);
        const projectDoc = await getDoc(projectRef);

        if (!projectDoc.exists()) {
          console.error("The project does not exist");
          return;
        }

        const projectData = projectDoc.data();
        const allTasks = projectData.tasks || [];

        const filteredTasks = allTasks.filter(task => task.assignedTo === user.uid);

        const formattedTasks = filteredTasks.map(task => ({
          ...task,
          creationDate: task.creationDate?.toDate ? task.creationDate.toDate().toLocaleString() : task.creationDate,
          expirationDate: task.expirationDate?.toDate ? task.expirationDate.toDate().toLocaleString() : task.expirationDate
        }));

        setTasks(formattedTasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    

    fetchTasks();
  }, [projectId, auth, db]);

  // Handle row click
  const handleRowClick = (task) => {
    setModalData(task);
  };

  // Close modal
  const closeModal = () => {
    setModalData(null);
  };

  return (
    <>
      <ScrollableContainer>
        <Table>
          <thead>
            <tr>
              <TableHeader>Task Name</TableHeader>
              <TableHeader>Creation Date</TableHeader>
              <TableHeader>Expiration Date</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader>Assigned By</TableHeader>
              <TableHeader>Priority</TableHeader>
            </tr>
          </thead>
          <tbody>
            {tasks.length === 0 ? (
              <NoDataRow>
                <TableCell colSpan="7">No tasks available for this project.</TableCell>
              </NoDataRow>
            ) : (
              tasks.map((task) => (
                <TableRow key={task.id} onClick={() => handleRowClick(task)}>
                  <TableCell>{task.name}</TableCell>
                  <TableCell>{task.creationDate}</TableCell>
                  <TableCell>{task.expirationDate}</TableCell>
                  <TableCell>{task.status}</TableCell>
                  <TableCell>{task.assignedBy}</TableCell>
                  <TableCell>{task.priority}</TableCell>
                </TableRow>
              ))
            )}
          </tbody>
        </Table>
      </ScrollableContainer>
      {modalData && <TaskAdmin taskData={modalData} projectId={projectId} onClose={closeModal} />}
    </>
  );
};

export default TaskList;
