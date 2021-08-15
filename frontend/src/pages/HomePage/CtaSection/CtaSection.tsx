import Button from '@components/Button/Button';
import Container from '@components/Container/Container';
import React from 'react';

import { Wrapper, Image, Title, ButtonWrapper } from './styled';

interface Props {
  title: string;
  text: JSX.Element;
  image: string;
  button: {
    href: string;
    text: string;
    color: string;
  };
  link: {
    href: string;
    text: string;
  };
}

const CtaSection: React.FC<Props> = ({ title, image, text, button, link }) => (
  <Container withPaddingBottom={false}>
    <Wrapper>
      <Image src={image} alt="" width={132} height={237} />
      <Title>{title}</Title>
      {text}
      <ButtonWrapper>
        <Button href={button.href} buttonStyle="button" color={button.color}>
          {button.text}
        </Button>
      </ButtonWrapper>
      <Button href={link.href}>{link.text}</Button>
    </Wrapper>
  </Container>
);

export default CtaSection;
