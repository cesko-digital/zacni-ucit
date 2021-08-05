import React, { FC, useState } from 'react';
import { theme } from '../../common/theme';
import StyleWrapper from '../../components/StyledWrapper';
import { Wrap, Section, Img, GridforImg, GridS1Path } from './styled';
import { Input } from '../../components/Input';
import { H1, H3, LightText, LinkRegular } from '../../components/Typography';
import s1Img from '../../../public/images/s1Img.jpg';
import s2Img from '../../../public/images/s2Img.jpg';
import s3Img from '../../../public/images/s3Img.jpg';
import VylukaLogo from '../../../public/images/vyluka_logo.png';
import section1Path from '../../../public/images/section1.svg';
import MSMT from '../../../public/images/msmt1.png';
import CeskoDigital from '../../../public/images/cd1.png';
import CS from '../../../public/images/cs1.png';
import Vodafone from '../../../public/images/vodafone1.png';

const Index = () => {
  const clipPathImg = (
    <svg viewBox="0 0 0 0" width="0" height="0">
      <defs>
        <clipPath id="imgFrame">
          <path
            id="Rectangle2"
            d="M0.5 0.5H131.5V236.5C125.327 236.5 122.188 236.497 119.526 236.38C55.0679 233.543 3.45724 181.932 0.620399 117.474C0.500122 114.741 0.5 111.505 0.5 105V0.5Z"
            stroke="black"
          />
        </clipPath>
      </defs>
    </svg>
  );

  const imgVector = (
    <svg
      width="33"
      height="134"
      viewBox="0 0 33 134"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="whiteImgShape"
        d="M0 0H33V134H26C11.6406 134 0 122.359 0 108V0Z"
        fill="white"
      />
    </svg>
  );

  return (
    <Wrap>
      {clipPathImg}

      <Section className="section_1">
        <GridforImg>
          {imgVector}
          <Img src={s1Img} alt="Teacher" className="section1_img" />
          <div>
            <H1>Začni učit!</H1>
            <StyleWrapper padding="1rem 0 1rem 0">
              <LightText>
                Provádíme zájemce o učitelství vším, co potřebují znát, aby se
                mohli stát spokojenými pedagogy.
              </LightText>
            </StyleWrapper>
          </div>
          <Input
            value="Můžu učit?"
            type="button"
            padding="1rem 2rem"
            margin="2.5rem 0 1rem 0"
            bgColor={theme.color.primary}
          />

          <LinkRegular href="">Pedagogické minimum</LinkRegular>

          <LinkRegular href="">Jací učitelé chybí?</LinkRegular>
        </GridforImg>

        <GridS1Path>
          <LinkRegular href="">Je učitelství pro mě?</LinkRegular>
          <LinkRegular href="">Chci si doplnit kvalifikaci</LinkRegular>
          <LinkRegular href="">Začínám učit</LinkRegular>
          <img src={section1Path} alt="Cesta k učitelství" />
          <LinkRegular href="">Chci si zkusit učení</LinkRegular>
          <LinkRegular href="">Vybírám školu, kde budu učit</LinkRegular>
        </GridS1Path>
      </Section>
      <Section className="section_2">
        <GridforImg>
          {imgVector}
          <Img src={s2Img} alt="Teacher" className="section2_img" />
          <div>
            <H3 padding="2rem 0 0 0">Vyzkoušejte si učení</H3>
            <StyleWrapper padding="1rem 0 1rem 0">
              <LightText>
                Nevíte, zda je učitelství pro vás? S naším programem{' '}
                <b>Zkus učit!</b> se na týden stanete učitelem.
              </LightText>
            </StyleWrapper>
            <StyleWrapper id="p2">
              <LightText>
                Učení vás láká, ale máte málo času? Zúčastněte se{' '}
                <b>Dne pro školu</b> a předejte své odborné znalosti během
                jednoho dne.
              </LightText>
            </StyleWrapper>
          </div>
        </GridforImg>

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
        <H3 padding="2rem 0 0 0">Proč jít učit?</H3>
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
        <GridforImg>
          {imgVector}
          <Img src={s3Img} alt="Students" className="section3_img" />
          <div>
            <H3 padding="2rem 0 1rem 0">Začínám učit</H3>
            <StyleWrapper>
              <LightText>
                Začátky za katedrou jsou velkou výzvou. Nejste na to ale sami –
                můžete se zapojit do našeho rozvojového programu <b>Zauč se!</b>{' '}
                nebo se inspirovat tipy kolegyň a kolegů.
              </LightText>
            </StyleWrapper>
          </div>
        </GridforImg>
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
        <img src={VylukaLogo} alt="Logo Výluka" />

        <Input
          value="Podpořete nás na Darujme.cz"
          type="button"
          padding="1rem 2rem"
          margin="2.5rem 0 1rem 0"
          bgColor={theme.color.primary}
        />
        <LinkRegular>Přispějte jinak</LinkRegular>
      </Section>
      <Section className="section_6">
        <H3>Naši partneři</H3>
        <LightText>
          Děkujeme všem našim partnerům a podporovatelům za to, že při nás
          stojí.
        </LightText>
        <img src={MSMT} alt="Logo MŠMT" />
        <img src={CeskoDigital} alt="Logo Česko.digital" />
        <img src={CS} alt="Logo Česká spořitelna" />
        <img src={Vodafone} alt="Logo Vodafone" />
        <Input
          value="Chci se stát partnerem"
          type="button"
          padding="1rem 2rem"
          margin="2.5rem 0 1rem 0"
          bgColor={theme.color.primary}
        />
      </Section>
    </Wrap>
  );
};

export default Index;
