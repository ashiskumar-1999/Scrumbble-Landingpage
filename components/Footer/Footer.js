import React from "react";
import styled from "styled-components";
const Footerstyle = styled.div`
  position: absolute;
  width: 640.44px;
  height: 216px;
  left: 900px;
  top: 2084px;
`;

function Footer() {
  return (
    <>
      <Footerstyle>
        <div>
          <img src="https://res.cloudinary.com/emishalabs/image/upload/v1585986520/footer_svg_je5sf6.png"></img>
        </div>
      </Footerstyle>
    </>
  );
}

export default Footer;
