import React, { FC, useState } from 'react';
import { useRouter } from 'next/router';
import { Input } from '../../components/Input';
import { H3, H2, LightText, PrimaryText } from '../../components/Typography';
import { Wrap } from './styled';
import StyleWrapper from '../../components/StyledWrapper';
import { AppState } from '../../store/';
import { connect } from 'react-redux';
import {
  setThirdStep,
  setButtonIsDisabled,
} from '../../store/thirdStep/actions';
import {
  ThirdStepForm,
  FirstStepForm,
  SecondStepForm,
} from '../../common/types';

type Props = {
  stages: Array<ThirdStepForm>;
  firstStep: FirstStepForm;
  secondStep: SecondStepForm;
  thirdStep: ThirdStepForm;
  setThirdStep: typeof setThirdStep;
  setButtonIsDisabled: typeof setButtonIsDisabled;
  buttonIsDisabled: boolean;
};

const ThirdStep: FC<Props> = ({
  setThirdStep,
  firstStep,
  secondStep,
  thirdStep,
  setButtonIsDisabled,
  buttonIsDisabled,
}) => {
  const router = useRouter();
  // const [buttonIsDisabled, setButtonIsDisabled] = useState(true);
  return (
    <Wrap>
      <StyleWrapper margin="3rem 0 1rem 0">
        <H2>Jaké je Vaše vzdělání?</H2>
      </StyleWrapper>
      <H3>
        Vyberte všechna vaše vzdělání, která by mohla být relevantní pro učení
        předmětu <PrimaryText size="1em">{secondStep}</PrimaryText> na 
        <PrimaryText size="1em">
          {firstStep.chooseDegreeState.map((button, idx) => {
            if (button.checked) {
              return button.label;
            }
          })}
        </PrimaryText>
      </H3>
      <StyleWrapper margin="2rem 0 3rem 0">
        <LightText>
          Poznámka: Vyšší než magisterský stupeň vzdělání není pro učitelství
          podstatný. Relevantní pro učitelství je pouze maturita z odborných
          předmětů ze SOU nebo SOŠ.
        </LightText>
      </StyleWrapper>
      <form>
        <StyleWrapper margin="2rem 0">
          {thirdStep.chooseDegreeState.map((button, idx) => (
            <Input
              key={idx}
              id={button.id}
              label={button.label}
              name="degree"
              type="checkbox"
              checked={button.checked}
              onChange={() => {}}
              onClick={() => {
                setThirdStep(thirdStep, button.id);
                setButtonIsDisabled(false);
              }}
            />
          ))}
        </StyleWrapper>
        <StyleWrapper textAlign="center" padding="0 0 7rem 0">
          <Input
            value="Pokračovat   >"
            type="button"
            disabled={buttonIsDisabled}
            padding="1.5rem 2rem"
            margin="2.5rem 0 0 0"
            onClick={() => {
              router.push('/vyber-specializace');
            }}
          />
        </StyleWrapper>
      </form>
    </Wrap>
  );
};

const mapStateToProps = (state: AppState) => ({
  firstStep: state.firstStep,
  secondStep: state.secondStep,
  thirdStep: state.thirdStep,
  buttonIsDisabled: state.thirdStep.buttonIsDisabled,
});

export default connect(mapStateToProps, {
  setThirdStep,
  setButtonIsDisabled,
})(ThirdStep);
