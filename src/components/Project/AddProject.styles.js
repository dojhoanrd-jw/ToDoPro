import styled from 'styled-components'; 
import { Colors } from '../../Utils/colors'; 

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: ${Colors.white};
  padding: 30px;
  border-radius: 15px;
  width: 600px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    width: 90%;
    padding: 20px;
    margin: 10px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h2 {
    margin: 0;
    font-size: 1.5rem;
    color: ${Colors.textHighlight};
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${Colors.textHighlight};
  cursor: pointer;
  
  &:hover {
    color: ${Colors.darkBlue};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  label {
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    color: ${Colors.textPrimary};

    input,
    textarea {
      margin-top: 10px;
      padding: 10px;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      background-color: ${Colors.mistGray};
      color: ${Colors.charcoal};
      
      &::placeholder {
        color: ${Colors.mutedGray};
      }
    }

    textarea {
      resize: none;
      height: 120px;
    }

    small {
      margin-top: 5px;
      font-size: 0.9rem;
      color: ${Colors.mutedGray};
    }
  }
`;

export const SubmitButton = styled.button`
  background: ${Colors.darkBlue};
  color: ${Colors.white};
  border: none;
  border-radius: 8px;
  padding: 15px 20px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: ${Colors.darkBlueHover};
  }

  &:disabled {
    background: ${Colors.lightGray};
    cursor: not-allowed;
  }
`;
