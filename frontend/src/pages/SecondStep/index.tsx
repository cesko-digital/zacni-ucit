import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { Wrap } from './styled';
import { AppState } from '../../store/';
import { connect } from 'react-redux';
import { setSecondStep } from '../../store/secondStep/actions';
import { FirstStepForm, SecondStepForm } from '../../common/types';
import StyleWrapper from '../../components/StyledWrapper';
import { H3, H2, LightText, PrimaryText } from '../../components/Typography';
import subjects from '../../constants/subjects';
import { Input } from '../../components/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      width: '95%',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

type Props = {
  secondStep: SecondStepForm;
  firstStep: FirstStepForm;
  setSecondStep: typeof setSecondStep;
};

const SecondStep: FC<Props> = ({ setSecondStep, secondStep, firstStep }) => {
  const router = useRouter();
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSecondStep(event.target.value as string);
  };
  return (
    <Wrap>
      <StyleWrapper margin="3rem 0 1rem 0">
        <H2>Jaký předmět chcete učit?</H2>
      </StyleWrapper>
      <PrimaryText>
        Pro{' '}
        {firstStep.chooseDegreeState.map((button, idx) => {
          if (button.checked) {
            return button.label;
          }
        })}
      </PrimaryText>
      <StyleWrapper margin="0 0 3rem 0">
        <LightText>
          Vyberte si prosím pouze jeden předmět. V případě, že chcete učit i
          nějaký další předmět, je potřeba vybrat z daných kombinací studijních
          dvouoborů. Pokud vám ani jedna nebude vyhovovat, můžete se na výuce
          druhého předmětu domluvit až přímo se svým zaměstnavatelem: ředitelem
          školy.
        </LightText>
      </StyleWrapper>
      <StyleWrapper margin="2rem 0"></StyleWrapper>
      <FormControl className={classes.formControl}>
        {/* <InputLabel id="demo-simple-select-label">Vyberte předmět</InputLabel> */}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={secondStep}
          onChange={handleChange}
        >
          {subjects.map((subject) => (
            <MenuItem value={subject}>{subject}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <StyleWrapper textAlign="center">
        <Input
          value="Pokračovat   >"
          type="button"
          padding="1.5rem 2rem"
          margin="2.5rem 0 0 0"
          onClick={() => {
            router.push('/vyber-vzdelani');
          }}
        />
      </StyleWrapper>
    </Wrap>
  );
};

const mapStateToProps = (state: AppState) => ({
  secondStep: state.secondStep,
  firstStep: state.firstStep,
});

export default connect(mapStateToProps, { setSecondStep })(SecondStep);
