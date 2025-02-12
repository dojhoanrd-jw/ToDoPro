import styled from 'styled-components';
import { Colors } from '../../../Utils/colors';

export const CardViewContainer = styled.div`
  background-color: transparent;
  padding: 0px;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  min-height: 100vh;
`;

export const Header = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 20px;
  padding: 10px;
  background-color: transparent;
  z-index: 1;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  color: ${Colors.darkBlue};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const BackButton = styled.button`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  color: ${Colors.blueLight};
  cursor: pointer;
  font-size: 1.8rem;

  &:hover {
    text-decoration: underline;
    color: ${Colors.darkBlueHover};
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 20px;
  padding-bottom: 10px;

  & > :nth-child(3) {
    grid-column: span 2;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;

    & > :nth-child(3) {
      grid-column: span 1;
    }
  }
`;

export const Section = styled.div`
  background-color: ${Colors.white};
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 2rem;
  color: ${Colors.darkBlue};
  margin-bottom: 20px;
  border-bottom: 3px solid ${Colors.blueLight};
  padding-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 15px;
  }
`;
