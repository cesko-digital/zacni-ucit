import React from 'react';

import {
  MainTitle,
  Cities,
  CityGroup,
  CityName,
  Row,
  Content,
  List,
  ListItem,
  Link,
} from './styled';
import BackToHomeButton from '@components/BackToHomeButton/BackToHomeButton';
import Button from '@components/Button/Button';
import Container from '@components/Container/Container';
import BackButton from '@pages/BackButton/BackButton';
import { routes } from '@routes';

type City = {
  name: string;
  schools: {
    name: string;
    href?: string;
    programs?: { name: string; href: string }[];
    description?: string;
  }[];
};

const citiesData: City[] = [
  {
    name: 'Praha',
    schools: [
      {
        name: 'Vysoká škola ekonomická v Praze',
        href: 'https://kdep.vse.cz/akce-pro-verejnost/doplnujici-pedagogicke-studium/soucasna-uprava/',
      },
      {
        name: 'Univerzita Karlova',
        href: 'https://is.cuni.cz/studium/ekczv/index.php?do=seznam&zobraz=1&ffak=&fustav=&fskr=2019&ftyp%5B%5D=P&fkod=&fkeywords=u%C4%8Ditelstv%C3%AD&fkeynames=1&zobraz=Zobraz',
      },
      {
        name: 'Česká zemědělská univerzita',
        href: 'https://www.ivp.czu.cz/cs/r-6930-studium/r-7469-studijni-programy/r-8776-programy-celozivotniho-vzdelavani/r-8787-studium-ucitelstvi-odbornych-predmetu-doplnujici-pedagogicke-studium-pro-studenty-czu',
      },
      {
        name: 'České vysoké učení technické',
        href: 'https://www.muvs.cvut.cz/zajemci-o-studium/bakalarske-studium/ucitelstvi-odbornych-predmetu/',
      },
      {
        name: 'Učitel naživo',
        description: 've spolupráci s Vysokou školou mezinárodních a veřejných vztahů Praha',
        href: 'https://www.ucitelnazivo.cz/',
      },
    ],
  },
  {
    name: 'Brno',
    schools: [
      { name: 'Masarykova Univerzita', href: 'https://www.ped.muni.cz/czv/pro-zajemce-o-czv' },
      { name: 'Mendelova Univerzita ', href: 'http://icv.mendelu.cz/32509n-studium-pedagogiky' },
    ],
  },
  {
    name: 'České Budějovice',
    schools: [
      {
        name: 'Jihočeská Univerzita',
        href: 'https://www.pf.jcu.cz/education/department/czv/programy_splneni_kvalifikacnich_predpokladu.php',
      },
    ],
  },
  {
    name: 'Hradec Králové',
    schools: [
      {
        name: 'Univerzita Hradec Králové',
        programs: [
          {
            name: 'učitelství MŠ',
            href: 'https://www.uhk.cz/file/edee/pedagogicka-fakulta/studium/celozivotni-vzdelavani/programy-czv/programy-celozivotniho-vzdelavani-v-ramci-akreditovanych-studijnich-programu/ucitelstvi-pro-ms.pdf',
          },
          {
            name: 'učitelství středních škol',
            href: 'https://www.uhk.cz/file/edee/pedagogicka-fakulta/studium/celozivotni-vzdelavani/programy-czv/programy-dvpp/studium-ke-splneni-kvalifikacnich-predpokladu/studium-v-oblasti-pedagogickych-ved/cpv-uss.pdf',
          },
          {
            name: 'pedagog odborného vyučování',
            href: 'https://www.uhk.cz/file/edee/pedagogicka-fakulta/studium/celozivotni-vzdelavani/programy-czv/programy-dvpp/studium-ke-splneni-kvalifikacnich-predpokladu/studium-v-oblasti-pedagogickych-ved/cpv-uov.pdf',
          },
        ],
      },
    ],
  },
  {
    name: 'Plzeň',
    schools: [{ name: 'Západočeská Univerzita ', href: 'https://www.pc.fpe.zcu.cz/?cat=18' }],
  },
  {
    name: 'Ústí nad Labem',
    schools: [
      {
        name: 'Univerzita J. E. Purkyně v Ústí nad Labem',
        href: 'https://www.ujep.cz/cs/celozivotni-vzdelavani',
      },
    ],
  },
  {
    name: 'Liberec',
    schools: [
      {
        name: 'Technická univerzita v Liberci',
        href: 'https://www.fp.tul.cz/uchazec/programy-celozivotniho-vzdelavani',
      },
    ],
  },
  {
    name: 'Olomouc',
    schools: [
      {
        name: 'Univerzita Palackého v Olomouci',
        href: 'https://ccv.upol.cz/studijni-programy-czv',
      },
    ],
  },
  {
    name: 'Ostrava',
    schools: [{ name: 'Ostravská univerzita', href: 'https://www.osu.cz/celozivotni-vzdelavani/' }],
  },
  {
    name: 'Pardubice',
    schools: [{ name: 'Univerzita Pardubice', href: 'https://www.upce.cz/studium/czv.html' }],
  },
  {
    name: 'Zlín',
    schools: [
      {
        name: 'Univerzita Tomáše Bati ve Zlíně',
        href: 'https://www.utb.cz/uchazec/celozivotni-vzdelavani/nabidka-studia/',
      },
    ],
  },
];

const CompleteYourQualificationPage: React.FC = () => (
  <Container>
    <BackButton href={routes.startTeaching.crossroad} icon="home">
      Zpátky domů
    </BackButton>
    <MainTitle>Kde si doplnit kvalifikaci</MainTitle>
    <p>
      <strong>To, co pravděpodobně hledáte</strong>, pokud jste nevystudoval*a pedagogický obor, ale
      chcete začít učit, je tzv. <strong>doplňující pedagogické studium (DPS)</strong>, jehož
      absolvováním získáte tzv. pedagogickou kvalifikaci.
    </p>
    <p>
      Tohle je první verze našeho nápomocného rozcestníku pro hledání vhodné DPSky – najdete tu na
      ně odkazy seřazené podle jednotlivých měst a vysokých škol. Jestli se chcete ujistit, že vám
      pro danou pozici některé z DPS stačí, podívejte se do našeho{' '}
      <Button href={`${routes.startTeaching.crossroad}#zakon-o-pedagogickych-pracovnicich`}>přehledu
      Zákona o pedagogických pracovnících</Button>. 
    </p>
    <Cities>
      {citiesData.map(({ name, schools }) => (
        <CityGroup key={name}>
          <CityName>{name}</CityName>
          <Content>
            {schools.map(({ name, href, description, programs }) => {
              if (href) {
                return (
                  <Row key={name}>
                    <Button href={href} target="_blank">
                      {name}
                    </Button>
                    {description && ` (${description})`}
                  </Row>
                );
              }

              if (programs) {
                return (
                  <Row key={name}>
                    {name}:
                    <List>
                      {programs.map(({ name, href }) => (
                        <ListItem key={name}>
                          <Button href={href} target="_blank">
                            {name}
                          </Button>
                        </ListItem>
                      ))}
                    </List>
                  </Row>
                );
              }

              return <Row key={name}>{name}</Row>;
            })}
          </Content>
        </CityGroup>
      ))}
    </Cities>
    <BackToHomeButton />
  </Container>
);

export default CompleteYourQualificationPage;
