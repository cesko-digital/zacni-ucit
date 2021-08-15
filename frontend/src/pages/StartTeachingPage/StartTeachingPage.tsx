import React from 'react';
import {
  Logo,
  MainTitle,
  Subtitle,
  TopWrapper,
  Paragraph,
  SectionsNav,
  ListItem,
  Recommendation,
  SectionsWrapper,
  Section,
  SectionTitle,
  TitleText,
  ScrollLink,
  IconWrapper,
  Number,
  ToTopButton,
  ButtonWrapper,
  ChevronWrapper,
} from './styled';

import ScrollIcon from '@icons/scroll.svg';

import ChevronIcon from '@icons/chevron-right.svg';
import BackButton from '@pages/BackButton/BackButton';
import BackToHomeButton from '@components/BackToHomeButton/BackToHomeButton';
import Container from '@components/Container/Container';
import Meta from '@components/Meta/Meta';

interface Props {
  logo: string;
  title: string | JSX.Element;
  metaTitle: string;
  subtitle?: string;
  mainInfo: JSX.Element;
  additionalInfo?: JSX.Element;
  recommendation?: JSX.Element;
  sections: {
    title: string;
    text: JSX.Element | JSX.Element[];
  }[];
  backButton: {
    href: string;
    topButtonText: string;
    bottomButtonText: string;
  };
}

export const convertToUrl = (text: string) =>
  text
    ? text
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9_]+/gi, '-')
        .replace(/^-|-$/g, '')
        .toLowerCase()
    : '';

export const scrollToElement = (element: React.RefObject<HTMLElement>) => {
  const y = (element?.current?.getBoundingClientRect().top ?? 0) + window.pageYOffset;

  window.scroll({
    top: y,
    left: 0,
    behavior: 'smooth',
  });
};

const StartTeachingPage: React.FC<Props> = ({
  logo,
  title,
  metaTitle,
  subtitle,
  mainInfo,
  additionalInfo,
  recommendation,
  sections,
  backButton,
}) => {
  const topRef = React.useRef<HTMLDivElement>(null);

  return (
    <Container>
      <Meta title={metaTitle} />
      <BackButton href={backButton.href} icon="arrow">
        {backButton.topButtonText}
      </BackButton>
      <TopWrapper ref={topRef}>
        <Logo src={logo} alt="" />
        <div>
          <MainTitle>{title}</MainTitle>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </div>
      </TopWrapper>
      {mainInfo}
      {sections.length > 1 && (
        <SectionsNav>
          {sections.map(({ title }) => (
            <ListItem key={title}>
              <ScrollLink href={`#${convertToUrl(title)}`}>
                {title}{' '}
                <IconWrapper>
                  <ScrollIcon />
                </IconWrapper>
              </ScrollLink>
            </ListItem>
          ))}
        </SectionsNav>
      )}
      {additionalInfo && <Paragraph>{additionalInfo}</Paragraph>}
      {recommendation && <Recommendation>{recommendation}</Recommendation>}

      <SectionsWrapper>
        {sections.map(({ title, text }, index) => (
          <Section key={title} id={convertToUrl(title)}>
            <SectionTitle>
              {sections.length > 1 && <Number>{index + 1}</Number>}
              <TitleText>{title}</TitleText>
            </SectionTitle>
            {text}
            {sections.length > 1 && (
              <ButtonWrapper>
                <ToTopButton
                  startIcon={
                    <ChevronWrapper>
                      <ChevronIcon />
                    </ChevronWrapper>
                  }
                  onClick={() => scrollToElement(topRef)}
                  variant="secondary"
                >
                  Zpátky na výběr kvalifikace
                </ToTopButton>
              </ButtonWrapper>
            )}
          </Section>
        ))}
      </SectionsWrapper>
      <BackToHomeButton href={backButton.href}>{backButton.bottomButtonText}</BackToHomeButton>
    </Container>
  );
};

export default StartTeachingPage;
