import ButtonComponent from '@components/Button/Button';
import { mediaQueriesUp } from 'src/common/mediaQueries';
import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Path = styled.div`
  box-shadow: 0 0 30px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const Top = styled.div`
  padding: 16px 0;

  ${mediaQueriesUp('md')(`
    padding: 32px 0 24px;
  `)}
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0;

  ${mediaQueriesUp('md')(`
    font-size: 1.75rem;
  `)}
`;

export const Row = styled.div`
  margin: 0 -16px;
  border-top: 1px solid #dbdbdb;

  ${mediaQueriesUp('md')(`
    margin: 0 -32px;
  `)}
`;

export const Button = styled(ButtonComponent)`
  font-size: 15px;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  background: none;
  border: none;
  border-radius: 0;
  color: #0c0807;
  transition: background 300ms ease-in-out;

  svg {
    fill: #adadad;
    transition: transform 300ms ease-in-out;
  }

  &:hover {
    border: none;
    background: rgba(128, 82, 255, 0.1);

    svg {
      transform: translateX(2px);
    }
  }

  ${mediaQueriesUp('md')(`
    padding: 20px 32px;
  `)}
`;

export const Number = styled.span`
  display: inline-block;
  margin-right: 10px;
  color: #7f50ff;
`;

export const Inactive = styled.div`
  font-size: 15px;
  padding: 12px 16px;
  font-weight: bold;
  color: #0c0807;
  background: rgba(255, 182, 11, 0.1);

  &:after {
    content: 'Pro tento krok neumíme v součastné době zobrazit dostupné kurzy.';
    opacity: 0.8;
    font-size: 14px;
    margin-top: 10px;
    display: inline-block;
    background: rgba(255, 182, 11, 0.6);
    border: 1px solid #ffb60b;
    padding: 3px 10px;
    margin-left: 20px;
    border-radius: 5px;
  }

  ${mediaQueriesUp('md')(`
    padding: 20px 32px;
  `)}
`;
