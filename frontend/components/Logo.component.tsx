import React, { FC } from 'react';
import styled from 'styled-components';
import zacniucit_logo from '../assets/images/zacniucit_logo.png';

const SiteLogo = styled.img<{ width: number; margin?: string }>`
  width: ${(props) => props.width};
  height: auto;
  margin: ${(props) => (props.margin ? props.margin : '0')};
`;

type LogoProps = {
  width: number;
  margin?: string;
};

const Logo: FC<LogoProps> = ({ width, margin }) => {
  return (
    <>
      <SiteLogo src={zacniucit_logo} width={width} margin={margin} />
    </>
  );
};
export default Logo;
