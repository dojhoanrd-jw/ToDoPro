import React from 'react';
import { RiDashboardFill, RiTaskFill, RiFolderChartFill } from "react-icons/ri";
import { 
  HeaderContainer, 
  LogoContainer, 
  LogoText, 
  LogoImage, 
  CenterMenu, 
  BottomMenu, 
  IconButton 
} from './Header.styles';
import logo from '../Images/img.png';
import UserMenu from './UserMenu';

const Header = ({ activeIcon, onIconSelect }) => {
  const handleIconClick = (iconName) => {
    onIconSelect(iconName);
  };

  return (
    <>
      <HeaderContainer>
        {/* Logo Section */}
        <LogoContainer>
          <LogoImage src={logo} alt="App Icon" />
          <LogoText>ToDoPro</LogoText>
        </LogoContainer>

        {/* Center Menu Section */}
        <CenterMenu>
          <IconButton
            isActive={activeIcon === 'dashboard'}
            onClick={() => handleIconClick('dashboard')}
          >
            <RiDashboardFill title="Dashboard" />
          </IconButton>
          <IconButton
            isActive={activeIcon === 'tasks'}
            onClick={() => handleIconClick('tasks')}
          >
            <RiTaskFill title="My Tasks" />
          </IconButton>
          <IconButton
            isActive={activeIcon === 'projects'}
            onClick={() => handleIconClick('projects')}
          >
            <RiFolderChartFill title="Projects" />
          </IconButton>
        </CenterMenu>

        {/* User Menu Section */}
        <UserMenu onIconSelect={onIconSelect} />
      </HeaderContainer>

      {/* Bottom Menu Section */}
      <BottomMenu>
        <IconButton
          isActive={activeIcon === 'dashboard'}
          onClick={() => handleIconClick('dashboard')}
        >
          <RiDashboardFill title="Dashboard" />
        </IconButton>
        <IconButton
          isActive={activeIcon === 'tasks'}
          onClick={() => handleIconClick('tasks')}
        >
          <RiTaskFill title="My Tasks" />
        </IconButton>
        <IconButton
          isActive={activeIcon === 'projects'}
          onClick={() => handleIconClick('projects')}
        >
          <RiFolderChartFill title="Projects" />
        </IconButton>
      </BottomMenu>
    </>
  );
};

export default Header;