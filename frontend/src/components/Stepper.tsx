import { theme } from '../common/theme';
import { styled } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import MobileStepper from '@material-ui/core/MobileStepper';

const GreenStepper = styled(Stepper)({
  width: '100%',
  backgroundColor: 'transparent',

  ['@media(max-width: 800px)']: {
    display: 'none',
  },

  '& .MuiSvgIcon-root': {
    fontSize: '3rem',
    fontWeight: '900',
  },
  '& .MuiStepIcon-text': {
    fontSize: '1.2rem',
    ['@media(max-width: 800px)']: {
      display: 'none',
    },
  },
  '& svg.MuiSvgIcon-root.MuiStepIcon-root.MuiStepIcon-active': {
    color: theme.color.green,
    '& circle': {
      fill: theme.color.green,
    },
  },
  '& svg.MuiSvgIcon-root.MuiStepIcon-root.MuiStepIcon-completed': {
    fill: theme.color.green,
    color: theme.color.green,
  },
});

const GreenMobileStepper = styled(MobileStepper)({
  backgroundColor: 'transparent',
  justifyContent: 'flex-start',

  ['@media(min-width: 801px)']: {
    display: 'none',
  },

  '& .MuiMobileStepper-dot': {
    width: '16px',
    height: '4px',
    borderRadius: '8px',
    marginLeft: '5px',
  },
  '& .MuiMobileStepper-dotActive': {
    backgroundColor: theme.color.green,
  },
});

export interface IStep {
  activeStep: number;
}

const CustomStepper: React.FC<IStep> = ({ activeStep }) => {
  return (
    <>
      <GreenStepper activeStep={activeStep}>
        <Step>
          <StepLabel className="step_label">
            {activeStep == 0 ? 'Krok 1 ze 4' : ''}
          </StepLabel>
        </Step>
        <Step>
          <StepLabel className="step_label">
            {activeStep == 1 ? 'Krok 2 ze 4' : ''}
          </StepLabel>
        </Step>
        <Step>
          <StepLabel className="step_label">
            {activeStep == 2 ? 'Krok 3 ze 4' : ''}
          </StepLabel>
        </Step>
        <Step>
          <StepLabel className="step_label">
            {activeStep == 3 ? 'Krok 4 ze 4' : ''}
          </StepLabel>
        </Step>
      </GreenStepper>

      <GreenMobileStepper
        variant="dots"
        steps={4}
        position="static"
        activeStep={activeStep}
        nextButton={false}
        backButton={<label>KROK {activeStep + 1} z 4</label>}
      ></GreenMobileStepper>
    </>
  );
};

export default CustomStepper;
