import ButtonComponent from '@components/Button/Button';
import { mediaQueriesUp } from 'src/common/mediaQueries';
import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  background: #7f50ff;
  padding: 32px 0;
  color: white;
`;

export const MainTitle = styled.h1`
  font-size: 2rem;
  margin: 0 0 32px;

  ${mediaQueriesUp('sm')`
    font-size: 3rem;
    margin: 0 0 60px;
    text-align: center;
  `}

  ${mediaQueriesUp('md')`
    font-size: 4rem;
  `}
`;

export const BottomWrapper = styled.div`
  padding-top: 16px;
  color: white;

  ${mediaQueriesUp('sm')`
    display: flex;
    justify-content: center;
  `}
`;

export const List = styled.ul`
  padding: 0;
  margin: 0 0 32px;

  ${mediaQueriesUp('sm')`
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 0 0 30px;
  `}
`;

export const ListItem = styled.li`
  list-style-type: none;
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }

  ${mediaQueriesUp('sm')`
    margin: 0 6px;
    text-align: center;
  `}

  ${mediaQueriesUp('md')`
    max-width: 180px;
    width: 100%;
    margin: 0 30px;
  `}
`;

export const ItemValue = styled.strong`
  font-size: 2rem;
  margin-right: 5px;

  ${mediaQueriesUp('sm')`
    display: block;
    margin: 0 0 10px;
  `}

  ${mediaQueriesUp('md')`
    font-size: 2.5rem;
  `}
`;

export const ButtonWrapper = styled.span`
  display: inline-block;
  margin-right: 16px;

  &:last-child {
    margin: 0;
  }
`;

export const Button = styled(ButtonComponent)`
  background: white;
  color: ${({ theme }) => theme.color.primary};;


  ${mediaQueriesUp('md')`
    border: none;
    box-shadow: 0 0 30px 0px rgba(0, 0, 0, 0.1);
    padding: 20px 30px;
  `}
`;

export const MainButtonWrapper = styled.div`
  ${mediaQueriesUp('sm')`
    display: flex;
    justify-content: center;
  `}
`;
