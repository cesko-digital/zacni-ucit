import React from 'react';

import { Wrapper, Image, Title, ButtonWrapper, Text } from './styled';
import Button from '@components/Button/Button';
import Container from '@components/Container/Container';

interface Props {
  title: string;
  text: JSX.Element;
  image: string;
  button: {
    href: string;
    text: string;
    color: string;
  };
  link?: {
    href: string;
    text: string;
  };
}

const CtaSection: React.FC<Props> = ({ title, image, text, button, link }) => (
  <Container withPaddingBottom={false}>
    <Wrapper>
      <Image alt="" height={237} src={image} width={132} />
      <Title>{title}</Title>
      <Text>{text}</Text>
      <ButtonWrapper>
        <Button buttonStyle="button" color={button.color} href={button.href}>
          {button.text}
        </Button>
      </ButtonWrapper>
      {link && <Button href={link.href}>{link.text}</Button>}
    </Wrapper>
  </Container>
);

export default CtaSection;
