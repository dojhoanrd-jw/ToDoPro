import styled from 'styled-components';
import { Colors } from '../../../../Utils/colors';

export const KanbanContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px 0;
  background-color: ${Colors.mistGray};
  min-width: 900px;
`;

export const KanbanWrapper = styled.div`
  overflow-x: auto;
  padding: 20px;
  max-width: 100%;
`;

export const Column = styled.div`
  flex: 1;
  background: ${Colors.white};
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ColumnTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
  color: ${Colors.darkBlue};
`;

export const TaskCard = styled.div`
  background: ${Colors.white};
  border-radius: 8px;
  padding: 10px 15px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: grab;
  position: relative;

  &:hover {
    transform: scale(1.02);
    transition: transform 0.2s;
  }
`;

export const TaskHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

export const TaskTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  line-height: 1.2;
  cursor: pointer;
  color: ${Colors.charcoal};
`;

export const TaskDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 14px;
  color: ${Colors.charcoal};
  align-items: center;

  span {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

export const PriorityTag = styled.span`
  background-color: ${({ priority }) =>
    priority === 'High'
      ? Colors.red
      : priority === 'Medium'
      ? Colors.yellow
      : Colors.green};
  color: ${Colors.white};
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const DatesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: ${Colors.charcoal};

  span {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;
