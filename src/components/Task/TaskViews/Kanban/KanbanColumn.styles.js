import styled from 'styled-components';
import { Colors } from './colors';

export const ColumnContainer = styled.div`
  background-color: ${Colors.lightGray};
  border-radius: 10px;
  padding: 15px;
  flex: 1;
  margin: 0 10px;
  max-width: 300px;
`;

export const ColumnHeader = styled.h3`
  font-size: 18px;
  color: ${Colors.mistGray};
  margin-bottom: 15px;
`;
