import React from 'react';

import { Message } from '@components/Message/Message';
import { Openable } from '@components/Openable/Openable';

import ChevronIcon from '@icons/chevron-right.svg';
import { Wrapper, Path, Top, Title, Row, Button, Number, Inactive } from './styled';

interface Props {
  paths: {
    text: string;
    items: {
      href?: string;
      text: string;
      isAdditionalCourse?: boolean;
    }[];
    courseCode?: string;
  }[];
}

export const Paths: React.FC<Props> = ({ paths }) => (
  <Wrapper>
    <Top>
      <Title>Vydejte se jednou ze {paths?.length} cest k učení</Title>
    </Top>
    {paths?.map(({ text, items, courseCode }) => (
      <Path key={text}>
        <Openable text={text}>
          {items.map(({ href, text, isAdditionalCourse }, index) => (
            <Row key={text}>
              {href ? (
                <Button
                  href={href}
                  buttonStyle="button"
                  variant={isAdditionalCourse ? 'secondary' : 'primary'}
                  endIcon={<ChevronIcon />}
                >
                  <Number>{index + 1}.</Number> {text}
                </Button>
              ) : (
                <Inactive>
                  <Number>{index + 1}.</Number> {text}
                </Inactive>
              )}
            </Row>
          ))}
          {courseCode && (
            <Message>
              Pak si jen uděláte zkošku <strong>{courseCode}</strong>
            </Message>
          )}
        </Openable>
      </Path>
    ))}
  </Wrapper>
);
