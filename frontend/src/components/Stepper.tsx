import { theme } from '../common/theme';
import { styled } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import MobileStepper from '@material-ui/core/MobileStepper';

const GreenStepper = styled(Stepper)({
  width: '100%',
  backgroundColor: 'transparent',
  fontFamily: 'inherit',
  margin: 0,
  padding: '1rem 0 1rem 0',

  ['@media(max-width: 800px)']: {
    display: 'none',
  },

  '& .MuiSvgIcon-root': {
    fontSize: '2rem',
    fontWeight: '900',
  },
  '& .MuiStepIcon-text': {
    fontFamily: 'inherit',
  },

  '& .MuiTypography-body2': {
    fontFamily: 'inherit',
    fontWeight: 400,
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
  fontSize: '12px',
  padding: '1rem 0 0 0',

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
            {activeStep == 0 ? 'KROK 1 ZE 4' : ''}
          </StepLabel>
        </Step>
        <Step>
          <StepLabel className="step_label">
            {activeStep == 1 ? 'KROK 2 ZE 4' : ''}
          </StepLabel>
        </Step>
        <Step>
          <StepLabel className="step_label">
            {activeStep == 2 ? 'KROK 3 ZE 4' : ''}
          </StepLabel>
        </Step>
        <Step>
          <StepLabel className="step_label">
            {activeStep == 3 ? 'KROK 4 ZE 4' : ''}
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
