import { FormControl } from '@material-ui/core';
import styled from 'styled-components';

const GreenFormControl = styled(FormControl)({
  '.MuiOutlinedInput-notchedOutline': {
    borderColor: 'red',
  },
});

const customFormControl = () => {
  return (
    <div>
      <GreenFormControl></GreenFormControl>
    </div>
  );
};

export default customFormControl;
