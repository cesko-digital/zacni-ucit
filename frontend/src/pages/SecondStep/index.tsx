import React from 'react';
import { useRouter } from 'next/router';
import { Wrap } from './styled';
import { AppState } from '../../store/';
import { connect } from 'react-redux';
import { updateSecondStep } from '../../store/secondStep/actions';
import { FirstStepForm } from '../../common/types';

type Props = {
  stages: Array<FirstStepForm>;
  updateFirstStep: typeof updateSecondStep;
};

const SecondStep = ({ updateSecondStep, firstStep }) => {
  const router = useRouter();
  return <Wrap>Second Step TBD</Wrap>;
};

const mapStateToProps = (state: AppState) => ({
  firstStep: state.secondStep,
});

export default connect(mapStateToProps, { updateSecondStep })(SecondStep);
