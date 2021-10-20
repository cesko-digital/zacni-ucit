import React from 'react';

import Button from '@components/Button/Button';
import { Paragraph } from './styled';
import { Paths } from './Paths/Paths';
import RepeatIcon from '@icons/repeat.svg';
import StyleWrapper from '@components/StyledWrapper';
import EducationText from '../EducationText/EducationText';
import ConfiguratorStep from '../ConfiguratorStep/ConfiguratorStep';
import { routes } from '@routes';
import Container from '@components/Container/Container';
import { useRouter } from 'next/router';
import { useFormikContext } from 'formik';
import { ConfiguratorValues } from '../ConfiguratorLayout/ConfiguratorLayout';

const ResultsPage: React.FC = () => {
  const router = useRouter();
  const { values } = useFormikContext<ConfiguratorValues>();

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
          <Paths
            paths={[
              {
                text: 'Bakalářské vzdělání',
                items: [{ text: 'Vybrat bakalářský kurz', href: routes.configurator.path }],
              },
              {
                text: 'CŽV Příprava učitelů, studium jazyka a zkouška C1 SERR',
                items: [
                  { text: 'Vybrat kurz CŽV', href: '#' },
                  {
                    text: 'Vybrat kurz pro doplňující didaktické studium jazyka',
                    href: '#',
                    isAdditionalCourse: true,
                  },
                ],
                courseCode: 'C1 SERR',
              },
            ]}
          />
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
