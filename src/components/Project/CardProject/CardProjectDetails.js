import React, { useEffect, useState } from 'react';
import ProjectInfo from './ProjectInfo';
import ProjectEquipo from './ProjectEquipo';
import ProjectTaskList from './ProjectTaskList';
import { db } from '../../../Firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { CardViewContainer, Header, Title, BackButton, Content, Section, SectionTitle } from './CardProjectDetails.styles'; // Importar los Styled Components

const CardProjectDetails = ({ projectId, onBack }) => {
  const [project, setProject] = useState(null);

  // Fetch project data from Firestore
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const projectsRef = collection(db, 'projects');
        const q = query(projectsRef, where('id', '==', projectId));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const projectData = querySnapshot.docs[0].data();
          setProject(projectData);
        } else {
          console.warn(`No project found with id: ${projectId}`);
          setProject(null);
        }
      } catch (error) {
        console.error('Error getting project:', error);
        setProject(null);
      }
    };

    if (projectId) {
      fetchProject();
    }
  }, [projectId]);

  if (!project) {
    return (
      <CardViewContainer>
        <Header>
          <BackButton onClick={onBack}>←</BackButton>
          <Title>Proyecto no encontrado</Title>
        </Header>
        <Content>
          <Section>
            <SectionTitle>Error loading project</SectionTitle>
            <p>No data found for this project.</p>
          </Section>
        </Content>
      </CardViewContainer>
    );
  }

  return (
    <CardViewContainer>
      <Header>
        <BackButton onClick={onBack}>←</BackButton>
        <Title>Project Configuration</Title>
      </Header>
      <Content>
        <Section>
          <SectionTitle>Information</SectionTitle>
          <ProjectInfo project={project} />
        </Section>

        <Section>
          <SectionTitle>Equipment</SectionTitle>
          <ProjectEquipo projectId={projectId} />
        </Section>

        <Section>
          <SectionTitle>Tasks</SectionTitle>
          <ProjectTaskList projectId={projectId} />
        </Section>
      </Content>
    </CardViewContainer>
  );
};

export default CardProjectDetails;

