import React, { FC, InputHTMLAttributes } from 'react';
import Image from 'next/image';
import infoIcon from '../../../public/images/info-icon.svg';
import { HintText } from './styled';

type Props = { hintText: string };

export const Hint: FC<Props> = ({ hintText }) => (
  <>
    <Image src={infoIcon} height="15" width="15" />
    <HintText>{hintText}</HintText>
  </>
);
