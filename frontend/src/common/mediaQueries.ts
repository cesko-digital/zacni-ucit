export const breakpoints = {
  sm: 500,
  md: 900,
  lg: 1200,
};

export const mediaQueries = key => style =>
  `@media (max-width: ${breakpoints[key]}px) { ${style} }`;

export const mediaQueriesUp = key => style =>
  `@media (min-width: ${breakpoints[key]}px) { ${style} }`;
