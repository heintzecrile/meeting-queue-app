/**
 *
 * Text
 *
 */
import PropTypes from "prop-types";
import UnstyledButton from "@material-ui/core/Button";
import FlexBox from "components/FlexBox";

const primary = {
  marginRight: "1em",
  background: "transparent",
  color: "#fff",
  border: "2px solid #393A6D",
  padding: "7px 14px",
  transition: "background 500ms ease-in-out",
  "&:hover": {
    backgroundColor: "#393A6D",
  },
  "&:selected": {
    backgroundColor: "#393A6D",
  },
  selected: {},
  disabled: {},
};

const Button = ({
  disabled,
  children,
  minWidth,
  minHeight,
  onClick,
  loading,
  startIcon,
  endIcon,
  selected,
  border,
}) => {
  return (
    <FlexBox>
      <UnstyledButton
        onClick={onClick}
        disabled={disabled || loading}
        style={{
          fontFamily: "Lato",
          textTransform: "none",
          ...primary,
          opacity: (disabled || loading) && 0.5,
          minWidth: minWidth || 200,
          minHeight: minHeight || 48,
          backgroundColor: selected && "#393A6D",
          border: border,
        }}
        variant="outlined"
        startIcon={startIcon}
        endIcon={endIcon}
      >
        {children}
      </UnstyledButton>
    </FlexBox>
  );
};
Button.propTypes = {
  color: PropTypes.string,
  display: PropTypes.oneOf(["block", "inline", "inline-block"]),
  textAlign: PropTypes.oneOf(["left", "center", "right", "justify"]),
};
export default Button;
