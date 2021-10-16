import React from 'react';
import querystring from 'querystring';

import { Title, BackButtonOffset } from './styled';
import Button from '@components/Button/Button';
import Meta from '@components/Meta/Meta';
import StyleWrapper from '@components/StyledWrapper';

import ChevronIcon from '@icons/chevron-right.svg';
import { useFormikContext } from 'formik';
import { ConfiguratorValues } from '../ConfiguratorLayout/ConfiguratorLayout';
import BackButton from '@pages/BackButton/BackButton';
import Stepper from '@components/Stepper/Stepper';

type Props = {
  title: string;
  step?: number;
  prevStep?: {
    url: string;
    text: string;
  };
  nextStep?: {
    url: string;
    text?: string;
    disabled?: boolean;
  };
  buttonText?: string;
  additionalText?: JSX.Element;
  withButton?: boolean;
};

const ConfiguratorStep: React.FC<Props> = ({
  children,
  title,
  additionalText = null,
  prevStep,
  nextStep,
  step,
}) => {
  const { values } = useFormikContext<ConfiguratorValues>();

  return (
    <div>
      <Meta title={title} />
      {prevStep ? (
        <BackButton icon="arrow" href={`${prevStep.url}?${querystring.stringify(values as any)}`}>
          {prevStep.text}
        </BackButton>
      ) : (
        <BackButtonOffset />
      )}
      {step && <Stepper step={step} totalSteps={4} />}
      <Title>{title}</Title>
      {children}
      {nextStep && (
        <StyleWrapper padding="0 0 1rem 0">
          <Button
            href={`${nextStep.url}?${querystring.stringify(values as any)}`}
            disabled={nextStep.disabled}
            endIcon={<ChevronIcon />}
            type="button"
            buttonStyle="button"
          >
            {nextStep.text ?? 'Pokračovat'}
          </Button>
        </StyleWrapper>
      )}
      {additionalText}
    </div>
  );
};

export default ConfiguratorStep;
