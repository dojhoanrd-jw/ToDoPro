import styled from 'styled-components';
import { Colors } from '../Utils/colors';

export const Container = styled.div`
  padding: 0px;
  width: 100%;
  margin: 0;
  background-color: ${Colors.mistGray};
  color: #333;
`;

export const ContentWrapper = styled.div`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 0px; 
  }
`;
