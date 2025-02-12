import styled from 'styled-components';
import { Colors } from '../Utils/colors';

export const MenuContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

export const DropdownMenu = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;
  top: 50px;
  right: 0;
  background-color: #fff;
  color: #333;
  width: 180px;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 3px 5px;
  z-index: 10;
  opacity: ${({ open }) => (open ? '1' : '0')};
  transition: opacity 0.3s ease;
`;

export const MenuItem = styled.div`
  padding: 12px 20px;
  cursor: pointer;
  font-size: 16px;
  color: #333;
  font-weight: 500;
  display: flex;
  align-items: center;

  &:hover {
    background-color: ${Colors.darkBlue};
    color: white;
    border-radius: 8px;
  }
`;

export const MenuIcon = styled.div`
  margin-right: 10px;
  font-size: 18px;
`;

export const UserIcon = styled.div`
  width: 45px;
  height: 45px;
  background-color: ${Colors.darkBlue};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: white;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const InitialIcon = styled.div`
  width: 45px;
  height: 45px;
  background-color:${Colors.darkBlue};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: white;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;
