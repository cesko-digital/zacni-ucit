import React from 'react';

import { TopWrapper, Logo, MainTitle, CrossroadList } from './styled';
import BackToHomeButton from '@components/BackToHomeButton/BackToHomeButton';
import Container from '@components/Container/Container';
import CrossroadItem from '@components/CrossroadItem/CrossroadItem';
import type { ICrossroadItem } from '@components/CrossroadItem/CrossroadItem';
import Meta from '@components/Meta/Meta';
import BackButton from '@pages/BackButton/BackButton';
import { routes } from '@routes';

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
    <BackButton
      href={`${routes.startTeaching.crossroad}#zakon-o-pedagogickych-pracovnicich`}
      icon="arrow"
    >
      Zpátky na výběr, kde chci učit
    </BackButton>
    <TopWrapper>
      <Logo alt="" src={logo} />
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
    <BackToHomeButton href={`${routes.startTeaching.crossroad}#zakon-o-pedagogickych-pracovnicich`}>
      Zpátky na výběr, kde chci učit
    </BackToHomeButton>
  </Container>
);

export default StartTeachingCrossroadPage;
