import React from 'react';

import {
  Section,
  MainTitle,
  // BottomWrapper,
  List,
  ListItem,
  ItemValue,
  Button,
  // ButtonWrapper,
  MainButtonWrapper,
} from './styled';
// import ButtonComponent from '@components/Button/Button';
import Container from '@components/Container/Container';
import { routes } from '@routes';

const data = [
  { value: 6000, text: 'učitelů chybí' },
  { value: '5.', text: 'nejprestižnější povolání' },
  { value: 650, text: 'dětí učitel ovlivní za deset let' },
];

const WhyTeach: React.FC = () => (
  <Section>
    <Container withPaddingBottom={false}>
      <MainTitle padding="2rem 0 1rem 0">Proč jít učit?</MainTitle>
      <List>
        {data.map(({ value, text }) => (
          <ListItem key={text}>
            <ItemValue>{value}</ItemValue>
            <span>{text}</span>
          </ListItem>
        ))}
      </List>
      <MainButtonWrapper>
        <Button
          buttonStyle="button"
          href={`${routes.whyToTeach}#pribehy-ucitelu`}
          variant="secondary"
        >
          Příběhy učitelů
        </Button>
      </MainButtonWrapper>

      {/* <BottomWrapper>
        <ButtonWrapper>
          <ButtonComponent href={routes.sallary}>Platy učitelů</ButtonComponent>
        </ButtonWrapper>
        <ButtonWrapper>
          <ButtonComponent href={routes.jobs}>Volná místa ve školství</ButtonComponent>
        </ButtonWrapper>
      </BottomWrapper> */}
    </Container>
  </Section>
);

export default WhyTeach;
