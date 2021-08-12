import React, { FC } from 'react';
import { theme } from '../../common/theme';
import StyleWrapper from '../../components/StyledWrapper';
import { Wrap, Section, Img, GridforImg, GridS1Path, GridS5 } from './styled';
import Input from '../../components/Input/Input';
import { H1, H2, LightText, LinkRegular } from '../../components/Typography';
import vyluka_logo from '../../../public/images/homepage/vyluka_logo.png';
import HomepageS1Path from '../../../public/images/homepage/homepage_s1_path.svg';
import msmt_logo from '../../../public/images/homepage/msmt_logo.png';
import cd_logo from '../../../public/images/homepage/cd_logo.png';
import cs_logo from '../../../public/images/homepage/cs_logo.png';
import vodafone_logo from '../../../public/images/homepage/vodafone_logo.png';
import { routes } from '@routes';

const HomePage: FC = () => (
  <Wrap>
    <Section className="section_1">
      <GridforImg className="section1_grid">
        <Img id="section1_img" className="section_img section1_img" />

        <H1 bold padding="2rem 0 0 0">
          Začni učit!
        </H1>
        <StyleWrapper id="inputAndP" padding="1rem 0 1rem 0">
          <LightText>
            Provádíme zájemce o učitelství vším, co potřebují znát, aby se mohli stát spokojenými
            pedagogy.
          </LightText>

          <Input
            value="Můžu učit?"
            type="button"
            padding="1rem 2rem"
            margin="2.5rem 0 1rem 0"
            bgColor={theme.color.primary}
            onClick={() => (window.location.href = routes.canITeach)}
          />
        </StyleWrapper>

        <LinkRegular id="pedagogicMinimum" href={routes.pedagogicMinimum}>
          Pedagogické minimum
        </LinkRegular>

        <LinkRegular id="missedTeacher" href={routes.missedTeachers}>
          Jací učitelé chybí?
        </LinkRegular>
        <GridS1Path className="section1_path">
          <LinkRegular id="isTeachingForMe" href={routes.isTeachingForMe}>
            Je učitelství pro mě?
          </LinkRegular>
          <LinkRegular id="completeQualification" href={routes.completeQualification}>
            Chci si doplnit kvalifikaci
          </LinkRegular>
          <LinkRegular id="startTeaching" href={routes.teachingStart}>
            Začínám učit
          </LinkRegular>
          <HomepageS1Path />
          <LinkRegular id="tryTeaching" href={routes.tryToTeach}>
            Chci si zkusit učení
          </LinkRegular>
          <LinkRegular id="chooseSchool" href={routes.chooseSchool}>
            Vybírám školu, kde budu učit
          </LinkRegular>
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
              Nevíte, zda je učitelství pro vás? S naším programem <b>Zkus učit!</b> se na týden
              stanete učitelem.
            </LightText>
          </StyleWrapper>
          <StyleWrapper>
            <LightText>
              Učení vás láká, ale máte málo času? Zúčastněte se <b>Dne pro školu</b> a předejte své
              odborné znalosti během jednoho dne.
            </LightText>
          </StyleWrapper>
        </div>

        <Input
          value="Chci zkusit učit"
          type="button"
          padding="1rem 2rem"
          margin="2.5rem 0 1rem 0"
          bgColor="#FF2F5B"
          onClick={() => (window.location.href = routes.tryToTeach)}
          id="tryToTeach"
        />

        <LinkRegular href={routes.dayForSchool}>Věnujte 1 den škole</LinkRegular>
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
      <StyleWrapper>
        <Input
          value="Příběhy učitelů"
          type="button"
          padding="1rem 2rem"
          margin="2.5rem 0 1rem 0"
          bgColor="#FFB60B"
          onClick={() => (window.location.href = routes.teachersStories)}
        />
      </StyleWrapper>
      <div>
        <LinkRegular href={routes.sallary}>Platy učitelů</LinkRegular>
        <LinkRegular href={routes.jobs}>Volná místa ve školství</LinkRegular>
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
              <b>Zauč se!</b> nebo se inspirovat tipy kolegyň a kolegů.
            </LightText>
          </StyleWrapper>
        </div>
        <Input
          value="Chci se zaučit"
          type="button"
          padding="1rem 2rem"
          margin="2.5rem 0 1rem 0"
          bgColor="#FFB60B"
          onClick={() => (window.location.href = routes.wantToLearn)}
        />
        <LinkRegular href={routes.teachersTips}>Tipy pro začínající učitele</LinkRegular>
      </GridforImg>
    </Section>
    <Section className="section_5">
      <GridS5>
        <H2>
          <span>Začni učit!</span> <br></br>je projektem organizace Výluka
        </H2>

        <img className="vylukaLogo" src={vyluka_logo} alt="Logo Výluka" />

        <Input
          value="Podpořete nás na Darujme.cz"
          type="button"
          padding="1rem 2rem"
          margin="2.5rem 0 1rem 0"
          bgColor={theme.color.primary}
          onClick={() => window.open('https://www.darujme.cz/projekt/1203276', '_blank')}
        />
        <LinkRegular href={routes.donate}>Přispějte jinak</LinkRegular>
      </GridS5>
    </Section>
    <Section id="partners" className="section_6">
      <H2 padding="2rem 0 0 0">Naši partneři</H2>
      <LightText>
        Děkujeme <LinkRegular margin="0"> všem našim partnerům </LinkRegular>
        a podporovatelům za to, že při nás stojí.
      </LightText>
      <StyleWrapper>
        <img src={msmt_logo} alt="Logo MŠMT" />
        <img src={cd_logo} alt="Logo Česko.digital" />
        <img src={cs_logo} alt="Logo Česká spořitelna" />
        <img src={vodafone_logo} alt="Logo Vodafone" />
      </StyleWrapper>
      <Input
        value="Chci se stát partnerem"
        type="button"
        padding="1rem 2rem"
        margin="2.5rem 0 1rem 0"
        bgColor={theme.color.primary}
        onClick={() => (window.location.href = routes.donate)}
        id="bePartner"
      />
    </Section>
  </Wrap>
);

export default HomePage;
