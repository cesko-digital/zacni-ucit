import React from 'react';

import {
  Wrapper,
  MainTitle,
  LinksWrapper,
  ButtonWrapper,
  Image,
  Paragraph,
  CanITeachButtonWrapper,
} from './styled';
import Button from '@components/Button/Button';
import Container from '@components/Container/Container';
import { routes } from '@routes';

import heroImage from './hero.png';

const Header: React.FC = () => (
  <Container>
    <Wrapper>
      <Image alt="" height={238} src={heroImage} width={132} />
      <MainTitle>Začni učit!</MainTitle>
      <Paragraph>
        Provádíme zájemce o učitelství vším, co potřebují znát, aby se mohli stát spokojenými
        pedagogy.
      </Paragraph>
      <CanITeachButtonWrapper>
        <Button buttonStyle="button" href={routes.startTeaching.crossroad}>
          Můžu učit?
        </Button>
      </CanITeachButtonWrapper>
      <LinksWrapper>
        <ButtonWrapper>
          <Button href={`${routes.startTeaching.crossroad}#pedagogicke-minimum`}>
            Pedagogické minimum
          </Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button href={`${routes.startTeaching.crossroad}#jaci-ucitele-chybi`}>
            Jací učitelé chybí?
          </Button>
        </ButtonWrapper>
      </LinksWrapper>
    </Wrapper>
  </Container>
);

export default Header;
