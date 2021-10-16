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
import Modal from '@components/Modal/Modal';
import useModal from '@components/Modal/useModal';

const SubjectPage: React.FC = () => {
  const { values } = useFormikContext<ConfiguratorValues>();
  const moreSubjectsModal = useModal();
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
        <Hint href={routes.contactUs}>Nevíte si rady s výběrem předmětu? Napište nám</Hint>
      }
    >
      <Modal
        title="Chcete učit více předmětů?"
        isOpen={moreSubjectsModal.isOpen}
        closeModal={moreSubjectsModal.closeModal}
      >
        V případě, že chcete učit i nějaký další předmět, je potřeba vybrat z daných kombinací
        studijních dvouoborů. Pokud vám ani jedna nebude vyhovovat, můžete se na výuce druhého
        předmětu domluvit až přímo se svým zaměstnavatelem: ředitelem školy.
      </Modal>
      <PrimaryText>Pro {selectedLevel.name}</PrimaryText>
      <StyleWrapper margin="0 0 1rem 0">
        <LightText>Vyberte si prosím pouze jeden předmět.</LightText>
      </StyleWrapper>
      <StyleWrapper>
        <Hint
          onClick={() => {
            moreSubjectsModal.openModal();
          }}
        >
          Chcete učit více předmětů?
        </Hint>
        <Hint href="/subjects.pdf" download>
          Zjistěte, jaké předměty můžete s vašim vzděláním vyučovat
        </Hint>
      </StyleWrapper>
      <StyleWrapper margin="0 0 2rem">
        <SubjectSelect degreeId={values.degree} name="subject" />
      </StyleWrapper>
    </ConfiguratorStep>
  );
};

export default SubjectPage;
