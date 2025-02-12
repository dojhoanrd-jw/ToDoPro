import styled from 'styled-components';
import { Colors } from '../../../Utils/colors';

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
  z-index: 999;
  overflow: hidden;

  &.open {
    body {
      overflow: hidden;
    }
  }

  @media (max-width: 768px) {
    height: 95%;
  }
`;

export const ModalContainer = styled.div`
  background: ${Colors.white};
  width: 900px;
  max-width: 90%;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px;
  height: auto;
  max-height: 80vh;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
    margin: 10px;
    overflow-y: auto;
    max-height: 90vh;
  }
`;

export const TitleContainer = styled.div`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: ${Colors.textHighlight};
  margin-bottom: 8px;
`;

export const ContentColumns = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 20px;
  margin-top: 15px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1px;
  background-color: ${Colors.lightGray};
  border-radius: 8px;
`;

export const ControlsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  width: 100%;

  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    height: 100%;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  padding-right: 10px;

  label {
    font-size: 16px;
    font-weight: bold;
    color: ${Colors.textHighlight};
  }

  input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    background-color: ${Colors.mistGray};
    box-shadow: inset 0 2px 5px rgba(240, 238, 238, 0.1);
    box-sizing: border-box;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${Colors.mutedGray};
    }

    &:-webkit-autofill {
      box-shadow: 0 0 0px 1000px ${Colors.mistGray} inset;
      -webkit-text-fill-color: ${Colors.charcoal};
      transition: background-color 5000s ease-in-out 0s;
    }
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;

  label {
    font-size: 16px;
    font-weight: bold;
    color: ${Colors.textHighlight};
  }

  .DraftEditor-root {
    height: 200px;
    max-height: 200px;
    border: 1px solid ${Colors.border};
    padding: 8px;
    border-radius: 8px;
    background-color: ${Colors.lightGray};
    overflow-y: auto;
    overflow-x: hidden;
    font-size: 16px;
    line-height: 1;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      background: ${Colors.transparent};
      border-radius: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${Colors.mistGray};
      border-radius: 8px;
      border: 2px solid transparent;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: transparent;
    }

    .public-DraftEditor-content {
      padding: 0;
    }
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: ${Colors.white};
  padding: 10px;
  border-radius: 8px;

  label {
    font-size: 16px;
    font-weight: bold;
    color: ${Colors.textHighlight};
    margin-bottom: 4px;
  }

  select,
  input {
    width: 100%;
    padding: 8px;
    font-size: 14px;
    border: none;
    border-radius: 6px;
    background-color: ${Colors.mistGray};

    &:focus {
      outline: none;
      border-color: ${Colors.primaryBlue};
      box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.1);
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-top: 15px;
  background-color: ${Colors.white};
  padding: 10px 0;
  z-index: 1000;
  margin-top: auto;
  width: 100%;

  @media (max-width: 768px) {
    border-top: 1px solid ${Colors.hovergray};
    justify-content: space-between;
    padding: 10px 0px 20px 0px;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  background: ${Colors.darkBlue};
  color: ${Colors.white};
  border: 1px solid ${Colors.border};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${Colors.darkBlueHover};
  }
`;

export const Toolbar = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px;
  border: 1px solid ${Colors.border};
  border-radius: 8px;
  background-color: ${Colors.lightGray};

  button {
    padding: 6px 10px;
    font-size: 14px;
    background-color: ${Colors.mistGray};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background-color: ${Colors.hovergray};
    }
  }
`;
