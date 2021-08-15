import Button from '@components/Button/Button';
import Container from '@components/Container/Container';
import { routes } from '@routes';
import React from 'react';

import { Wrapper, MainTitle, LinksWrapper, ButtonWrapper, Image, Paragraph } from './styled';
import heroImage from './hero.png';

const Header: React.FC = () => (
  <Container>
    <Wrapper>
      <Image src={heroImage} alt="" width={132} height={238} />
      <MainTitle>Začni učit</MainTitle>
      <Paragraph>
        Provádíme zájemce o učitelství vším, co potřebují znát, aby se mohli stát spokojenými
        pedagogy.
      </Paragraph>
      <Button href={routes.startTeaching.crossroad} buttonStyle="button">
        Můžu učit?
      </Button>
      <LinksWrapper>
        <ButtonWrapper>
          <Button href={routes.pedagogicMinimum}>Pedagogické minimum</Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button href={routes.missedTeachers}>Jací učitelé chybí?</Button>
        </ButtonWrapper>
      </LinksWrapper>
    </Wrapper>
  </Container>
);

export default Header;
