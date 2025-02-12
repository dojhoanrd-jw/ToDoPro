import styled from 'styled-components';
import { Colors } from '../../../Utils/colors';

export const ModalContainer = styled.div`
  margin-top: 0px;
  padding: 10px;
  border-radius: 12px;
  background-color: ${Colors.white};
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  width: 100%;
  box-sizing: border-box;
`;

export const ModalContent = styled.div`
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid ${Colors.lightGray};
  background: ${Colors.mistGray};
  border-radius: 6px;
  font-size: 1rem;
  color: ${Colors.textPrimary};
  transition: border-color 0.3s;
  max-width: 100%;
  box-sizing: border-box;

  &:focus {
    border-color: ${Colors.blueLight};
  }
`;

export const Error = styled.p`
  color: ${Colors.red};
  font-size: 0.9rem;
  margin-bottom: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ModalButton = styled.button`
  background-color: ${Colors.darkBlue};
  color: ${Colors.white};
  padding: 12px 20px;
  font-size: 1rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${Colors.darkBlueHover};
  }
`;
