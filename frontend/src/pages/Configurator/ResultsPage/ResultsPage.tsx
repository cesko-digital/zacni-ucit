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

export const resultsQuery = gql`
  query qualificationsQuery($subjectId: Int!, $levelId: Int!, $title: Int!, $specialization: Int!) {
    qualifications(
      subjectId: $subjectId
      levelId: $levelId
      title: $title
      specialization: $specialization
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

const ResultsPage: React.FC = () => {
  const router = useRouter();
  const { values } = useFormikContext<ConfiguratorValues>();

  const { loading, error, data } = useQuery<any>(resultsQuery, {
    variables: {
      subjectId: values.subject,
      levelId: values.degree,
      title: values.education,
      specialization: values.educationArea,
    },
  });
  console.log(loading, error, data);

  if (!values.education || !values.subject || !values.degree || !values.educationArea) {
    router.replace(routes.configurator.step1);
    return null;
  }

  return (
    <Container>
      <ConfiguratorStep
        prevStep={{ url: routes.configurator.step4, text: 'Změnit stupeň, předmět, vaše vzdělání' }}
        title="Po dokončení jedné z cest budete kvalifikovaní k tomu začít učit!"
      >
        <EducationText />
        <StyleWrapper margin="0 0 1rem 0">
          {data?.qualifications && (
            <Paths
              paths={data.qualifications.map(({ path, uncompletedEducationTypes }) => {
                const { id, rowId, educationTypes } = path;
                const uncompleted = uncompletedEducationTypes?.map(({ id }) => id);

                return {
                  text: `${id} - rowId: ${rowId}`,
                  items: educationTypes
                    .filter(({ id }) => uncompleted.includes(id))
                    .map(({ id, name, title }) => ({
                      text: title?.name ?? name,
                      href: `${routes.configurator.path}/?id=${id}&${querystring.stringify(
                        values as any,
                      )}`,
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
