import { mediaQueriesUp } from 'src/common/mediaQueries';
import styled from 'styled-components';

export const Button = styled.button`
  apparance: none;
  border: none;
  background: none;
  background: #7f50ff;
  color: ${({ isOpen }) => (isOpen ? 'white' : 'rgba(255, 255, 255, 0.5)')};
  transition: color 300ms ease-in-out;
  padding: 16px;
  width: 100%;
  text-align: left;
  font-weight: bold;
  font-size: 1.125rem;
  position: relative;
  cursor: pointer;

  &:after,
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    right: 16px;
    width: 14px;
    height: 3px;
    background: ${({ isOpen }) => (isOpen ? 'white' : 'rgba(255, 255, 255, 0.5)')};
    border-radius: 3px;
    transform: translateY(-50%);
  }

  &:before {
    transition: transform 100ms ease-in-out;
    transform: ${({ isOpen }) =>
      isOpen
        ? 'translateY(-50%) rotate(90deg) scaleX(0)'
        : 'translateY(-50%) rotate(90deg) scaleX(1)'};
    transform-origin: center;
  }

  ${mediaQueriesUp('md')(`
    padding: 15px 32px 13px;

    &:after,
    &:before {
      right: 32px;
    }
  `)}
`;

export const Wrapper = styled.div`
  border-bottom: 1px solid #b1b4b6;

  &:last-child {
    border-bottom: none;
  }
`;

export const Content = styled.div`
  padding: 0 16px;

  ${mediaQueriesUp('md')(`
    padding: 0 32px;
  `)}
`;
