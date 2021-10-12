import React from 'react';

import Button from '@components/Button/Button';
import { MainParagraph, Paragraph } from './styled';
import { Paths } from './Paths/Paths';
import RepeatIcon from '@icons/repeat.svg';
import StyleWrapper from '@components/StyledWrapper';
import EducationText from '../EducationText/EducationText';

interface Props {
  onShowDetailPage: (page: string) => void;
  onReset: () => void;
}

const ResultsPage: React.FC<Props> = ({ onShowDetailPage, onReset }) => (
  <>
    <EducationText />
    <StyleWrapper margin="0 0 1rem 0">
      <Paths
        paths={[
          {
            text: 'Bakalářské vzdělání',
            items: [{ text: 'Vybrat bakalářský kurz', onClick: () => onShowDetailPage('bc') }],
          },
          {
            text: 'CŽV Příprava učitelů, studium jazyka a zkouška C1 SERR',
            items: [
              { text: 'Vybrat kurz CŽV', href: '#' },
              {
                text: 'Vybrat kurz pro doplňující didaktické studium jazyka',
                href: '#',
                isAdditionalCourse: true,
              },
            ],
            courseCode: 'C1 SERR',
          },
        ]}
      />
    </StyleWrapper>

    <StyleWrapper margin="0 0 1rem 0">
      <Button onClick={onReset} buttonStyle="button" variant="secondary" startIcon={<RepeatIcon />}>
        Začít znovu
      </Button>
    </StyleWrapper>

    <Paragraph>
      Některé školy vezmou zájemce o učitelství i bez pedagogického vzdělání nebo v průběhu jeho
      studia!{' '}
      <Button href="#" buttonStyle="link">
        Podívejte se na nabídku takových škol
      </Button>
    </Paragraph>
  </>
);

export default ResultsPage;
