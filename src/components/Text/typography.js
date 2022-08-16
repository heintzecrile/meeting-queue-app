export const fontFamily = {
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
};

export const fontSize = {
  main: "1.4rem",
  xl: "1.875rem",
  lg: "1.5rem",
  md: "1.4rem",
  sm: "1.125rem",
  xs: "1rem",
  xxs: "0.875rem",
  xxxs: "0.75rem",
  xxxxs: "0.72rem",
};

const typography = {
  fontFamily,
  fontSize,
  lineHeight: 1.25,
  letterSpacing: 0.2,
};

export default typography;
