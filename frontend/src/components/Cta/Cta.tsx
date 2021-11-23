import Button from '@components/Button/Button';
import React from 'react';
import {
  Wrapper,
  Title,
  Paragraph,
  Content,
  Container,
  ButtonWrapper,
  CloseButton,
} from './styled';

import CrossIcon from '@icons/cross.svg';
import ArrowUpIcon from '@icons/arrow-up.svg';

const Cta: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(true);

  return (
    <Wrapper isVisible={isVisible}>
      <Container>
        <CloseButton isVisible={isVisible} onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? <CrossIcon /> : <ArrowUpIcon />}
        </CloseButton>
        {isVisible && (
          <>
            <Content>
              <Paragraph>
                <Title>Nerozumíte pojmům? Nevíte, co vybrat?</Title> Nebo nám jen chcete poděkovat,
                protože jste našli, co hledáte?
              </Paragraph>

              <Paragraph>
                <Title>Zpětná vazba k beta verzi průvodce je pro nás nesmírně užitečná!</Title>
              </Paragraph>
            </Content>

            <ButtonWrapper>
              <Button
                href="https://docs.google.com/forms/d/e/1FAIpQLScFzx46ihk0y90E6_UZqAANbQfHGs3AMGv66ShcS0G5qguldA/viewform"
                target="_blank"
                buttonStyle="button"
              >
                Vyplnit dotazník
              </Button>
            </ButtonWrapper>
          </>
        )}
      </Container>
    </Wrapper>
  );
};

export default Cta;
