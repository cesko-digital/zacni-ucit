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
  // Alternatives,
  Title,
  // Paragraph,
} from './styled';
// import { schools } from '../PathDetailPage/PathDetailPage';
// import Card from '@components/Card/Card';
// import SchoolTile from '../ResultsPage/SchoolTile/SchoolTile';
import Container from '@components/Container/Container';
import { gql, useQuery } from '@apollo/client';
import { Loading } from '@components/Loading/Loading';

export const courseQuery = gql`
  query courseQuery($pk: Int!) {
    course(pk: $pk) {
      name
      city
      price
      studyForm
      major
      schoolLevels {
        name
      }
      educationSpecialization {
        name
      }
      otherQualificationType {
        id
      }
      studyLengthInSemesters
      url
      note
      university {
        name
      }
    }
  }
`;

const CoursePage: React.FC = () => {
  const router = useRouter();

  React.useEffect(() => {
    if (router.isReady && !router.query.kurz) {
      router.replace(routes.configurator.step1);
      return null;
    }
  }, [router]);

  const { loading, data } = useQuery<any>(courseQuery, {
    variables: {
      pk: router.query.kurz,
    },
    skip: router.query.kurz === undefined,
  });

  if (!data?.course) {
    return null;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Container>
        <ConfiguratorStep
          title={data.course.name}
          prevStep={
            Object.keys(router.query).length > 0
              ? { url: routes.configurator.path, text: 'Zpět na výsledky' }
              : undefined
          }
        >
          <Header>
            <SchoolName>{data.course.university.name}</SchoolName>
            <SchoolType>{data.course.name}</SchoolType>
            <Location>{data.course.city}</Location>
          </Header>
          <Content>
            <Details>
              <Title>Podrobnosti kurzu</Title>
              <Rows>
                {/* <Row>
                  <RowTitle>Typ kvalifikace</RowTitle>
                  Ostatní kvalifikace, jazyková zkouška min. C1 SERR pro jazyky
                </Row> */}
                <Row>
                  <RowTitle>Na jakém stupni budete moct učit</RowTitle>
                  {data.course.schoolLevels.map(({ name }) => (
                    <div key={name}>{name}</div>
                  ))}
                </Row>
                <Row>
                  <RowTitle>Cena za studium</RowTitle>
                  {parseFloat(data.course.price) ? `${parseFloat(data.course.price)} Kč` : 'Zdarma'}
                  {/* Jedná-li se o bakalářský či magisterský studijní program a
                  zatím jste na VŠ nestudovali, bude studium zadarmo. V případě, že už jste na VŠ
                  studovali, cena studia se liší. */}
                </Row>
                <Row>
                  <RowTitle>Jednoobor nebo dvouobor</RowTitle>
                  {data.course.major.map(name => (
                    <div key={name}>{name}</div>
                  ))}
                </Row>
                <Row>
                  <RowTitle>Město</RowTitle>
                  {data.course.city}
                </Row>
                <Row>
                  <RowTitle>Standardní doba studia v semestrech</RowTitle>
                  {data.course.studyLengthInSemesters} semestr
                  {data.course.studyLengthInSemesters > 1 &&
                    data.course.studyLengthInSemesters <= 4 &&
                    'y'}
                  {data.course.studyLengthInSemesters > 4 && 'ů'}
                </Row>
                <Row>
                  <RowTitle>Forma studia</RowTitle>
                  {data.course.studyForm.map(name => (
                    <div key={name}>{name}</div>
                  ))}
                </Row>
                <Row>
                  <RowTitle>Další informace najdete na:</RowTitle>
                  <Button href={data.course.url} buttonStyle="link">
                    {data.course.url}
                  </Button>
                </Row>
                <Row>
                  <RowTitle>Poznámky ke studiu na této škole</RowTitle>
                  {data.course.note}
                </Row>
              </Rows>
            </Details>
          </Content>
        </ConfiguratorStep>
      </Container>
      {/* <Alternatives>
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
      </Alternatives> */}
    </>
  );
};

export default CoursePage;
