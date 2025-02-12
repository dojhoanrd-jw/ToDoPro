import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Header,
  Logo,
  Button,
  WelcomeSection,
  Content,
  Title,
  Subtitle,
  StartButton,
  FeaturesSection,
  SectionTitle,
  FeaturesGrid,
  FeatureCard,
  FeatureImage,
  FeatureTitle,
  FeatureDescription,
  CTASection,
  CTAButton,
  Footer,
  FooterLinks,
  FooterText
} from './LandingPage.styles';
import FeatureDashboard from '../Images/FeatureDashboard.png';
import FeatureTask from '../Images/FeatureTask.png';
import FeatureTeamManagement from '../Images/FeatureTeamManagement.png';
import FeatureSecurity from '../Images/FeatureSecurity.png';

const LandingPage = () => {
  return (
    <>
      <Header>
        <Logo>ToDoPro</Logo>
        <Link to="/auth">
        <Button>Sign In</Button>
        </Link>
      </Header>

      <WelcomeSection>
        <Content>
          <Title>Welcome to ToDoPro!</Title>
          <Subtitle>Organize your tasks, manage your projects, and achieve your goals. All in one place.</Subtitle>
          <Link to="/auth">
            <StartButton>Get Started Now</StartButton>
            </Link>
        </Content>
      </WelcomeSection>

      <FeaturesSection>
        <SectionTitle>Main Features</SectionTitle>
        <FeaturesGrid>
          <FeatureCard>
            <FeatureImage src={FeatureDashboard} alt="Task Management" />
            <FeatureTitle>Dashboard Overview</FeatureTitle>
            <FeatureDescription>
            Track task counts, statuses, and upcoming deadlines with an intuitive dashboard.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureImage src={FeatureTask} alt="Smart Reminders" />
            <FeatureTitle>Task Management</FeatureTitle>
            <FeatureDescription>
            Organize, prioritize, and track tasks efficiently for improved productivity daily.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureImage src={FeatureTeamManagement} alt="Team Collaboration" />
            <FeatureTitle>Team Collaboration</FeatureTitle>
            <FeatureDescription>
            Boost teamwork with shared tasks, real-time updates, and seamless communication.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureImage src={FeatureSecurity} alt="Progress Reports" />
            <FeatureTitle>Secure Task Management</FeatureTitle>
            <FeatureDescription>
            Manage tasks securely with encrypted data, access controls, and safe storage.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>

      <CTASection>
        <h2>Don't wait any longer to organize your tasks!</h2>
        <CTAButton>Get Started Today</CTAButton>
      </CTASection>

      <Footer>
        <FooterLinks>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact</a>
        </FooterLinks>
        <FooterText>&copy; 2025 ToDoPro. All rights reserved.</FooterText>
      </Footer>
    </>
  );
};

export default LandingPage;
