import AnimatedHeight from '@components/AnimatedHeight/AnimatedHeight';
import React from 'react';

import { Wrapper, Button, Content } from './styled';

interface Props {
  text: string;
}

export const Openable: React.FC<Props> = ({ text, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Wrapper>
      <Button isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {text}
      </Button>
      <AnimatedHeight isOpen={isOpen}>
        <Content>{children}</Content>
      </AnimatedHeight>
    </Wrapper>
  );
};
