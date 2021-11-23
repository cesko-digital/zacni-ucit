import React from 'react';

import { Message } from '@components/Message/Message';
import { Openable } from '@components/Openable/Openable';

import ChevronIcon from '@icons/chevron-right.svg';
import { Wrapper, Top, Title, Row, Button } from './styled';

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
      <Openable key={text} text={text}>
        {items.map(({ href, text, isAdditionalCourse }) => (
          <Row key={text}>
            {href ? (
              <Button
                href={href}
                buttonStyle="button"
                variant={isAdditionalCourse ? 'secondary' : 'primary'}
                endIcon={<ChevronIcon />}
              >
                {text}
              </Button>
            ) : (
              <div>{text}</div>
            )}
          </Row>
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
