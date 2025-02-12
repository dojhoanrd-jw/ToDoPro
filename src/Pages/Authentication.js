import React, { useState } from 'react';
import SignIn from '../components/Authentication/SignIn';
import SignUp from '../components/Authentication/SignUp';
import { Wrapper, Header, HeaderContent, Left, Logo, Title, Background, CenteredContainer, Card, Tabs, Tab, Content } from './Authentication.styles'; 

import logo from '../Images/img.png';

const Authentication = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <Wrapper>
      <Header>
        <HeaderContent>
          <Left>
            <Logo src={logo} alt="App Icon" />
            <Title>ToDoPro</Title>
          </Left>
        </HeaderContent>
      </Header>
      <Background>
        <svg width="100%" height="100%" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#002855" d="M0,128L30,160C60,192,120,256,180,245.3C240,235,300,149,360,128C420,107,480,149,540,170.7C600,192,660,192,720,170.7C780,149,840,107,900,96C960,85,1020,107,1080,128C1140,149,1200,171,1260,181.3C1320,192,1380,192,1410,192L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
        </svg>
      </Background>
      <CenteredContainer>
        <Card>
          <Tabs>
            <Tab active={!isSignUp} onClick={() => setIsSignUp(false)}>
              Sign In
            </Tab>
            <Tab active={isSignUp} onClick={() => setIsSignUp(true)}>
              Sign Up
            </Tab>
          </Tabs>
          <Content>{isSignUp ? <SignUp /> : <SignIn />}</Content>
        </Card>
      </CenteredContainer>
    </Wrapper>
  );
};

export default Authentication;
