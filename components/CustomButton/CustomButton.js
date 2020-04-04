import React from "react";
import styled from "styled-components";
import { Button } from "antd";

const StyledCustomButton = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Roboto:wght@100&display=swap");
  position: absolute;
  width: 420px;
  height: 50px;
  left: 65px;
  top: 450px;
  background: #2947ae;
  box-shadow: 0px 5px 5px rgba(13, 13, 13, 0.25);
  border-radius: 25px;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 29px;
  letter-spacing: 0.02em;
  text-transform: capitalize;

  color: #ffffff;
`;

function CustomButton(props) {
  return (
    <>
      <StyledCustomButton type="primary" shape="round">
        Create Your profile
      </StyledCustomButton>
    </>
  );
}
export default CustomButton;
