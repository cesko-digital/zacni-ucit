import querystring from 'querystring';
import React from 'react';

import { useFormikContext } from 'formik';
import type { ConfiguratorValues } from '../ConfiguratorLayout/ConfiguratorLayout';
import { allSchoolLevelsQuery, SchoolLevelsQuery } from '../DegreePage/DegreePage';
import { useQuery } from '@apollo/client';
import { allTitlesQuery, TitlesQuery } from '../EducationPage/EducationPage';
import { allSubjectsQuery, SubjectsQuery } from '../SubjectPage/SubjectSelect/SubjectSelect';
import { MainParagraph, Paragraph } from './styled';
import StyleWrapper from '@components/StyledWrapper';
import { resultsQuery } from '../PathDetailPage/PathDetailPage';
import Button from '@components/Button/Button';
import { routes } from '@routes';

interface IProps {
  type?: 'request' | 'done';
  page?: 'results' | 'courses';
}

const EducationText: React.FC<IProps> = ({ type = 'request', page, children }) => {
  const { values } = useFormikContext<ConfiguratorValues & { cesta?: string; kurzy?: string }>();

  const results = useQuery<any>(resultsQuery, {
    variables: {
      subjectId: values.predmet,
      levelId: values.stupen,
      title: values.vzdelani,
      specialization: values.oblast,
      schoolLevelDone: values.stupenSpecializace || undefined,
      subjectDone: values.predmetSpecializace || undefined,
    },
  });
  const qualification = results.data?.qualifications?.find(({ path }) => path.id === values.cesta);

  const titlesQuery = useQuery<TitlesQuery>(allTitlesQuery);
  const schoolLevelsQuery = useQuery<SchoolLevelsQuery>(allSchoolLevelsQuery);
  const subjectsQuery = useQuery<SubjectsQuery>(allSubjectsQuery, {
    variables: { schoolLevelIds: [parseInt(values.stupen, 10)] },
  });

  const selectedTitle = titlesQuery.data?.titles.find(({ id }) => id === values.vzdelani);
  const selectedLevel = schoolLevelsQuery.data?.schoolLevels.find(({ id }) => id === values.stupen);
  const selectedSubject = subjectsQuery.data?.subjects.find(({ id }) => id === values.predmet);

  const getCoursesText = () => {
    if (qualification?.uncompletedEducationTypes.length > 1) {
      const modifiedValuesOther = Object.entries(values).reduce(
        (all, [key, value]) => (!['kurz', 'kurzy'].includes(key) ? { ...all, [key]: value } : all),
        {},
      );

      return (
        <>
          pokud si doplníte jeden z kurzů níže a k tomu{' '}
          {qualification?.path.educationTypes
            .filter(({ id }) => id !== values.kurzy)
            .map(({ id, nameEduType, name, linkAvailable, title }) =>
              linkAvailable ? (
                <Button
                  key={id}
                  href={`${routes.configurator.path}?${querystring.stringify(
                    modifiedValuesOther,
                  )}&kurzy=${id}`}
                  inline
                >
                  {nameEduType ?? title?.name ?? name}
                </Button>
              ) : (
                <span key={id}>{nameEduType ?? title?.name ?? name}</span>
              ),
            )}
        </>
      );
    }

    return 'pokud si doplníte jeden z kurzů níže';
  };

  return (
    <StyleWrapper margin="0 0 1rem 0">
      <StyleWrapper margin="0 0 1rem 0">
        {selectedTitle && selectedLevel && selectedSubject ? (
          <>
            {type === 'done' ? (
              <MainParagraph>
                Vaše vzdělání je postačující na to, abyste okamžitě mohli jít učit{' '}
                <strong>{selectedSubject.name}</strong> na <strong>{selectedLevel.name}</strong>.
              </MainParagraph>
            ) : (
              <MainParagraph>
                S vaším vzděláním <strong>{selectedTitle.name}</strong> můžete začít učit předmět{' '}
                <strong>{selectedSubject.name}</strong> na <strong>{selectedLevel.name}</strong>,{' '}
                {page === 'results'
                  ? 'pokud se vydáte jednou z námi doporučených cest'
                  : getCoursesText()}
                .
              </MainParagraph>
            )}
          </>
        ) : (
          <div />
        )}
      </StyleWrapper>

      {children ?? (
        <>
          <Paragraph>
            Ještě předtím, než si vyberete konkrétní program nebo kurz, si zkontrolujte, že oblast
            vašeho odborného vzdělání odpovídá předmětu, který chcete učit!
          </Paragraph>
          <Paragraph>
            Pokud chcete učit předmět mimo svou odbornost, bude pro vás nejjednodušší, pokud si
            doplníte program či kurz pro předmět dle své odbornosti, ten pak musíte na škole učit
            aspoň 1 hodinu. A na výuce dalších předmětů se můžete, obvykle bez problémů, domluvit se
            svým ředitelem.
          </Paragraph>
        </>
      )}
    </StyleWrapper>
  );
};

export default EducationText;
