import { useFormikContext } from 'formik';
import React from 'react';

import type { ConfiguratorValues } from '../ConfiguratorLayout/ConfiguratorLayout';
import Hint from '@components/Hint/Hint';
import StyleWrapper from '@components/StyledWrapper';
import { LightText, PrimaryText } from '@components/Typography';
import { useQuery } from '@apollo/client';
import { allSchoolLevelsQuery, SchoolLevelsQuery } from '../DegreePage/DegreePage';
import SubjectSelect from './SubjectSelect/SubjectSelect';
import ConfiguratorLayout from '../ConfiguratorLayout/ConfiguratorLayout';
import ConfiguratorStep from '../ConfiguratorStep/ConfiguratorStep';
import { routes } from '@routes';
import BackButton from '@pages/BackButton/BackButton';

const SubjectPage: React.FC = () => {
  const { values } = useFormikContext<ConfiguratorValues>();
  const schoolLevelsQuery = useQuery<SchoolLevelsQuery>(allSchoolLevelsQuery);

  if (schoolLevelsQuery.loading) {
    return <>Loading</>;
  }

  const selectedLevel = schoolLevelsQuery.data.schoolLevels.find(({ id }) => id === values.degree);

  return (
    <ConfiguratorStep
      title="Jaký předmět chcete učit?"
      step={2}
      prevStep={{ url: routes.configurator.step1, text: 'Změnit stupeň' }}
      nextStep={{ url: routes.configurator.step3, disabled: !values.subject }}
      additionalText={
        <Hint onClick={console.log}>Nevíte si rady s výběrem předmětu? Napište nám</Hint>
      }
    >
      <PrimaryText>Pro {selectedLevel.name}</PrimaryText>
      <StyleWrapper margin="0 0 1rem 0">
        <LightText>Vyberte si prosím pouze jeden předmět.</LightText>
      </StyleWrapper>
      <StyleWrapper>
        <Hint onClick={console.log}>Chcete učit více předmětů?</Hint>
        <Hint onClick={console.log}>Zjistěte, jaké předměty můžete s vašim vzděláním vyučovat</Hint>
      </StyleWrapper>
      <StyleWrapper margin="0 0 2rem">
        <SubjectSelect degreeId={values.degree} name="subject" />
      </StyleWrapper>
    </ConfiguratorStep>
  );
};

export default SubjectPage;
