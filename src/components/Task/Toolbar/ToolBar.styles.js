import styled from 'styled-components';
import { Colors } from '../../../Utils/colors';

export const ToolbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: ${Colors.white};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  margin-bottom: 1px;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 10px;
    padding: 10px 15px;
    margin: 10px;
  }

  @media (max-width: 480px) {
    gap: 5px;
    padding: 8px 10px;
    margin: 8px;
  }
`;

export const ProjectDropdownContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${Colors.white};
  border-radius: 15px;
  padding: 5px;
  font-weight: bold;
  font-size: 16px;

  label {
    font-size: 16px;
    color: ${Colors.blueLight};
    font-weight: bold;
    margin-bottom: 4px;
  }

  select {
    color: ${Colors.charcoal};
    background-color: ${Colors.mistGray};
    cursor: pointer;
    padding: 10px;

    &:focus {
      outline: none;
      border-color: ${Colors.lightGray};
    }
  }

  @media (max-width: 768px) {
    gap: 8px;
  }

  @media (max-width: 480px) {
    gap: 5px;
    margin: 5px 0;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 768px) {
    gap: 10px;
  }

  @media (max-width: 480px) {
    gap: 5px;
    margin: 5px 0;
  }
`;

export const ToolbarButton = styled.button`
  display: flex;
  align-items: center;
  background-color: ${Colors.darkBlue};
  border: 2px solid ${Colors.darkBlue};
  color: ${Colors.white};
  border-radius: 50px;
  padding: 10px 15px;
  font-size: 14px;
  cursor: pointer;
  transition: transform 0.3s ease;

  span {
    margin-left: 10px;
    font-weight: 500;
    display: inline-block;

    @media (max-width: 480px) {
      display: none;
    }
  }

  &:hover {
    background-color: ${Colors.darkBlueHover};
    color: ${Colors.white};
    transform: scale(1.05);
  }

  &:active {
    transform: translateY(2px);
  }

  @media (max-width: 480px) {
    padding: 8px 10px;
    font-size: 12px;
    margin: 0 5px;
  }
`;

export const Dropdown = styled.select`
  padding: 8px 12px;
  font-size: 16px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${Colors.red};
  background: ${Colors.red};
  border: none;

  option {
    background-color: ${Colors.white};
    color: ${Colors.charcoal};
    cursor: pointer;

    &:hover {
      background-color: ${Colors.mistGray};
      color: ${Colors.white};
    }
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 6px 8px;
    margin: 5px 0;
  }
`;

