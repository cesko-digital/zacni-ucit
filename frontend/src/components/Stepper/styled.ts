import styled from 'styled-components';
import { mediaQueries } from '../../common/mediaQueries';
import { theme } from '../../common/theme';

export const Wrap = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  height: 5rem;
  ${mediaQueries('md')`
 width:100%;
      
  `}
`;

export const List = styled.ul`
  width: 120%;
  margin-left: -10%;
  height: 5rem;
  counter-reset: step;
  display: block;
  padding-inline-start: 0;
  ${mediaQueries('md')`
  	display: flex;
      justify-content: flex-start;
      align-items: center;
      width:100vw;
      margin-left: 0;
      
  `}
`;

export const MobileStepperLabel = styled.p`
  display: none;

  ${mediaQueries('md')`
   display: block;
   margin-right: 0.5rem;
   font-size: 0.75rem;
  `}
`;

export const ListItem = styled.li`
  list-style-type: none;
  float: left;
  width: 25%;
  display: block;
  position: relative;
  text-align: center;
  color: transparent;
  ${mediaQueries('md')`
    	float: none;
		width: auto;
		display: inline;
		margin-right: 1rem;
      `}

  & span {
    display: block;
    font-size: ${theme.fontSize.normal};

    ${mediaQueries('md')`
      display: none;
      `}
  }

  &:before {
    content: counter(step);
    counter-increment: step;
    width: 2rem;
    height: 2rem;
    line-height: 2rem;
    font-size: 1rem;
    font-weight: 500;
    background: ${theme.color.gray};
    color: white;
    border-radius: 50%;
    display: block;
    text-align: center;
    margin: 0 auto 10px auto;
    ${mediaQueries('md')`
   content: '';
   width: 16px;
   height: 4px;
   border-radius: 8px;
   border: none;
   background: #D8D8D7;
   line-height: 0;
   margin: 0;
  
  `}
  }

  &:not(:last-child):after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${theme.color.primary};
    opacity: 0.2;
    top: 1rem;
    left: 50%;
    z-index: -1;
    ${mediaQueries('md')`
   display: none;
      `}
  }

  &.previousStep:before {
    content: '✓';
    color: white;
    font-weight: 700;
    background: ${theme.color.green};
    border: none;
    ${mediaQueries('md')`
  content: "";
      `}
  }

  &.selectedStep {
    color: ${theme.color.secondary};
  }

  &.selectedStep:before {
    background: ${theme.color.green};
    color: white;
    font-weight: 700;
    border: none;
  }

  &.previousStep::after {
    height: 5px;
    background: ${theme.color.green};
    opacity: 1;
  }
`;
