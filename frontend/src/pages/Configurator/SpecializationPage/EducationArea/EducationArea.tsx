import { gql, useQuery } from '@apollo/client';
import Hint from '@components/Hint/Hint';
import Radio from '@components/Input/Radio/Radio';
import Select from '@components/Input/Select/Select';
import { ConfiguratorValues } from '@pages/Configurator/Configurator';
import { allSchoolLevelsQuery, SchoolLevelsQuery } from '@pages/Configurator/DegreePage/DegreePage';
import SubjectSelect from '@pages/Configurator/SubjectPage/SubjectSelect/SubjectSelect';
import { useFormikContext } from 'formik';
import React from 'react';
import { OffestArea, Area, Note, RadiosWrapper } from './styled';

export interface AllEducationAreasQuery {
  educationAreas: {
    id: string;
    name: string;
  }[];
}

export const allEducationAreasQuery = gql`
  query getEducationAreas {
    educationAreas {
      id
      name
    }
  }
`;

interface IProps {
  education: string;
}

const EducationArea: React.FC<IProps> = ({ education }) => {
  const { values, handleChange, setFieldValue } = useFormikContext<ConfiguratorValues>();
  console.log(values);

  const educationAreasQuery = useQuery<AllEducationAreasQuery>(allEducationAreasQuery);
  const schoolLevelsQuery = useQuery<SchoolLevelsQuery>(allSchoolLevelsQuery);

  const sortedAreas = React.useMemo(() => {
    if (educationAreasQuery.data) {
      return [...educationAreasQuery.data.educationAreas].sort((a, b) =>
        a.name > b.name ? 1 : -1,
      );
    }

    return [];
  }, [educationAreasQuery.data]);

  React.useEffect(() => {
    if (sortedAreas.length > 0) {
      setFieldValue('educationArea', sortedAreas[0].id);
    }
  }, [sortedAreas]);

  return (
    <div>
      <p>4.1 Ze kterého oboru máte {education} vzdělání?</p>
      <Hint onClick={console.log}>Zjistěte, jaké předměty můžete s vaším vzděláním vyučovat</Hint>
      <Select
        name="educationArea"
        items={sortedAreas.map(({ id, name }) => ({
          text: name,
          value: id,
        }))}
        value={values.educationArea}
        onChange={handleChange}
      />
      {/* Učitelství */}
      {values.educationArea === '5' && (
        <OffestArea>
          <Area>
            <p>4.1.1 Pro jaký školní stupeň máte pedagogické vzdělání?</p>
            <Note>Poznámka: Naleznete v názvu oboru či programu.</Note>
            <RadiosWrapper>
              {schoolLevelsQuery.data?.schoolLevels.map(({ id, name }) => (
                <div key={id}>
                  <Radio
                    checked={values.teachingEducation.degree === id}
                    name="teachingEducation.degree"
                    value={id}
                    onChange={() => setFieldValue('teachingEducation.degree', id)}
                    label={name}
                  />
                </div>
              ))}
            </RadiosWrapper>
          </Area>
          {values.teachingEducation.degree && (
            <Area>
              <p>4.1.2 Pro jaké studijní předměty máte pedagogické vzdělání?</p>
              <p>Poznámka: Naleznete v názvu oboru či programu.</p>
              <SubjectSelect
                degreeId={values.teachingEducation.degree}
                name="teachingEducation.subject"
              />
            </Area>
          )}
        </OffestArea>
      )}
    </div>
  );
};

export default EducationArea;
