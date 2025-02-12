import styled from 'styled-components';
import { Colors } from '../../Utils/colors';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 40px;
  background-color: ${Colors.lightBackground};
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  margin: 5px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px 20px 50px 20px;
  }
`;

export const LeftPanel = styled.div`
  flex: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  margin-right: 1%;

  @media (max-width: 768px) {
    flex: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const RightPanel = styled.div`
  flex: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex: 100%;
    padding-bottom: 100px;
  }
`;

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
  display: flex;
  align-items: center;
`;

export const SectionContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding-right: 20px;
  }
`;

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 10px;

  strong {
    font-size: 14px;
    color: ${Colors.charcoal};
    margin-bottom: 8px;
  }

  div,
  input {
    font-size: 16px;
    margin-bottom: 15px;
  }

  @media (max-width: 768px) {
    margin-bottom: 1px;
    padding-right: 10px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px;
  margin-top: 8px;
  margin-right: 20px;
  border-radius: 8px;
  border: 1px solid ${Colors.lightGray};
  background-color: ${Colors.mistGray};
  font-size: 15px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${Colors.darkBlueHover};
  }

  &[disabled] {
    background-color: ${Colors.mistGray};
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    padding-right: 15px;
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
  transition: background-color 0.3s ease;
  margin-top: auto;

  &:hover {
    background-color: ${Colors.darkBlueHover};
  }

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;
