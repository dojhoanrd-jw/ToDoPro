import styled from 'styled-components';
import { Colors } from '../../Utils/colors';

export const DashboardContainer = styled.div`
  padding: 0px 3px;
  margin: 0px;
  width: 100%;
  background: ${Colors.mistGray};
  border-radius: 16px;
  box-sizing: border-box;
  padding-bottom: 30px;

  @media (max-width: 768px) {
    padding: 0px 10px;
    margin: 0px;
    padding-bottom: 50px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.6em;
  color: ${Colors.textPrimary};
  margin-bottom: 15px;
  text-align: left;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.3em;
  }
`;

export const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
`;

export const SummaryTile = styled.div`
  background: ${Colors.darkBlue};
  color: white;
  padding: 15px;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

export const TileHeader = styled.h4`
  font-size: 1.2em;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

export const TileBody = styled.p`
  font-size: 2em;
  font-weight: 600;
  margin-top: 5px;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

export const TaskGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 10px 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
`;

export const TaskCard = styled.div`
  background: ${Colors.lightBackground};
  border-radius: 16px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

export const TaskHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  svg {
    flex-shrink: 0;
    background: ${Colors.lightBackgroundHover};
    border-radius: 50%;
    padding: 10px;
    color: ${Colors.darkBlue};
    font-size: 24px;
  }

  @media (max-width: 768px) {
    gap: 10px;

    svg {
      font-size: 20px;
      padding: 8px;
    }
  }
`;

export const TaskTitle = styled.h3`
  font-size: 1.2em;
  font-weight: bold;
  margin: 0;
  color: ${Colors.textPrimary};

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

export const TaskBody = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 10px;

  p {
    font-size: 0.9em;
    margin: 0;

    strong {
      font-weight: bold;
      color: ${Colors.textPrimary};
    }
  }

  @media (max-width: 768px) {
    p {
      font-size: 0.8em;
    }
  }
`;

export const TaskFooter = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .priority {
    font-size: 0.9em;
    font-weight: bold;
    color: ${({ priority }) => (priority === 'High' ? 'red' : Colors.mistGray)};
  }

  .expiration {
    font-size: 0.9em;
    color: ${Colors.mistGray};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;

    .priority,
    .expiration {
      font-size: 0.8em;
    }
  }
`;
