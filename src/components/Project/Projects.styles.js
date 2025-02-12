import styled from 'styled-components';
import { Colors } from '../../Utils/colors'; 

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  min-height: 100%;
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${Colors.darkBlue};
  margin: 0 0 30px;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin: 20px 0;
  }
`;

export const ProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 10px;
  padding-bottom: 40px;
`;

export const AddProjectButton = styled.button`
  background-color: ${Colors.darkBlue};
  color: ${Colors.white};
  padding: 20px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 90%;

  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background-color: ${Colors.darkBlueHover};
  }

  .icon {
    font-size: 2rem;
  }
`;
