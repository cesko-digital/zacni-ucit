import { gql, useQuery } from '@apollo/client';
import Hint from '@components/Hint/Hint';
import Radio from '@components/Input/Radio/Radio';
import Select from '@components/Input/Select/Select';
import { ConfiguratorValues } from '@pages/Configurator/ConfiguratorLayout/ConfiguratorLayout';
import SubjectSelect from '@pages/Configurator/SubjectPage/SubjectSelect/SubjectSelect';
import { useFormikContext } from 'formik';
import React from 'react';
import { OffestArea, Area, Note, RadiosWrapper, Paragraph } from './styled';

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

interface SchoolLevelsQuery {
  schoolLevels: {
    id: string;
    name: string;
    userEducation: boolean;
  }[];
}

const allSchoolLevelsQuery = gql`
  query allSchoolLevelsQuery {
    schoolLevels {
      id
      name
      userEducation
    }
  }
`;

interface IProps {
  education: string;
}

const withDegreeSection = ['1']; // Učitelství = 1
const withoutSubjectSection = ['1', '2']; // Mateřská škola = 1, 1. stupeň ZŠ = '2'

const EducationArea: React.FC<IProps> = ({ education }) => {
  const { values, handleChange, setFieldValue } = useFormikContext<ConfiguratorValues>();

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
    if (sortedAreas.length > 0 && !values.oblast) {
      setFieldValue('oblast', sortedAreas[0].id);
    }
  }, [sortedAreas]);

  const filteredSchoolLevels = React.useMemo(
    () => schoolLevelsQuery.data?.schoolLevels.filter(({ userEducation }) => userEducation) ?? [],
    [schoolLevelsQuery],
  );

  return (
    <div>
      <Paragraph>4.1 Ze kterého oboru máte {education} vzdělání?</Paragraph>
      <Hint href="/subjects.pdf" download>
        Zjistěte, jaké předměty můžete s vaším vzděláním vyučovat
      </Hint>
      <Select
        name="oblast"
        items={sortedAreas.map(({ id, name }) => ({
          text: name,
          value: id,
        }))}
        value={values.oblast}
        onChange={handleChange}
      />
      {/* Učitelství */}
      {withDegreeSection.includes(values.oblast) && (
        <OffestArea>
          <Area>
            <Paragraph>4.1.1 Pro jaký školní stupeň máte pedagogické vzdělání?</Paragraph>
            <Note>Poznámka: Naleznete v názvu oboru či programu.</Note>
            <RadiosWrapper>
              {filteredSchoolLevels
                .sort((a, b) => (parseInt(a.id) < parseInt(b.id) ? -1 : 1))
                .map(({ id, name }) => (
                  <div key={id}>
                    <Radio
                      checked={values.stupenSpecializace === id}
                      name="stupenSpecializace"
                      value={id}
                      onChange={() => setFieldValue('stupenSpecializace', id)}
                      label={name}
                    />
                  </div>
                ))}
            </RadiosWrapper>
          </Area>
          {values.stupenSpecializace && !withoutSubjectSection.includes(values.stupenSpecializace) && (
            <Area>
              <p>4.1.2 Pro jaké studijní předměty máte pedagogické vzdělání?</p>
              <p>Poznámka: Naleznete v názvu oboru či programu.</p>
              <SubjectSelect degreeId={values.stupenSpecializace} name="predmetSpecializace" />
            </Area>
          )}
        </OffestArea>
      )}
    </div>
  );
};

export default EducationArea;
