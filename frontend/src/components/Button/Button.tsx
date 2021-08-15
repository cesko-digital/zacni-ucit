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
  disabled?: boolean;
  type?: 'submit' | 'button';
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
        buttonStyle={props.buttonStyle ?? 'link'}
        className={props.className}
        color={props.color}
        target={props.target}
        title={props.title}
        variant={props.variant ?? 'primary'}
      >
        {props.startIcon && <IconWrapper>{props.startIcon}</IconWrapper>}
        <Text>{props.children}</Text>
        {props.endIcon && <IconWrapper>{props.endIcon}</IconWrapper>}
      </Link>
    </ReactLink>
  ) : (
    <Button
      buttonStyle={props.buttonStyle ?? 'button'}
      className={props.className}
      color={props.color}
      variant={props.variant ?? 'primary'}
      onClick={props.onClick}
      disabled={props.disabled}
      type={props.type}
    >
      {props.startIcon && <IconWrapper>{props.startIcon}</IconWrapper>}
      <Text>{props.children}</Text>
      {props.endIcon && <IconWrapper>{props.endIcon}</IconWrapper>}
    </Button>
  );

export default ButtonComponent;
