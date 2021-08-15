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
      { name: 'Vysoká škola ekonomická v Praze', href: '#' },
      { name: 'Univerzita Karlova', href: '#' },
      { name: 'Česká zemědělská univerzita', href: '#' },
      { name: 'České vysoké učení technické', href: '#' },
      {
        name: 'Učitel naživo',
        description: 've spolupráci s Vysokou školou mezinárodních a veřejných vztahů Praha',
        href: '#',
      },
    ],
  },
  {
    name: 'Brno',
    schools: [
      { name: 'Masarykova Univerzita', href: '#' },
      { name: 'Mendelova Univerzita ', href: '#' },
    ],
  },
  {
    name: 'České Budějovice',
    schools: [{ name: 'Jihočeská Univerzita', href: '#' }],
  },
  {
    name: 'Hradec Králové',
    schools: [
      {
        name: 'Univerzita Hradec Králové',
        programs: [
          { name: 'učitelství MŠ', href: '#' },
          { name: 'učitelství středních škol', href: '#' },
          { name: 'pedagog odborného vyučování', href: '#' },
        ],
      },
    ],
  },
  {
    name: 'Plzeň',
    schools: [{ name: 'Západočeská Univerzita ', href: '#' }],
  },
  {
    name: 'Ústí nad Labem',
    schools: [{ name: 'Univerzita J. E. Purkyně v Ústí nad Labem', href: '#' }],
  },
  {
    name: 'Liberec',
    schools: [{ name: 'Technická univerzita v Liberci', href: '#' }],
  },
  {
    name: 'Olomouc',
    schools: [{ name: 'Univerzita Palackého v Olomouci', href: '#' }],
  },
  {
    name: 'Ostrava',
    schools: [{ name: 'Ostravská univerzita', href: '#' }],
  },
  {
    name: 'Pardubice',
    schools: [{ name: 'Univerzita Pardubice', href: '#' }],
  },
  {
    name: 'Zlín',
    schools: [{ name: 'Univerzita Tomáše Bati ve Zlíně', href: '#' }],
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
      <Button href={routes.startTeaching.crossroad}>Rozcestníku</Button>.
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
                    <Link href={href} target="_blank">
                      {name}
                    </Link>
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
                          <Link href={href} target="_blank">
                            {name}
                          </Link>
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
