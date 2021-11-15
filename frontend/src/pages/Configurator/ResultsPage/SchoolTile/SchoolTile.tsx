import React from 'react';

import {
  Top,
  Title,
  Type,
  Paragraph,
  ImageWrapper,
  IconWrapper,
  Line,
  Bottom,
  ChevronWrapper,
} from './styled';

import ClockIcon from '@icons/clock.svg';
import PinIcon from '@icons/pin.svg';
import HatIcon from '@icons/hat.svg';
import TagIcon from '@icons/tag.svg';
import ChevronIcon from '@icons/chevron-right.svg';

interface Props {
  schoolName: string;
  type: string;
  description: string;
  duration: number;
  price: number | string;
  studyType: string;
  location: string;
  href: string;
}

const SchoolTile: React.FC<Props> = ({
  schoolName,
  type,
  description,
  duration,
  price,
  studyType,
  location,
  href,
}) => (
  <article>
    <Top href={href}>
      <ImageWrapper />
      <span>
        <Title>{schoolName}</Title>
        <Type>
          <IconWrapper>
            <HatIcon />
          </IconWrapper>
          {type}
        </Type>
        <Paragraph>{description}</Paragraph>
      </span>
      <ChevronWrapper>
        <ChevronIcon />
      </ChevronWrapper>
    </Top>
    <Bottom>
      <Line>
        <IconWrapper>
          <ClockIcon />
        </IconWrapper>
        {duration} semestr
        {duration > 1 && duration <= 4 && 'y'}
        {duration > 4 && 'ů'}
      </Line>
      <Line>
        <IconWrapper>
          <TagIcon />
        </IconWrapper>
        {typeof price === 'number' ? `${price} Kč` : price}
      </Line>
      <Line>
        <IconWrapper>
          <HatIcon />
        </IconWrapper>
        {studyType}
      </Line>
      <Line>
        <IconWrapper>
          <PinIcon />
        </IconWrapper>
        {location}
      </Line>
    </Bottom>
  </article>
);

export default SchoolTile;
