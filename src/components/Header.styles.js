import styled from 'styled-components';
import { Colors } from '../Utils/colors';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 40px;
  background-color: ${Colors.white};
  color: ${Colors.charcoal};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const LogoText = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: ${Colors.darkBlue};
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

export const LogoImage = styled.img`
  width: 40px;
  height: 40px;
`;

export const CenterMenu = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const BottomMenu = styled.div`
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f1f1f1;
  padding: 10px 0;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);
  align-items: center;
  z-index: 1000;
  height: 9%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-evenly;
  }
`;

export const IconButton = styled.div.attrs((props) => ({
  // Elimina el prop isActive antes de pasarlo al DOM
  'data-is-active': props.isActive,
}))`
  cursor: pointer;
  font-size: 36px;
  color: ${({ isActive }) => (isActive ? Colors.darkBlue : Colors.mutedGray)};
  transition: color 0.3s ease, transform 0.2s ease;

  &:hover {
    color: ${Colors.darkBlue};
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    font-size: 35px;
  }
`;
