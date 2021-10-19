import React from 'react';
import ConfiguratorStep from '../ConfiguratorStep/ConfiguratorStep';
import Button from '@components/Button/Button';
import { routes } from '@routes';
import { useRouter } from 'next/router';

import {
  Content,
  Details,
  Header,
  SchoolName,
  SchoolType,
  Location,
  Rows,
  Row,
  RowTitle,
  Alternatives,
  Title,
  Paragraph,
} from './styled';
import { schools } from '../PathDetailPage/PathDetailPage';
import Card from '@components/Card/Card';
import SchoolTile from '../ResultsPage/SchoolTile/SchoolTile';
import Container from '@components/Container/Container';

const CoursePage: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <Container>
        <ConfiguratorStep
          title="Pedagogické minimum (Bc.)"
          prevStep={
            Object.keys(router.query).length > 0
              ? { url: routes.configurator.results, text: 'Zpět na výsledky' }
              : undefined
          }
        >
          <Header>
            <SchoolName>Univerzita Karlova</SchoolName>
            <SchoolType>Pedagogická fakulta</SchoolType>
            <Location>Praha</Location>
          </Header>
          <Content>
            <Details>
              <Title>Podrobnosti kurzu</Title>
              <Rows>
                <Row>
                  <RowTitle>Typ kvalifikace</RowTitle>
                  Ostatní kvalifikace, jazyková zkouška min. C1 SERR pro jazyky
                </Row>
                <Row>
                  <RowTitle>Na jakém stupni budete moct učit</RowTitle>
                  SŠ / SOŠ / SOU / vyšší stupně gymnázií
                </Row>
                <Row>
                  <RowTitle>Cena za studium</RowTitle>
                  Jedná-li se o bakalářský či magisterský studijní program a zatím jste na VŠ
                  nestudovali, bude studium zadarmo. V případě, že už jste na VŠ studovali, cena
                  studia se liší.
                </Row>
                <Row>
                  <RowTitle>Jednoobor nebo dvouobor</RowTitle>
                  Jednobor
                </Row>
                <Row>
                  <RowTitle>Město</RowTitle>
                  Praha
                </Row>
                <Row>
                  <RowTitle>Standardní doba studia v semestrech</RowTitle>5 semestrů
                </Row>
                <Row>
                  <RowTitle>Forma studia</RowTitle>
                  prezenční
                </Row>
                <Row>
                  <RowTitle>Další informace najdete na:</RowTitle>
                  <Button href="www.cuni.cz" buttonStyle="link">
                    www.cuni.cz
                  </Button>
                </Row>
                <Row>
                  <RowTitle>Poznámky ke studiu na této škole</RowTitle>
                  Ještě předtím, než si vyberete konkrétní program nebo kurz, si zkontrolujte, že
                  oblast vašeho odborného vzdělání odpovídá předmětu, který chcete učit!
                </Row>
              </Rows>
            </Details>
          </Content>
        </ConfiguratorStep>
      </Container>
      <Alternatives>
        <Container>
          <Title>Jaké jsou alternativy?</Title>
          <Paragraph>
            Jaké jsou alternativy vámi vybraného studia? Dle města, ceny, délky studia formy studia
          </Paragraph>

          {schools.map((school, index) => (
            <Card
              key={school.schoolName}
              theme="primary"
              badge={index === 0 ? 'Doporučujeme' : undefined}
            >
              <SchoolTile {...school} />
            </Card>
          ))}
        </Container>
      </Alternatives>
    </>
  );
};

export default CoursePage;
