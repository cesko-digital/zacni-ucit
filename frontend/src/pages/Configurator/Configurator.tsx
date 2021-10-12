import { Formik, Form } from 'formik';
import React from 'react';
import type { FC } from 'react';

import ConfiguratorStep from './ConfiguratorStep/ConfiguratorStep';
import DegreePage from './DegreePage/DegreePage';
import EducationPage from './EducationPage/EducationPage';
import SubjectPage from './SubjectPage/SubjectPage';
import StepBack from '@components/StepBack/StepBack';
import Stepper from '@components/Stepper/Stepper';
import StyleWrapper from '@components/StyledWrapper';
import Button from '@components/Button/Button';
import { H1, LightText } from '@components/Typography';
import Container from '@components/Container/Container';
import Hint from '@components/Hint/Hint';
import SpecializationPage from './SpecializationPage/SpecializationPage';
import ResultsPage from './ResultsPage/ResultsPage';
import PathDetailPage from './PathDetailPage/PathDetailPage';

export type ConfiguratorValues = {
  degree: string | null;
  subject: string | null;
  education: string | null;
  educationArea: string | null;
  teachingEducation: {
    degree: string | null;
    subject: string | null;
  };
};

const getStepName = (step: number) => {
  const steps = ['Stupeň', 'Předmět', 'Vaše vzdělání'];

  const getSeparator = (step: number, index: number) => {
    if (index === 0) {
      return '';
    }
    if (index === step - 2) {
      return ' a ';
    }

    return ', ';
  };

  return steps
    .splice(0, step - 1)
    .reduce((acc, current, index) => `${acc}${getSeparator(step, index)}${current}`, '');
};

const Configurator: FC = () => {
  const [visibleCourse, setVisibleCourse] = React.useState<string | null>(null);
  const [visiblePathDetail, setVisiblePathDetail] = React.useState<string | null>(null);
  const [activeStep, setActiveStep] = React.useState(1);

  return (
    <Formik<ConfiguratorValues>
      initialValues={{
        degree: null,
        subject: null,
        education: null,
        educationArea: null,
        teachingEducation: {
          degree: null,
          subject: null,
        },
      }}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {({ values, resetForm }) => {
        if (visibleCourse) {
          return (
            <Form noValidate>
              <main>
                <Container>Kurz</Container>
              </main>
            </Form>
          );
        }

        if (visiblePathDetail) {
          return (
            <Form noValidate>
              <main>
                <Container>
                  <PathDetailPage
                    onBack={() => {
                      setVisiblePathDetail(null);
                    }}
                    onSelectCourse={course => {
                      setVisibleCourse(course);
                    }}
                  />
                </Container>
              </main>
            </Form>
          );
        }

        return (
          <Form noValidate>
            <main>
              <Container>
                {activeStep !== 1 && (
                  <StepBack onClick={() => setActiveStep(activeStep - 1)}>
                    {getStepName(activeStep)}
                  </StepBack>
                )}

                {activeStep === 1 && (
                  <>
                    <StyleWrapper margin="3rem 0 1rem 0">
                      <H1>Chcete se stát učitelem, ale nevíte jak na to?</H1>
                    </StyleWrapper>
                    <StyleWrapper margin="0 0 3rem 0">
                      <LightText>
                        Udělejte další krok na cestě za katedru. Chcete učit? Vyplňte náš dotazník a
                        my vám doporučíme seznam potřebných pedagogických studijních programů
                        a kurzů, nebo jednoduše zjistíte, že můžete začít učit třeba hned.
                      </LightText>
                    </StyleWrapper>
                  </>
                )}

                {activeStep !== 5 && <Stepper step={activeStep} totalSteps={4} />}
                {activeStep === 1 && (
                  <ConfiguratorStep
                    isContinueDisabled={values.degree === null}
                    title="Na jakém školním stupni chcete učit?"
                    onNextStep={() => setActiveStep(2)}
                    additionalText={
                      <LightText>
                        Nenašli jste vámi zvolený stupeň nebo vás zajímá jiná pedagogická profese?{' '}
                        <Button href="#">Napište nám</Button> nebo se podívejte na{' '}
                        <Button href="#">přehled zákona o ped. pracovnících</Button>.
                      </LightText>
                    }
                  >
                    <DegreePage />
                  </ConfiguratorStep>
                )}
                {activeStep === 2 && (
                  <ConfiguratorStep
                    isContinueDisabled={values.subject === ''}
                    title="Jaký předmět chcete učit?"
                    onNextStep={() => setActiveStep(3)}
                    additionalText={
                      <Hint onClick={console.log}>
                        Nevíte si rady s výběrem předmětu? Napište nám
                      </Hint>
                    }
                  >
                    <SubjectPage />
                  </ConfiguratorStep>
                )}
                {activeStep === 3 && (
                  <ConfiguratorStep
                    isContinueDisabled={values.education === null}
                    title="Jaké je vaše vzdělání?"
                    onNextStep={() => setActiveStep(4)}
                  >
                    <EducationPage />
                  </ConfiguratorStep>
                )}
                {activeStep === 4 && (
                  <ConfiguratorStep
                    isContinueDisabled={false}
                    title="Jaká je vaše studijní specializace?"
                    buttonText="Výsledky"
                    onNextStep={() => setActiveStep(5)}
                  >
                    <SpecializationPage />
                  </ConfiguratorStep>
                )}
                {activeStep === 5 && (
                  <ConfiguratorStep
                    isContinueDisabled={false}
                    title="Po dokončení jedné z cest budete kvalifikovaní k tomu začít učit!"
                    withButton={false}
                    onNextStep={() => {
                      console.log('end');
                    }}
                  >
                    <ResultsPage
                      onShowDetailPage={page => {
                        window.scroll(0, 0);
                        setVisiblePathDetail(page);
                      }}
                      onReset={() => {
                        setActiveStep(1);
                        resetForm();
                      }}
                    />
                  </ConfiguratorStep>
                )}
              </Container>
            </main>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Configurator;
