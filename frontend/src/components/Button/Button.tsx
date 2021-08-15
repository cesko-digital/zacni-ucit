import ReactLink from 'next/link';
import React from 'react';

import { Button, Link, IconWrapper, Text } from './styled';

interface BaseProps {
  children: string | JSX.Element;
  className?: string;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  variant?: 'primary' | 'secondary';
  buttonStyle?: 'button' | 'link';
  color?: string;
}

type Button = BaseProps & {
  onClick: () => void;
};

type Link = BaseProps & {
  href: string;
  target?: string;
  title?: string;
};

type Props = Button | Link;

const isLink = (item: Props): item is Link => (item as Link).href !== undefined;

const ButtonComponent: React.FC<Props> = props =>
  isLink(props) ? (
    <ReactLink href={props.href} prefetch={false}>
      <Link
        className={props.className}
        title={props.title}
        buttonStyle={props.buttonStyle ?? 'link'}
        variant={props.variant ?? 'primary'}
        color={props.color}
        target={props.target}
      >
        {props.startIcon && <IconWrapper>{props.startIcon}</IconWrapper>}
        <Text>{props.children}</Text>
        {props.endIcon && <IconWrapper>{props.endIcon}</IconWrapper>}
      </Link>
    </ReactLink>
  ) : (
    <Button
      className={props.className}
      onClick={props.onClick}
      buttonStyle={props.buttonStyle ?? 'button'}
      variant={props.variant ?? 'primary'}
      color={props.color}
    >
      {props.startIcon && <IconWrapper>{props.startIcon}</IconWrapper>}
      <Text>{props.children}</Text>
      {props.endIcon && <IconWrapper>{props.endIcon}</IconWrapper>}
    </Button>
  );

export default ButtonComponent;
