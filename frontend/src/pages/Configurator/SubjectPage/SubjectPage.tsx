import { useFormikContext } from 'formik';
import React from 'react';

import type { ConfiguratorValues } from '../Configurator';
import Hint from '@components/Hint/Hint';
import StyleWrapper from '@components/StyledWrapper';
import { LightText, PrimaryText } from '@components/Typography';
import { gql, useQuery } from '@apollo/client';
import { allSchoolLevelsQuery, SchoolLevelsQuery } from '../DegreePage/DegreePage';
import Select from '@components/Input/Select/Select';
import SubjectSelect from './SubjectSelect/SubjectSelect';

const SubjectPage: React.FC = () => {
  const { values } = useFormikContext<ConfiguratorValues>();
  const schoolLevelsQuery = useQuery<SchoolLevelsQuery>(allSchoolLevelsQuery);

  if (schoolLevelsQuery.loading) {
    return <>Loading</>;
  }

  const selectedLevel = schoolLevelsQuery.data.schoolLevels.find(({ id }) => id === values.degree);

  return (
    <>
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
    </>
  );
};

export default SubjectPage;
