import styled from 'styled-components';
import { Colors } from '../../../Utils/colors';

export const TeamContainer = styled.div`
  padding: 20px;
  background-color: ${Colors.white};
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
  box-sizing: border-box;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  color: ${Colors.textPrimary};
  font-weight: 600;
`;

export const AddButton = styled.button`
  background-color: ${Colors.darkBlue};
  color: ${Colors.white};
  padding: 12px 20px;
  border-radius: 6px;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${Colors.darkBlueHover};
  }
`;

export const TeamList = styled.div`
  margin-top: 20px;
`;

export const TeamMember = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid ${Colors.lightGray};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${Colors.lightGray};
  }
`;

export const Avatar = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  margin-right: 15px;
`;

export const Info = styled.div`
  flex: 1;
`;

export const Name = styled.h3`
  font-size: 1.1rem;
  color: ${Colors.textPrimary};
  font-weight: 600;
`;

export const EditableRole = styled.input`
  font-size: 1rem;
  color: ${Colors.textSecondary};
  border: 1px solid ${Colors.lightGray};
  border-radius: 4px;
  padding: 4px 8px;
  width: 100px;
  margin-right: 10px;

  &:focus {
    outline: none;
    border-color: ${Colors.blueLight};
  }

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const Status = styled.span`
  font-size: 1rem;
  color: ${(props) => (props.status === 'Active' ? Colors.green : Colors.red)};
  font-weight: bold;
  padding: 4px 12px;
  border-radius: 20px;
  background-color: ${(props) =>
    props.status === 'Active' ? Colors.greenLight : Colors.redLight};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

export const Tasks = styled.p`
  font-size: 1rem;
  color: ${Colors.textSecondary};
`;

export const TaskCount = styled.span`
  font-weight: 600;
  color: ${Colors.blueLight};
`;

export const RemoveButton = styled.button`
  background-color: ${Colors.red};
  color: ${Colors.white};
  padding: 8px 16px;
  font-size: 0.9rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${Colors.redDark};
  }
`;

export const RoleAndStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 100px;
  width: 100%;
`;

export const RoleAndStatusWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;
