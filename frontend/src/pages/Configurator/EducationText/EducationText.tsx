import React from 'react';

import { useFormikContext } from 'formik';
import type { ConfiguratorValues } from '../ConfiguratorLayout/ConfiguratorLayout';
import { allSchoolLevelsQuery, SchoolLevelsQuery } from '../DegreePage/DegreePage';
import { useQuery } from '@apollo/client';
import { allTitlesQuery, TitlesQuery } from '../EducationPage/EducationPage';
import { allSubjectsQuery, SubjectsQuery } from '../SubjectPage/SubjectSelect/SubjectSelect';
import { MainParagraph, Paragraph } from './styled';
import StyleWrapper from '@components/StyledWrapper';
import AnimatedHeight from '@components/AnimatedHeight/AnimatedHeight';

interface IProps {
  type?: 'request' | 'done';
}

const EducationText: React.FC<IProps> = ({ type = 'request', children }) => {
  const { values } = useFormikContext<ConfiguratorValues>();

  const titlesQuery = useQuery<TitlesQuery>(allTitlesQuery);
  const schoolLevelsQuery = useQuery<SchoolLevelsQuery>(allSchoolLevelsQuery);
  const subjectsQuery = useQuery<SubjectsQuery>(allSubjectsQuery, {
    variables: { schoolLevelIds: [parseInt(values.stupen, 10)] },
  });

  const selectedTitle = titlesQuery.data?.titles.find(({ id }) => id === values.vzdelani);
  const selectedLevel = schoolLevelsQuery.data?.schoolLevels.find(({ id }) => id === values.stupen);
  const selectedSubject = subjectsQuery.data?.subjects.find(({ id }) => id === values.predmet);

  return (
    <StyleWrapper margin="0 0 1rem 0">
      <StyleWrapper margin="0 0 1rem 0">
        <AnimatedHeight isOpen>
          {selectedTitle && selectedLevel && selectedSubject ? (
            <>
              {type === 'done' ? (
                <MainParagraph>
                  Vaše vzdělání je postačující na to, abyste okamžitě mohli jít učit{' '}
                  <strong>{selectedSubject.name}</strong> na <strong>{selectedLevel.name}</strong>.
                </MainParagraph>
              ) : (
                <MainParagraph>
                  Po dokončení jednoho z kurzů můžete s vaším vzděláním{' '}
                  <strong>{selectedTitle.name}</strong> pro předmět{' '}
                  <strong>{selectedSubject.name}</strong> na <strong>{selectedLevel.name}</strong> a
                  Doplňující studium k rozšířené odborné kvalifikace (DVPP) začít učit Čeština na 2.
                  stupni ZŠ.
                </MainParagraph>
              )}
            </>
          ) : (
            <div />
          )}
        </AnimatedHeight>
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
