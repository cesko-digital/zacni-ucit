import React from 'react';

import { Wrap, Subtitle, Image, Content, ListWrapper } from './styled';
import BackToHomeButton from '@components/BackToHomeButton/BackToHomeButton';
import Container from '@components/Container/Container';
import Meta from '@components/Meta/Meta';
import { H1, LightText, LinkRegular } from '@components/Typography';
import BackButton from '@pages/BackButton/BackButton';
import { routes } from '@routes';
import { theme } from 'src/common/theme';

interface Props {
  title: string;
  text: string;
  image: string;
  withCheckOtherPages?: boolean;
}

const ErrorPage: React.FC<Props> = ({ title, text, image, withCheckOtherPages }) => (
  <Container>
    <Meta title={title} />
    <BackButton href={routes.homepage} icon="home">
      Zpátky domů
    </BackButton>
    <Wrap>
      <Content>
        <H1 color={theme.color.primary} bold>
          {title}
        </H1>

        <Subtitle>{text}</Subtitle>

        <Image alt="" height={107} src={image} width={360} />

        {withCheckOtherPages && (
          <>
            <LightText>Zkuste se mrknout na tyto stránky</LightText>
            <ListWrapper>
              <ul>
                <li>
                  <LinkRegular href={routes.homepage}>Hlavní stránka</LinkRegular>
                </li>
                <li>
                  <LinkRegular href={routes.pedagogicMinimum}>Pedagogické minimu</LinkRegular>
                </li>
                <li>
                  <LinkRegular href={routes.whyToTeach}>Proč jít učit?</LinkRegular>
                </li>
              </ul>
            </ListWrapper>
          </>
        )}

        <LightText>
          Stále tápete? Napište nám na{' '}
          <LinkRegular href="mailto:info@vyluka.org">info@vyluka.org</LinkRegular>
        </LightText>
        <BackToHomeButton />
      </Content>
    </Wrap>
  </Container>
);

export default ErrorPage;
