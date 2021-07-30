import React, { FC, useState } from 'react';
import { theme } from '../../common/theme';
import StyleWrapper from '../../components/StyledWrapper';
import { Wrap, Section } from './styled';
import { Input } from '../../components/Input';
import { H1, H3, LightText, LinkRegular } from '../../components/Typography';

const index = () => {
  return (
    <Wrap>
      <Section className="section_1">
        <H1>Začni učit!</H1>
        <StyleWrapper padding="1rem 2rem 1rem 0">
          <LightText>
            Provádíme zájemce o učitelství vším, co potřebují znát, aby se mohli
            stát spokojenými pedagogy.
          </LightText>
        </StyleWrapper>
        <Input
          value="Můžu učit?"
          type="button"
          padding="1rem 2rem"
          margin="2.5rem 0 1rem 0"
          bgColor={theme.color.primary}
        />
        <LinkRegular href="">Pedagogické minimum</LinkRegular>
        <LinkRegular href="">Jací učitelé chybí?</LinkRegular>
      </Section>

      <Section className="section_2">
        <H3>Vyzkoušejte si učení</H3>
        <StyleWrapper padding="1rem 2rem 1rem 0">
          <LightText>
            Nevíte, zda je učitelství pro vás? S naším programem{' '}
            <b>Zkus učit!</b> se na týden stanete učitelem.
          </LightText>
        </StyleWrapper>
        <StyleWrapper padding="1rem 2rem 1rem 0">
          <LightText>
            Učení vás láká, ale máte málo času? Zúčastněte se{' '}
            <b>Dne pro školu</b> a předejte své odborné znalosti během jednoho
            dne.
          </LightText>
        </StyleWrapper>
        <Input
          value="Chci zkusit učit"
          type="button"
          padding="1rem 2rem"
          margin="2.5rem 0 1rem 0"
          bgColor="#FF2F5B"
        />

        <LinkRegular href="">Věnujte 1 den škole</LinkRegular>
      </Section>
      <Section className="section_3">
        <H3>Proč jít učit?</H3>
        <H1>
          6000 <span>učitelů chybí</span>
        </H1>
        <H1>
          5.<span>nejprestižnější povolání</span>
        </H1>
        <H1>
          650 <span>dětí učitel ovlivní za deset let</span>
        </H1>
        <Input
          value="Příběhy učitelů"
          type="button"
          padding="1rem 2rem"
          margin="2.5rem 0 1rem 0"
          bgColor="transparent"
        />
        <LinkRegular href="http://" target="_blank" rel="noopener noreferrer">
          Platy učitelů
        </LinkRegular>
        <LinkRegular href="http://" target="_blank" rel="noopener noreferrer">
          Volná místa ve školství
        </LinkRegular>
      </Section>
      <Section className="section_4">
        <H3>Začínám učit</H3>
        <StyleWrapper padding="1rem 2rem 1rem 0">
          <LightText>
            Začátky za katedrou jsou velkou výzvou. Nejste na to ale sami –
            můžete se zapojit do našeho rozvojového programu <b>Zauč se!</b>{' '}
            nebo se inspirovat tipy kolegyň a kolegů.
          </LightText>
        </StyleWrapper>
        <Input
          value="Chci se zaučit"
          type="button"
          padding="1rem 2rem"
          margin="2.5rem 0 1rem 0"
          bgColor="#FFB60B"
        />
        <LinkRegular>Tipy pro začínající učitele</LinkRegular>
      </Section>
      <Section className="section_5">
        <H3>
          <span>Začni učit!</span>je projektem organizace Výluka
        </H3>

        <Input
          value="Podpořte nás na Darujme.cz"
          type="button"
          padding="1rem 2rem"
          margin="2.5rem 0 1rem 0"
          bgColor={theme.color.primary}
        />
        <LinkRegular>Přispějte jinak</LinkRegular>
      </Section>
    </Wrap>
  );
};

export default index;
