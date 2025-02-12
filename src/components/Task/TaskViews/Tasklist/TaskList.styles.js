import styled from 'styled-components';
import { Colors } from '../../../../Utils/colors';

export const ScrollableContainer = styled.div`
  overflow-x: auto;
  max-width: 100%;
  margin: 0 auto;
  padding: 10px;
  border-radius: 10px;
  position: relative;
  z-index: 0;

  &::after {
    content: '';
    display: block;
    width: 30px;
    height: 1px;
  }

  &::-webkit-scrollbar {
    height: 8px;
    background: ${Colors.lightGray};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${Colors.gray};
    border-radius: 10px;
  }
`;

export const Table = styled.table`
  width: 100%;
  min-width: 800px;
  border-collapse: collapse;
  background-color: ${Colors.white};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  overflow: hidden;
`;

export const TableHeader = styled.th`
  background-color: ${Colors.darkBlue};
  color: ${Colors.white};
  padding: 12px 15px;
  text-align: center;
  font-size: 14px;
`;

export const TableCell = styled.td`
  padding: 12px 15px;
  text-align: center;
  border-bottom: 1px solid ${Colors.softWhite};
  font-size: 14px;
  color: ${Colors.charcoal};
`;

export const TableRow = styled.tr`
  &:hover {
    background-color: ${Colors.lightGray};
    cursor: pointer;
  }
`;

export const NoDataRow = styled.tr`
  text-align: center;
  background-color: ${Colors.white};
  color: ${Colors.lightGray};
  font-size: 16px;
  font-style: italic;
`;
