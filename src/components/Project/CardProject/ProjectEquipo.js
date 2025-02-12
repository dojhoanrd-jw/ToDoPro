import React, { useEffect, useState } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../Firebase';
import AddMemberModal from './ProjectEquipo-Add';
import {
  TeamContainer,
  Header,
  Title,
  AddButton,
  TeamList,
  TeamMember,
  Avatar,
  Info,
  Name,
  EditableRole,
  Status,
  Tasks,
  TaskCount,
  RemoveButton,
} from './ProjectEquipo.styles';

const ProjectEquipo = ({ projectId }) => {
  const [team, setTeam] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch team data from Firestore
  useEffect(() => {
    const fetchTeam = async () => {
      try {
        setLoading(true);
        const projectRef = doc(db, 'projects', projectId);
        const projectSnap = await getDoc(projectRef);

        if (projectSnap.exists()) {
          const projectData = projectSnap.data();
          const members = projectData.members || [];
          setTeam(members);
        } else {
          console.warn(`The project with ID ${projectId} does not exist.`);
        }
      } catch (error) {
        console.error('Error loading project members:', error);
      } finally {
        setLoading(false);
      }
    };

    if (projectId) {
      fetchTeam();
    }
  }, [projectId]);

  // Handle adding a new member
  const handleAddMember = (newMember) => {
    setTeam([...team, newMember]);
  };

  // Handle removing a member
  const handleRemoveMember = async (id) => {
    const updatedTeam = team.filter((member) => member.id !== id);
    setTeam(updatedTeam);

    try {
      const projectRef = doc(db, 'projects', projectId);
      await updateDoc(projectRef, { members: updatedTeam });
    } catch (error) {
      console.error('Error removing member from Firestore:', error);
    }
  };

  // Handle changing a member's role
  const handleRoleChange = async (id, newRole) => {
    const updatedTeam = team.map((member) =>
      member.id === id ? { ...member, role: newRole } : member
    );
    setTeam(updatedTeam);

    try {
      const projectRef = doc(db, 'projects', projectId);
      await updateDoc(projectRef, { members: updatedTeam });
    } catch (error) {
      console.error('Error updating role in Firestore:', error);
    }
  };

  // Toggle member status between Active and Inactive
  const toggleStatus = async (id) => {
    const updatedTeam = team.map((member) =>
      member.id === id
        ? { ...member, status: member.status === 'Active' ? 'Inactive' : 'Active' }
        : member
    );
    setTeam(updatedTeam);

    try {
      const projectRef = doc(db, 'projects', projectId);
      await updateDoc(projectRef, { members: updatedTeam });
    } catch (error) {
      console.error('Error updating status in Firestore:', error);
    }
  };

  if (loading) {
    return <p>Loading team...</p>;
  }

  return (
    <TeamContainer>
      <Header>
        <Title>Assigned Team Members</Title>
        <AddButton onClick={() => setIsModalOpen(true)}>Add Member</AddButton>
      </Header>

      <AddMemberModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddMember={handleAddMember}
        projectId={projectId}
      />

      <TeamList>
        {team.map((member) => (
          <TeamMember key={member.id}>
            <Avatar src={member.avatar} alt={member.name} />
            <Info>
              <Name>{member.name}</Name>
              <EditableRole
                value={member.role}
                onChange={(e) => handleRoleChange(member.id, e.target.value)}
              />
              <br />
              <Status
                status={member.status}
                onClick={() => toggleStatus(member.id)}
              >
                {member.status}
              </Status>
              <Tasks>
                Assigned Tasks:<TaskCount>{member.tasksAssigned}</TaskCount>
              </Tasks>
            </Info>
            <RemoveButton onClick={() => handleRemoveMember(member.id)}>
              Remove
            </RemoveButton>
          </TeamMember>
        ))}
      </TeamList>
    </TeamContainer>
  );
};

export default ProjectEquipo;
