import React from 'react';
import querystring from 'querystring';

import Button from '@components/Button/Button';
import { Message } from '@components/Message/Message';
import { Openable } from '@components/Openable/Openable';

import ChevronIcon from '@icons/chevron-right.svg';
import { Wrapper, Top, Title } from './styled';
import StyleWrapper from '@components/StyledWrapper';
import { useFormikContext } from 'formik';
import { ConfiguratorValues } from '@pages/Configurator/ConfiguratorLayout/ConfiguratorLayout';

interface Props {
  paths: {
    text: string;
    items: {
      href?: string;
      isExternal?: boolean;
      text: string;
      isAdditionalCourse?: boolean;
    }[];
    courseCode?: string;
  }[];
}

export const Paths: React.FC<Props> = ({ paths }) => {
  const { values } = useFormikContext<ConfiguratorValues>();

  return (
    <Wrapper>
      <Top>
        <Title>Vydejte se jednou ze 2 cest k učení</Title>
      </Top>
      {paths.map(({ text, items, courseCode }) => (
        <Openable key={text} text={text}>
          {items.map(({ href, isExternal, text, isAdditionalCourse }) => (
            <StyleWrapper key={text} margin="0 0 0.5rem 0">
              <Button
                href={isExternal ? href : `${href}?${querystring.stringify(values as any)}`}
                buttonStyle="button"
                variant={isAdditionalCourse ? 'secondary' : 'primary'}
                endIcon={<ChevronIcon />}
              >
                {text}
              </Button>
            </StyleWrapper>
          ))}
          {courseCode && (
            <Message>
              Pak si jen uděláte zkošku <strong>{courseCode}</strong>
            </Message>
          )}
        </Openable>
      ))}
    </Wrapper>
  );
};
