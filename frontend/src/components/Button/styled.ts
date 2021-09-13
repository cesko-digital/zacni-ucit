import styled, { css } from 'styled-components';

const baseStyles = css`
  background: ${({ variant, buttonStyle, color }) => {
    if (color) {
      return color;
    } else if (buttonStyle === 'link') {
      return undefined;
    } else {
      return variant === 'secondary' ? 'white' : '#7f50ff';
    }
  }};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  padding: ${({ buttonStyle }) => (buttonStyle === 'button' ? '12px 32px' : undefined)};
  border: ${({ variant, buttonStyle, color }) => {
    if (buttonStyle === 'link') {
      return undefined;
    } else {
      if (color) {
        return `2px solid ${color}`;
      }
      return variant === 'secondary' ? '2px solid #0C0807' : '2px solid #7f50ff';
    }
  }};
  border-radius: ${({ buttonStyle }) => (buttonStyle === 'button' ? '50px' : undefined)};
  color: ${({ variant, buttonStyle }) => {
    if (buttonStyle === 'link') {
      return 'inherit';
    } else {
      return variant === 'secondary' ? '#0C0807' : 'white';
    }
  }};
  text-decoration: ${({ buttonStyle }) => (buttonStyle === 'link' ? 'underline' : 'none')};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ buttonStyle }) => (buttonStyle === 'button' ? '1rem' : '0.875rem')};
  text-decoration: ${({ buttonStyle }) => (buttonStyle === 'button' ? undefined : 'underline')};
  font-weight: bold;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: pointer;
  text-align: center;

  &:hover,
  &:focus {
    outline: none;
    text-decoration: none;
  }

  svg {
    width: 16px;
    height: 16px;
    fill: ${({ variant, buttonStyle }) => {
      if (buttonStyle === 'link') {
        return '#7F50FF';
      } else {
        return variant === 'secondary' ? '#7F50FF' : 'white';
      }
    }};
  }

  > * {
    pointer-events: none;
  }
`;

export const Link = styled.a`
  ${baseStyles}
`;

export const Button = styled.button`
  ${baseStyles}
`;

export const IconWrapper = styled.span`
  min-width: 8px;
  max-height: 16px;
  display: flex;
  align-items: center;
  flex-shrink: 0;

  &:first-child {
    margin-right: 20px;
  }

  &:last-child {
    margin-left: 20px;
  }
`;

export const Text = styled.span`
  width: 100%;
  display: inline;
  align-items: center;
`;
