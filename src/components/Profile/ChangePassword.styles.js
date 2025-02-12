import styled from 'styled-components';
import { Colors } from '../../Utils/colors';

export const Section = styled.div`
  background-color: ${Colors.white};
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 22px;
  color: ${Colors.darkBlue};
  margin-bottom: 20px;
`;

export const SectionContent = styled.div`
  font-size: 16px;
  color: ${Colors.charcoal};
  margin-bottom: 15px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 20px 14px 14px;
  margin-top: 8px;
  border-radius: 8px;
  border: none;
  background-color: ${Colors.lightBackground};
  font-size: 15px;
  transition: border-color 0.3s ease;
  box-sizing: border-box;

  &:focus {
    border-color: ${Colors.darkBlue};
  }

  &[disabled] {
    background-color: ${Colors.backgroundDisabled};
    cursor: not-allowed;
  }
`;

export const ActionButton = styled.button`
  background-color: ${Colors.darkBlue};
  color: white;
  padding: 12px 18px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${Colors.darkBlueHover};
  }
`;
