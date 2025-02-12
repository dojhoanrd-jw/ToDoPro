import styled from 'styled-components';
import { Colors } from '../../Utils/colors'; 

export const CardContainer = styled.div`
  background-color: ${Colors.white};
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  height: 220px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const CardHeader = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${Colors.darkBlue};
`;

export const CardDescription = styled.p`
  font-size: 0.9rem;
  color: ${Colors.charcoal};
  margin-bottom: 15px;
  max-height: 40px;
  overflow: hidden;
`;

export const TaskSummary = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`;

export const TaskItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  .icon {
    color: ${Colors.darkBlue};
    font-size: 1.3rem;
  }

  span {
    font-weight: bold;
    font-size: 1.1rem;
    color: ${Colors.textPrimary};
  }
`;

export const LastUpdated = styled.div`
  font-size: 0.8rem;
  color: ${Colors.charcoal};
  font-style: italic;
`;
