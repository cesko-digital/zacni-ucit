import type { ICrossroadItem } from '@components/CrossroadItem/CrossroadItem';
import CrossroadItem from '@components/CrossroadItem/CrossroadItem';
import { routes } from '@routes';
import React from 'react';

import { TopWrapper, Logo, MainTitle, CrossroadList } from './styled';
import BackButton from '@pages/BackButton/BackButton';
import BackToHomeButton from '@components/BackToHomeButton/BackToHomeButton';
import Container from '@components/Container/Container';
import Meta from '@components/Meta/Meta';

interface Props {
  logo: string;
  title: string | JSX.Element;
  metaTitle: string;
  text: JSX.Element;
  items: ICrossroadItem[];
}

const StartTeachingCrossroadPage: React.FC<Props> = ({ logo, title, metaTitle, text, items }) => (
  <Container>
    <Meta title={metaTitle} />
    <BackButton href={routes.startTeaching.crossroad} icon="home">
      Zpátky na výběr kde chci učit
    </BackButton>
    <TopWrapper>
      <Logo src={logo} alt="" />
      <div>
        <MainTitle>{title}</MainTitle>
      </div>
    </TopWrapper>
    {text}
    <CrossroadList>
      {items.map(item => (
        <CrossroadItem key={item.button.href} size="md" {...item} />
      ))}
    </CrossroadList>
    <BackToHomeButton href={routes.startTeaching.crossroad}>
      Zpátky na výběr, kde chci učit
    </BackToHomeButton>
  </Container>
);

export default StartTeachingCrossroadPage;
