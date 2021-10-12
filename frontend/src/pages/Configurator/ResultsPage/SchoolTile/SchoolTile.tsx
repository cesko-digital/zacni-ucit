import React from 'react';

import {
  Top,
  Title,
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
  duration: string;
  price: string;
  studyType: string;
  location: string;
  onClick: () => void;
}

const SchoolTile: React.FC<Props> = ({
  schoolName,
  type,
  description,
  duration,
  price,
  studyType,
  location,
  onClick,
}) => (
  <article>
    <Top onClick={onClick}>
      <ImageWrapper />
      <div>
        <Title>{schoolName}</Title>
        <Paragraph>
          <IconWrapper>
            <HatIcon />
          </IconWrapper>
          {type}
        </Paragraph>
        <Paragraph>{description}</Paragraph>
      </div>
      <ChevronWrapper>
        <ChevronIcon />
      </ChevronWrapper>
    </Top>
    <Bottom>
      <Line>
        <IconWrapper>
          <ClockIcon />
        </IconWrapper>
        {duration}
      </Line>
      <Line>
        <IconWrapper>
          <TagIcon />
        </IconWrapper>
        {price}
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
