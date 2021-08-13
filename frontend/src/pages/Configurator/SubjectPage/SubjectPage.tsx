import { MenuItem, FormControl } from '@material-ui/core';
import { useFormikContext } from 'formik';
import React from 'react';

import type { ConfiguratorValues } from '../Configurator';
import { degrees } from '../DegreePage/DegreePage';
import { Select } from './styled';
import Hint from '@components/Hint/Hint';
import StyleWrapper from '@components/StyledWrapper';
import { LightText, PrimaryText } from '@components/Typography';
import subjects from 'src/constants/subjects';

const SubjectPage: React.FC = () => {
  const { values, handleChange } = useFormikContext<ConfiguratorValues>();

  return (
    <>
      <PrimaryText>Pro {degrees[values.degree].label}</PrimaryText>
      <StyleWrapper margin="0 0 1rem 0">
        <LightText>Vyberte si prosím pouze jeden předmět.</LightText>
      </StyleWrapper>
      <StyleWrapper>
        <Hint onClick={console.log}>Chcete učit více předmětů?</Hint>
        <Hint onClick={console.log}>Zjistěte, jaké předměty můžete s vašim vzděláním vyučovat</Hint>
      </StyleWrapper>
      <StyleWrapper margin="0 0 2rem">
        <FormControl fullWidth>
          <Select
            name="subject"
            value={values.subject}
            variant="outlined"
            fullWidth
            onChange={handleChange}
          >
            {subjects.sort().map(subject => (
              <MenuItem key={subject} value={subject}>
                {subject}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </StyleWrapper>
    </>
  );
};

export default SubjectPage;
