import React, { FC, useState } from 'react';
import { theme } from '../../common/theme';
import StyleWrapper from '../../components/StyledWrapper';
import {
  Wrap,
  Section,
  Img,
  GridforImg,
  GridS1Path,
  FlexS5Logos,
} from './styled';
import { Input } from '../../components/Input';
import { H1, H3, LightText, LinkRegular } from '../../components/Typography';
import s1Img from '../../../public/images/homepage/homepage_s1.jpg';
import s2Img from '../../../public/images/homepage/homepage_s2.jpg';
import s3Img from '../../../public/images/homepage/homepage_s3.jpg';
import vyluka_logo from '../../../public/images/homepage/vyluka_logo.png';
import HomepageS1Path from '../../../public/images/homepage/homepage_s1_path.svg';
import msmt_logo from '../../../public/images/homepage/msmt_logo.png';
import cd_logo from '../../../public/images/homepage/cd_logo.png';
import cs_logo from '../../../public/images/homepage/cs_logo.png';
import vodafone_logo from '../../../public/images/homepage/vodafone_logo.png';
import HomepageWhiteImg from '../../../public/images/homepage//HomepageWhiteImg.svg';

const Index = () => {
  return (
    <Wrap>
      <Section className="section_1">
        <GridforImg>
          <HomepageWhiteImg />
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
          <HomepageS1Path />
          <LinkRegular href="">Chci si zkusit učení</LinkRegular>
          <LinkRegular href="">Vybírám školu, kde budu učit</LinkRegular>
        </GridS1Path>
      </Section>
      <Section className="section_2">
        <GridforImg>
          <HomepageWhiteImg />
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

          <Input
            value="Chci zkusit učit"
            type="button"
            padding="1rem 2rem"
            margin="2.5rem 0 1rem 0"
            bgColor="#FF2F5B"
          />

          <LinkRegular href="">Věnujte 1 den škole</LinkRegular>
        </GridforImg>
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
          <HomepageWhiteImg />
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
          <Input
            value="Chci se zaučit"
            type="button"
            padding="1rem 2rem"
            margin="2.5rem 0 1rem 0"
            bgColor="#FFB60B"
          />
          <LinkRegular>Tipy pro začínající učitele</LinkRegular>
        </GridforImg>
      </Section>
      <Section className="section_5">
        <GridforImg>
          <H3>
            <span>Začni učit!</span> <br></br>je projektem organizace Výluka
          </H3>
          <img id="vylukaLogo" src={vyluka_logo} alt="Logo Výluka" />

          <Input
            value="Podpořete nás na Darujme.cz"
            type="button"
            padding="1rem 2rem"
            margin="2.5rem 0 1rem 0"
            bgColor={theme.color.primary}
          />
          <LinkRegular>Přispějte jinak</LinkRegular>
        </GridforImg>
      </Section>
      <Section className="section_6">
        <H3>Naši partneři</H3>
        <LightText>
          Děkujeme <LinkRegular margin="0"> všem našim partnerům </LinkRegular>
          a podporovatelům za to, že při nás stojí.
        </LightText>

        <img src={msmt_logo} alt="Logo MŠMT" />
        <img src={cd_logo} alt="Logo Česko.digital" />
        <img src={cs_logo} alt="Logo Česká spořitelna" />
        <img src={vodafone_logo} alt="Logo Vodafone" />

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
