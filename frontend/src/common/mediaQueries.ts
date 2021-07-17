export const breakpoints = {
  sm: 500,
  md: 800,
  lg: 1200,
};

export const mediaQueries = (key) => {
  return (style) => `@media (max-width: ${breakpoints[key]}px) { ${style} }`;
};
