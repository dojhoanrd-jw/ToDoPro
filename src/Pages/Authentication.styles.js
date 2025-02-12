import styled from 'styled-components';
import { Colors } from '../Utils/colors';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  background: ${Colors.lightGray};
  overflow: hidden;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3rem;
  background-color: #ffffff;
  color: #101820;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem 1rem;
  }
`;

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 60px;

  @media (max-width: 768px) {
    height: 45px;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-left: 5px;
  color: #002855;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -2;
  overflow: hidden;
`;

export const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding-top: 6rem;

  @media (max-width: 768px) {
    padding-top: 5rem;
  }
`;

export const Card = styled.div`
  width: 90%;
  max-width: 450px;
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  background: #f5f5f5;
  border-bottom: 2px solid #d1d5db;
`;

export const Tab = styled.button`
  flex: 1;
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${props => (props.active ? '#002855' : '#6b7280')};
  background: #ffffff;
  border: none;
  border-bottom: ${props => (props.active ? '3px solid #002855' : 'none')};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: ${Colors.hovergray};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Content = styled.div`
  padding: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;
