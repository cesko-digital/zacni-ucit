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

export type ConfiguratorValues = {
  degree: string | null;
  subject: string | null;
  education: string | null;
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
  const [activeStep, setActiveStep] = React.useState(1);

  return (
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
                Udělejte další krok na cestě za katedru. Chcete učit? Vyplňte náš dotazník a my vám
                doporučíme seznam potřebných pedagogických studijních programů a kurzů, nebo
                jednoduše zjistíte, že můžete začít učit třeba hned.
              </LightText>
            </StyleWrapper>
          </>
        )}

        <Stepper step={activeStep} totalSteps={4} />
        <Formik<ConfiguratorValues>
          initialValues={{
            degree: null,
            subject: null,
            education: null,
          }}
          onSubmit={values => {
            console.log(values);
          }}
        >
          {({ values }) => (
            <Form noValidate>
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
                  isContinueDisabled={values.education.length === 0}
                  title="Jaké je vaše vzdělání?"
                  onNextStep={() => setActiveStep(4)}
                >
                  <EducationPage />
                </ConfiguratorStep>
              )}
              {activeStep === 4 && (
                <ConfiguratorStep
                  isContinueDisabled={values.education.length === 0}
                  title="Jaká je vaše studijní specializace?"
                  buttonText="Výsledky"
                  onNextStep={() => {
                    console.log('end');
                  }}
                >
                  <SpecializationPage />
                </ConfiguratorStep>
              )}
            </Form>
          )}
        </Formik>
      </Container>
    </main>
  );
};

export default Configurator;
