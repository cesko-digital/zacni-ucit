import React from 'react';
import querystring from 'querystring';
import { useRouter } from 'next/router';
import { useFormikContext } from 'formik';
import { gql, useQuery } from '@apollo/client';

import Button from '@components/Button/Button';
import { Paragraph } from './styled';
import { Paths } from './Paths/Paths';
import RepeatIcon from '@icons/repeat.svg';
import StyleWrapper from '@components/StyledWrapper';
import EducationText from '../EducationText/EducationText';
import ConfiguratorStep from '../ConfiguratorStep/ConfiguratorStep';
import { routes } from '@routes';
import Container from '@components/Container/Container';
import { ConfiguratorValues } from '../ConfiguratorLayout/ConfiguratorLayout';
import { Loading } from '@components/Loading/Loading';

export const resultsQuery = gql`
  query qualificationsQuery(
    $subjectId: Int!
    $levelId: Int!
    $title: Int!
    $specialization: Int!
    $schoolLevelDone: Int
    $subjectDone: Int
  ) {
    qualifications(
      subjectId: $subjectId
      levelId: $levelId
      title: $title
      specialization: $specialization
      schoolLevelDone: $schoolLevelDone
      subjectDone: $subjectDone
    ) {
      path {
        id
        rowId
        legalParagraph
        example
        note
        schoolLevel {
          id
          name
        }
        subjectGroups {
          name
        }
        educationTypes {
          id
          name
          nameEduType
          linkAvailable
          title {
            name
          }
          schoolLevels {
            name
          }
          subjectGroups {
            name
          }
          specializations {
            name
          }
        }
      }
      uncompletedEducationTypes {
        id
      }
    }
  }
`;

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map(x => String.fromCharCode(x));

const ResultsPage: React.FC = () => {
  const router = useRouter();
  const { values } = useFormikContext<ConfiguratorValues & { cesta?: string; kurzy?: string }>();

  const { loading, data } = useQuery<any>(resultsQuery, {
    variables: {
      subjectId: values.predmet,
      levelId: values.stupen,
      title: values.vzdelani,
      specialization: values.oblast,
      schoolLevelDone: values.stupenSpecializace || undefined,
      subjectDone: values.predmetSpecializace || undefined,
    },
  });

  if (!values.vzdelani || !values.predmet || !values.stupen || !values.oblast) {
    router.replace(routes.configurator.step1);
    return null;
  }

  if (loading) {
    return <Loading />;
  }

  if (!loading && data?.qualifications.length === 0) {
    return (
      <Container>
        <ConfiguratorStep
          prevStep={{
            url: routes.configurator.step4,
            text: 'Změnit stupeň, předmět, vaše vzdělání',
          }}
          title="Gratulujeme! Jste kvalifikovaní k tomu začít hned učit"
        >
          <EducationText type="done" page="results">
            <Paragraph>
              Pokud chcete učit předmět mimo svou odbornost, bude pro vás nejjednodušší, pokud si
              doplníte program či kurz pro předmět dle své odbornosti, ten pak musíte na škole učit
              aspoň 1 hodinu. A na výuce dalších předmětů se můžete, obvykle bez problémů, domluvit
              se svým ředitelem.
            </Paragraph>
          </EducationText>
          <StyleWrapper margin="0 0 1rem 0">
            <Button href={routes.jobs} buttonStyle="button" target="_blank">
              Volná místa
            </Button>
          </StyleWrapper>
          <StyleWrapper>
            <Button
              href={routes.configurator.step1}
              buttonStyle="button"
              variant="secondary"
              startIcon={<RepeatIcon />}
            >
              Začít znovu
            </Button>
          </StyleWrapper>
        </ConfiguratorStep>
      </Container>
    );
  }

  return (
    <Container>
      <ConfiguratorStep
        prevStep={{ url: routes.configurator.step4, text: 'Změnit stupeň, předmět, vaše vzdělání' }}
        title="Po dokončení jedné z cest budete kvalifikovaní k tomu začít učit!"
      >
        <EducationText page="results" />
        <StyleWrapper margin="0 0 1rem 0">
          {data?.qualifications && (
            <Paths
              paths={data.qualifications.map(({ path, uncompletedEducationTypes }, index) => {
                const { id, rowId, educationTypes } = path;
                const uncompleted = uncompletedEducationTypes?.map(({ id }) => id);
                const pathId = id;

                const modifiedValues = Object.entries(values).reduce(
                  (all, [key, value]) =>
                    !['cesta', 'kurzy'].includes(key) ? { ...all, [key]: value } : all,
                  {},
                );

                return {
                  text: `Cesta ${alphabet[index]} (ID: ${rowId})`,
                  items: educationTypes
                    .filter(({ id }) => uncompleted.includes(id))
                    .map(({ id, nameEduType, linkAvailable, title }) => ({
                      text: nameEduType,
                      href: linkAvailable
                        ? `${routes.configurator.path}?${querystring.stringify(
                            modifiedValues,
                          )}&cesta=${pathId}&kurzy=${id}`
                        : undefined,
                      isAdditionalCourse: title === null,
                    })),
                };
              })}
            />
          )}
        </StyleWrapper>

        <StyleWrapper margin="0 0 1rem 0">
          <Button
            href={routes.configurator.step1}
            buttonStyle="button"
            variant="secondary"
            startIcon={<RepeatIcon />}
          >
            Začít znovu
          </Button>
        </StyleWrapper>

        <Paragraph>
          Některé školy vezmou zájemce o učitelství i bez pedagogického vzdělání nebo v průběhu jeho
          studia!{' '}
          <Button href={routes.jobs} buttonStyle="link" target="_blank">
            Podívejte se na nabídku takových škol
          </Button>
        </Paragraph>
      </ConfiguratorStep>
    </Container>
  );
};

export default ResultsPage;
