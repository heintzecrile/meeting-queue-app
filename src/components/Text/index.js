/**
 *
 * Text
 *
 */

import styled from "styled-components";
import PropTypes from "prop-types";
import { textColor } from "./theme";
import typography, { fontSize } from "./typography";

export const defaultProps = {
  color: textColor.primary,
  display: "block",
  fontFamily: "Lato",
  fontSize: "main",
  letterSpacing: typography.letterSpacing,
  lineHeight: typography.lineHeight,
  fontStyle: "normal",
};

const Text = styled.span`
  color: ${(props) => props.color};
  display: ${(props) => props.display};
  font-size: ${(props) =>
    props.customSize ? `${props.customSize}px` : `${fontSize[props.fontSize]}`};
  font-style: ${(props) => props.fontStyle};
  letter-spacing: ${(props) => `${props.letterSpacing}px`};
  line-height: ${(props) => props.lineHeight};
  margin: 0;
  text-align: ${(props) => props.textAlign};
  text-decoration: ${(props) => props.textDecoration};
  text-transform: ${(props) => props.textTransform};
  font-weight: ${(props) => props.fontWeight};
  word-break: ${(props) => props.wordBreak};
  cursor: ${(props) => props.cursor};
  pointer-events: ${(props) => props.pointerEvents};
`;

Text.propTypes = {
  color: PropTypes.string,
  customSize: PropTypes.number, // custom size, not recommended to be used for consistency
  display: PropTypes.oneOf(["block", "inline", "inline-block"]),
  fontFamily: PropTypes.oneOf(["bold", "light", "main"]),
  fontSize: PropTypes.oneOf(Object.keys(fontSize)),
  letterSpacing: PropTypes.number,
  lineHeight: PropTypes.number,
  textAlign: PropTypes.oneOf(["left", "center", "right", "justify"]),
  textDecoration: PropTypes.oneOf(["line-through", "overline", "underline"]),
  textTransform: PropTypes.oneOf(["capitalize", "lowercase", "uppercase"]),
  fontWeight: PropTypes.oneOf(["normal", "bold"]),
};

Text.defaultProps = {
  ...defaultProps,
};

export default Text;
