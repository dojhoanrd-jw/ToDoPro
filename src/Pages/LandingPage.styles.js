import styled, { keyframes } from 'styled-components';
import { Colors } from '../Utils/colors';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${Colors.white};
  color: ${Colors.darkBlue};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-sizing: border-box;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const Menu = styled.nav`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuMobile = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: #333;
    width: 200px;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
`;

export const Button = styled.button`
  background-color: ${Colors.darkBlue};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-left: 10px;
  }

  &:hover {
    background-color: ${Colors.darkBlueHover};
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    font-size: 30px;
    cursor: pointer;
  }
`;

export const MenuItems = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 20px;
`;

export const MenuItem = styled.li`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const MobileMenuItems = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const WelcomeSection = styled.section`
  height: 90vh;
  background-color: ${Colors.mistGray};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${Colors.darkBlue};
  padding: 0 20px;
  margin-top: 1px;
`;

export const Content = styled.div`
  max-width: 800px;
  animation: ${fadeIn} 1.5s ease-in-out;
`;

export const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const Subtitle = styled.p`
  font-size: 20px;
  margin-bottom: 40px;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const StartButton = styled.button`
  background-color: ${Colors.darkBlue};
  color: white;
  padding: 15px 40px;
  font-size: 18px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${Colors.darkBlueHover};
  }
`;

export const FeaturesSection = styled.section`
  padding: 20px;
  background-color: #f9f9f9;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
  color: ${Colors.darkBlue};
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    display: flex;
    overflow-x: auto;
    gap: 20px;
    scroll-snap-type: x mandatory;
  }
`;

export const FeatureCard = styled.div`
  background-color: #fff;
  padding: 30px 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 250px;
  flex-shrink: 0;
  scroll-snap-align: start;

  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const FeatureImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 20px;
`;

export const FeatureTitle = styled.h3`
  font-size: 22px;
  margin-bottom: 10px;
  color: ${Colors.charcoal};
`;

export const FeatureDescription = styled.p`
  font-size: 16px;
  color: #666;
`;

export const CTASection = styled.section`
  background-color: ${Colors.mistGray};
  color: ${Colors.darkBlue};
  padding: 60px 20px;
  text-align: center;
`;

export const CTAButton = styled.button`
  background-color: ${Colors.darkBlue};
  color: white;
  padding: 15px 40px;
  font-size: 18px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color:${Colors.darkBlueHover};
  }
`;

export const Footer = styled.footer`
  background-color: ${Colors.charcoal};
  color: white;
  padding: 40px 20px;
  text-align: center;
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 20px;

  a {
    color: white;
    text-decoration: none;
    font-size: 16px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const FooterText = styled.p`
  font-size: 14px;
  color: #bbb;
`;
