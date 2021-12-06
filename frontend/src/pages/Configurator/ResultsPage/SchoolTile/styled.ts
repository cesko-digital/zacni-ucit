import Button from '@components/Button/Button';
import { mediaQueriesUp } from 'src/common/mediaQueries';
import styled from 'styled-components';

export const Top = styled(Button)`
  appearance: none;
  width: 100%;
  background: none;
  padding: 0 0 16px;
  display: flex;
  border: none;
  border-bottom: 1px solid #ecebeb;
  position: relative;
  color: black;
  text-decoration: none;
  font-weight: normal;

  svg {
    fill: #0c0807;
  }
`;

export const Title = styled.strong`
  font-size: 0.875rem;
  display: block;
  margin-bottom: 4px;

  ${mediaQueriesUp('sm')`
    font-size: 1.5rem;
    margin-bottom: 10px;
  `}
`;

export const Type = styled.span`
  display: flex;
  align-items: center;
  font-size: 0.875rem;

  ${mediaQueriesUp('sm')`
    font-size: 1rem;
    margin-bottom: 5px;
  `}
`;

export const Paragraph = styled.p`
  margin: 0 0 4px;
  padding-right: 20px;
  font-size: 0.875rem;

  ${mediaQueriesUp('sm')`
    font-size: 1rem;
    margin-bottom: 5px;
  `}
`;

export const ImageWrapper = styled.span`
  background: red;
  width: 64px;
  height: 100px;
  margin-right: 16px;
  display: none;
`;

export const IconWrapper = styled.span`
  width: 16px;
  height: 16px;
  margin-right: 10px;
  display: block;
  flex-shrink: 0;

  svg {
    display: block;
  }
`;

export const Line = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0;

  ${mediaQueriesUp('md')`
    width: calc(50% - 20px);
    margin: 0 10px;
    display: flex;
  `}
`;

export const Bottom = styled.div`
  padding: 10px;

  ${mediaQueriesUp('md')`
    padding: 15px 0;
    margin: 0 -10px;
    display: flex;
    flex-wrap: wrap;
  `}
`;

export const ChevronWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 40%;
  width: 8px;
  height: 12px;
  transform: translateY(-50%);

  svg {
    display: block;
  }
`;
