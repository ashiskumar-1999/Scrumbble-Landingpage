import React from "react";
import styled, { css } from "styled-components";

// const styles = {
//   fontFamily: "sans-serif",
//   textAlign: "center",
//   padding: 10
// };

// const StyledButton = styled(Button)`
//   &.ant-btn:hover {
//     color: #000000;
//     background: #2948af;
//   }
//   &.ant-btn-clicked:after {
//     color: #000000;
//     position: absolute;
//     border-radius: inherit;
//     border: 8 solid #2948af;
//     opacity: 0.4;
//     -webkit-animation: buttonEffect 0.4s;
//     animation: buttonEffect 0.4s;
//     display: block;
//     background-color: 2948af;
//   }
// `;

/*
const InstructionBoxStyles = css`
  background-color: #4285f4;
`;

const DangerBoxStyles = css`
  background: red;
`;

const normalBoxStyles = css`
  background-color: green;
`;

const getStylesForBox = ({ isInstructionBox, DangerBox }) => {
  if (isInstructionBox) {
    return InstructionBoxStyles;
  } else if (DangerBox) {
    return DangerBoxStyles;
  } else {
    return normalBoxStyles;
  }
}; */

const Box1 = styled.div`
  position: absolute;
  width: 620px;
  height: 149px;
  left: 369px;
  top: 581px;
  background: #ffffff;
  border: 4px solid #5f5fff;
  box-sizing: border-box;
  border-radius: 8px;
  z-index: 1;
`;

const Box2 = styled.div`
  position: absolute;
  width: 618px;
  height: 149px;
  left: 352px;
  top: 600px;
  background: rgba(47, 128, 237, 0.4);
  border: 4px solid #5f5fff;
  box-sizing: border-box;
  border-radius: 8px;
  z-index: 0;
`;

/* The trick here is to use z-index property. Refer: https://www.freecodecamp.org/news/z-index-explained-how-to-stack-elements-using-css-7c5aa0f179b3/ */

function Box() {
  return (
    <>
      <Box1></Box1>
      <Box2></Box2>
    </>
  );
}

export default Box;
