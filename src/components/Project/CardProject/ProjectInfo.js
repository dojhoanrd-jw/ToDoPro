import React from 'react';
import { 
  InfoContainer, 
  Header, 
  ProjectName, 
  Status, 
  Description, 
  Dates, 
  DateItem, 
  Label, 
  Value 
} from './ProjectInfo.styles';

const ProjectInfo = ({ project }) => {
  if (!project) return null;

  const { name, description, createdAt, lastUpdated, status, dueDate } = project;

  // Function to calculate time ago
  const timeAgo = (date) => {
    if (!date) return 'Not available';
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);

    if (diffInSeconds < 60) return `does ${diffInSeconds} seconds`;
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) return `does ${diffInMinutes} minutes`;
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `does ${diffInHours} hours`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `does ${diffInDays} days`;
  };

  return (
    <InfoContainer>
      <Header>
        <ProjectName>{name}</ProjectName>
        <Status status={status}>{status}</Status>
      </Header>
      <Description>{description}</Description>
      <Dates>
        <DateItem>
          <Label>Created on:</Label>
          <Value>{new Date(createdAt).toLocaleDateString()}</Value>
        </DateItem>
        <DateItem>
          <Label>Last modification:</Label>
          <Value>{timeAgo(lastUpdated?.toDate())}</Value>
        </DateItem>
        <DateItem>
          <Label>Deadline:</Label>
          <Value>{dueDate ? new Date(dueDate).toLocaleDateString() : 'Not assigned'}</Value>
        </DateItem>
      </Dates>
    </InfoContainer>
  );
};

export default ProjectInfo;
