import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  min-height: ${(props) => props.minHeight}px;
  width: ${(props) => props.width || "100%"};
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.textAlign};
  align-self: ${(props) => props.alignSelf};
  position: ${(props) => props.position};
  cursor: ${(props) => props.cursor};
  border: ${(props) => props.help && "1px solid red"};
  margin: auto;
`;

export default FlexBox;
