import { Select, MenuItem, FormControl } from '@material-ui/core';
import { useFormikContext } from 'formik';
import React from 'react';
import type { FC } from 'react';

import type { ConfiguratorValues } from '../Configurator';
import { degrees } from '../DegreePage/DegreePage';
import StyleWrapper from '@components/StyledWrapper';
import { LightText, PrimaryText } from '@components/Typography';
import subjects from 'src/constants/subjects';

const SubjectPage: FC = () => {
  const { values, handleChange } = useFormikContext<ConfiguratorValues>();

  return (
    <>
      <PrimaryText>Pro {degrees[values.degree].label}</PrimaryText>
      <StyleWrapper margin="0 0 3rem 0">
        <LightText>
          Vyberte si prosím pouze jeden předmět. V případě, že chcete učit i nějaký další předmět,
          je potřeba vybrat z daných kombinací studijních dvouoborů. Pokud vám ani jedna nebude
          vyhovovat, můžete se na výuce druhého předmětu domluvit až přímo se svým zaměstnavatelem:
          ředitelem školy.
        </LightText>
      </StyleWrapper>
      <StyleWrapper margin="2rem 0"></StyleWrapper>
      <FormControl>
        <Select name="subject" value={values.subject} onChange={handleChange}>
          {subjects.sort().map(subject => (
            <MenuItem key={subject} value={subject}>
              {subject}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default SubjectPage;
