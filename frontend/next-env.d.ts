/// <reference types="next" />
/// <reference types="next/types/global" />

declare module 'styled-components';

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.svg';
