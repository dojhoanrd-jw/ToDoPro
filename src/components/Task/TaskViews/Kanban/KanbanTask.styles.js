import styled from 'styled-components';
import { Colors } from '../colors';

export const TaskCard = styled.div`
  background-color: ${Colors.white};
  border: 1px solid ${Colors.lightGray};
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 8px;

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const TaskHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TaskName = styled.h4`
  margin: 0;
  font-size: 16px;
  color: ${Colors.mistGray};
`;

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const TaskDetails = styled.div`
  font-size: 14px;
  color: ${Colors.mistGray};

  span {
    font-weight: bold;
    color: ${Colors.mistGray};
  }
`;
