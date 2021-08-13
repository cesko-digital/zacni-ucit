import React, { FC } from 'react';
import { theme } from '../../common/theme';
import StyleWrapper from '../../components/StyledWrapper';
import { Wrap, Section, Img, GridforImg, GridS1Path, GridS5 } from './styled';
import Input from '../../components/Input/Input';
import { H1, H2, LightText, LinkRegular, LinkToExtPage } from '../../components/Typography';
import VylukaLogo from '../../../public/images/homepage/vyluka_logo.svg';
import HomepageS1Path from '../../../public/images/homepage/homepage_s1_path.svg';
import msmt_logo from '../../../public/images/homepage/msmt_logo.png';
import cd_logo from '../../../public/images/homepage/cd_logo.png';
import cs_logo from '../../../public/images/homepage/cs_logo.png';
import vodafone_logo from '../../../public/images/homepage/vodafone_logo.png';
import { routes } from '@routes';
import Link from '@components/Link/Link';

const HomePage: FC = () => (
  <Wrap>
    <Section className="section_1">
      <GridforImg className="section1_grid">
        <Img id="section1_img" className="section_img section1_img" />

        <H1 bold padding="2rem 0 0 0">
          Začni učit!
        </H1>

        <LightText>
          Provádíme zájemce o učitelství vším, co potřebují znát, aby se mohli stát spokojenými
          pedagogy.
        </LightText>
        <Link className="button primaryBgr" href={routes.canITeach}>
          Můžu učit?
        </Link>

        <Link className="linkRegular first" href={routes.pedagogicMinimum}>
          Pedagogické minimum
        </Link>

        <Link className="linkRegular missedTeacher second" href={routes.missedTeachers}>
          Jací učitelé chybí?
        </Link>
        <GridS1Path className="section1_path">
          <Link className="linkRegular isTeachingForMe" href={routes.isTeachingForMe}>
            Je učitelství pro mě?
          </Link>
          <Link className="linkRegular completeQualification" href={routes.completeQualification}>
            Chci si doplnit kvalifikaci
          </Link>
          <Link className="linkRegular startTeaching" href={routes.teachingStart}>
            Začínám učit
          </Link>
          <HomepageS1Path />
          <Link className="linkRegular tryTeaching" href={routes.tryToTeach}>
            Chci si zkusit učení
          </Link>
          <Link className="linkRegular chooseSchool" href={routes.chooseSchool}>
            Vybírám školu, kde budu učit
          </Link>
        </GridS1Path>
      </GridforImg>
    </Section>

    <Section className="section_2">
      <GridforImg className="section2_grid">
        <Img className="section_img section2_img" />
        <div>
          <H2 padding="2rem 0 0 0">Vyzkoušejte si učení</H2>
          <StyleWrapper padding="1rem 0 1rem 0">
            <LightText>
              Nevíte, zda je učitelství pro vás? S naším programem <strong>Zkus učit!</strong> se na
              týden stanete učitelem.
            </LightText>
          </StyleWrapper>
          <StyleWrapper>
            <LightText>
              Učení vás láká, ale máte málo času? Zúčastněte se <strong>Dne pro školu</strong> a
              předejte své odborné znalosti během jednoho dne.
            </LightText>
          </StyleWrapper>
        </div>

        <Link className="button redBgr" href={routes.tryToTeach}>
          Chci zkusit učit
        </Link>

        <Link className="linkRegular first" href={routes.dayForSchool}>
          Věnujte 1 den škole
        </Link>
      </GridforImg>
    </Section>
    <Section className="section_3">
      <H2 padding="2rem 0 1rem 0">Proč jít učit?</H2>
      <StyleWrapper>
        <H1>
          6000 <span>učitelů chybí</span>
        </H1>
        <H1>
          5.<span>nejprestižnější povolání</span>
        </H1>
        <H1>
          650 <span>dětí učitel ovlivní za deset let</span>
        </H1>
      </StyleWrapper>

      <Link className="button yellowBgr" href={routes.teachersStories}>
        Příběhy učitelů
      </Link>

      <div>
        <Link className="linkRegular" href={routes.sallary}>
          Platy učitelů
        </Link>
        <Link className="linkRegular" href={routes.jobs}>
          Volná místa ve školství
        </Link>
      </div>
    </Section>
    <Section className="section_4">
      <GridforImg className="section4_grid">
        <Img className="section_img section3_img" />
        <div>
          <H2 padding="2rem 0 1rem 0">Začínám učit</H2>
          <StyleWrapper>
            <LightText>Začátky za katedrou jsou velkou výzvou.</LightText>
          </StyleWrapper>
          <StyleWrapper padding="1rem 0">
            <LightText>
              Nejste na to ale sami – můžete se zapojit do našeho rozvojového programu{' '}
              <strong>Zauč se!</strong> nebo se inspirovat tipy kolegyň a kolegů.
            </LightText>
          </StyleWrapper>
        </div>

        <Link className="button yellowBgr" href={routes.wantToLearn}>
          Chci se zaučit
        </Link>

        <Link className="linkRegular first" href={routes.teachersTips}>
          Tipy pro začínající učitele
        </Link>
      </GridforImg>
    </Section>
    <Section className="section_5">
      <GridS5>
        <H2>
          <span>Začni učit!</span> <br></br>je projektem organizace Výluka
        </H2>

        <VylukaLogo />

        <LinkToExtPage
          className="button primaryBgr"
          href="https://www.darujme.cz/projekt/1203276"
          target="_blank"
        >
          Podpořte nás na Darujme.cz
        </LinkToExtPage>

        <Link className="linkRegular" href={routes.donate}>
          Přispějte jinak
        </Link>
      </GridS5>
    </Section>
    <Section id="partners" className="section_6">
      <H2 padding="2rem 0 0 0">Naši partneři</H2>
      <LightText>
        Děkujeme{' '}
        <u>
          <strong>všem našim partnerům</strong>{' '}
        </u>
        a podporovatelům za to, že při nás stojí.
      </LightText>
      <StyleWrapper>
        <img src={msmt_logo} alt="Logo MŠMT" />
        <img src={cd_logo} alt="Logo Česko.digital" />
        <img src={cs_logo} alt="Logo Česká spořitelna" />
        <img src={vodafone_logo} alt="Logo Vodafone" />
      </StyleWrapper>
      <StyleWrapper margin="1rem 0">
        <Link className="button primaryBgr" href={routes.donate}>
          Chci se stát partnerem
        </Link>
      </StyleWrapper>
    </Section>
  </Wrap>
);

export default HomePage;
