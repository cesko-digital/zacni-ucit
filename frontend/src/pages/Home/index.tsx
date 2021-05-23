import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../../components/Input';
import { H1, H2, LightText } from '../../components/Typography';
import Image from 'next/image';
import bgImage from '../../../public/images/home-background.png';
import { HomeImageWrap, Wrap, HeadTitle } from './styled';
import subjects from '../../constants/subjects';
import education from '../../constants/education';
import StyleWrapper from '../../components/Margin';
import { List, Map } from 'immutable';
import { AppState } from '../../store/';
import { connect } from 'react-redux';
import { updateFirstStep } from '../../store/firstStep/actions';
import { FirstStepForm } from '../../common/types';

type Props = {
  stages: Array<FirstStepForm>;
  updateFirstStep: typeof updateFirstStep;
};

const Home = ({ updateFirstStep, firstStep }) => {
  return (
    <Wrap>
      <StyleWrapper margin="4rem 0 1rem 0">
        <H1>Začni učit</H1>
      </StyleWrapper>
      <StyleWrapper margin="0 0 10rem 0">
        <LightText>
          Chcete se stát pedagogem? Pomůžeme vám! Zjistěte, jestli musíte ještě
          studovat, než můžete začít učit.
        </LightText>
      </StyleWrapper>
      <H2>Který stupeň chcete učit?</H2>
      <form>
        <StyleWrapper margin="2rem 0">
          {firstStep.map((button, idx) => (
            <Input
              key={idx}
              id={button.id}
              label={button.label}
              name="degree"
              type="radio"
              checked={button.checked}
              onChange={(e) => {}}
              onClick={(e) => {
                updateFirstStep(firstStep, button.id);
              }}
            />
          ))}
        </StyleWrapper>
      </form>
    </Wrap>
  );
};

const mapStateToProps = (state: AppState) => ({
  firstStep: state.firstStep,
});

export default connect(mapStateToProps, { updateFirstStep })(Home);
