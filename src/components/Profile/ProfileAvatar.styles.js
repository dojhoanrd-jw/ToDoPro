import styled from 'styled-components';
import { Colors } from '../../Utils/colors';

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

export const Avatar = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid ${Colors.darkBlue};
`;

export const ChangeAvatarButton = styled.button`
  margin-top: 10px;
  padding: 12px 18px;
  background-color: ${Colors.darkBlue};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${Colors.darkBlueHover};
  }
`;
