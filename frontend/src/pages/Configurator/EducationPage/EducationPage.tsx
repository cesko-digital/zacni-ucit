import { useFormikContext } from 'formik';
import React from 'react';
import type { FC } from 'react';

import type { ConfiguratorValues } from '../Configurator';
import { degrees } from '../DegreePage/DegreePage';
import Input from '@components/Input/Input';
import StyleWrapper from '@components/StyledWrapper';
import { H3, LightText, PrimaryText } from '@components/Typography';
import education from 'src/constants/education';

const EducationPage: FC = () => {
  const { values, setFieldValue } = useFormikContext<ConfiguratorValues>();

  return (
    <>
      <H3>
        Vyberte všechna vaše vzdělání, která by mohla být relevantní pro učení předmětu{' '}
        <PrimaryText size="1em">{values.subject}</PrimaryText> na 
        <PrimaryText size="1em">{degrees[values.degree].label}</PrimaryText>
      </H3>
      <StyleWrapper margin="2rem 0 3rem 0">
        <LightText>
          Poznámka: Vyšší než magisterský stupeň vzdělání není pro učitelství podstatný. Relevantní
          pro učitelství je pouze maturita z odborných předmětů ze SOU nebo SOŠ.
        </LightText>
      </StyleWrapper>
      <StyleWrapper margin="2rem 0">
        {education.map(education => (
          <Input
            key={education}
            checked={values.education.includes(education)}
            label={education}
            name="education"
            type="checkbox"
            value={education}
            onChange={() => {
              if (values.education.includes(education)) {
                setFieldValue(
                  'education',
                  values.education.filter(current => current !== education),
                );
              } else {
                setFieldValue('education', [...values.education, education]);
              }
            }}
          />
        ))}
      </StyleWrapper>
    </>
  );
};

export default EducationPage;
