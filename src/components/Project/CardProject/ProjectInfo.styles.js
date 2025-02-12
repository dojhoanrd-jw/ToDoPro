import styled from 'styled-components';
import { Colors } from '../../../Utils/colors';

export const InfoContainer = styled.div`
  padding: 20px;
  background-color: ${Colors.white};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const ProjectName = styled.h2`
  font-size: 1.5rem;
  color: ${Colors.textPrimary};
`;

export const Status = styled.span`
  padding: 5px 10px;
  font-size: 0.9rem;
  font-weight: bold;
  color: ${Colors.white};
  background-color: ${(props) =>
    props.status === 'Active'
      ? Colors.green
      : props.status === 'Stop'
      ? Colors.yellow
      : Colors.red};
  border-radius: 5px;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: ${Colors.textSecondary};
  margin-bottom: 15px;
`;

export const Dates = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DateItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
`;

export const Label = styled.span`
  color: ${Colors.textSecondary};
  font-weight: bold;
`;

export const Value = styled.span`
  color: ${Colors.textPrimary};
`;
