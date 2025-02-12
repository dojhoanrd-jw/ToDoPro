import styled from 'styled-components';
import { Colors } from '../../../Utils/colors';

export const TaskContainer = styled.div`
  padding: 20px;
  background-color: ${Colors.white};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  color: ${Colors.charcoal};
`;

export const TaskList = styled.div`
  margin-top: 15px;
`;

export const TaskItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid ${Colors.darkBlueHover};
`;

export const TaskInfo = styled.div`
  flex: 1;
`;

export const TaskTitle = styled.h3`
  font-size: 1rem;
  color: ${Colors.charcoal};
`;

export const TaskDetails = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

export const TaskAssignedTo = styled.span`
  font-size: 0.9rem;
  color: ${Colors.textSecondary};
  margin-right: 15px;
`;

export const TaskStatus = styled.span`
  font-size: 0.9rem;
  font-weight: bold;
  color: ${(props) =>
    props.status === 'Done' ? Colors.green : 
    props.status === 'InProgress' ? Colors.yellow : Colors.darkBlue};
`;

export const TaskDeadline = styled.p`
  font-size: 0.9rem;
  color: ${Colors.charcoal};
  margin-top: 5px;
`;

export const RemoveButton = styled.button`
  background-color: ${Colors.red};
  color: ${Colors.white};
  padding: 5px 10px;
  font-size: 0.8rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.redDark};
  }
`;

export const NameMember = styled.span`
  font-weight: bold;
  color: ${Colors.charcoal};
  font-size: 14px; 
  margin-right: 8px; 
`;
