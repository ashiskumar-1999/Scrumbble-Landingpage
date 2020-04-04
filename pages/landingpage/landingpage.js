import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import styled, { keyframes } from "styled-components";
import CustomButton from "../../components/CustomButton/CustomButton";
import Footer from "../../components/Footer/Footer";

const IllustrationImg = styled.img`
  position: absolute;
  width: 1170px;
  height: 850px;
  left: 520px;
  top: 38px;
`;

const Titlename = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Roboto:wght@100&display=swap");

  position: absolute;
  width: 644px;
  height: 225px;
  left: 65px;
  top: 120px;

  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 73px;
  text-transform: capitalize;

  color: #060e5b;
`;
const SubTitleName = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Roboto:wght@100&display=swap");
  position: absolute;
  width: 556px;
  height: 35px;
  left: 65px;
  top: 312px;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 35px;

  color: #3e3a3a;
`;
const Introduction = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Roboto:wght@100&display=swap");
  position: absolute;
  width: 422px;
  height: 47px;
  left: calc(50% - 422px / 2);
  top: 878px;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 47px;
  text-align: center;
  color: #000000;
`;

const Description = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Roboto:wght@100&display=swap");
  position: absolute;
  width: 592px;
  height: 140px;
  left: 540px;
  top: 970px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 35px;
  text-align: center;
  color: #403d3d;
`;

const fadeinup = keyframes`
  from {
        transform: translate3d(0,40px,0)
    }

    to {
        transform: translate3d(0,0,0);
        opacity: 1
    }
`;

const FadeInUp = styled.div`
  opacity: 0;
  animation: ${fadeinup} 1s;
`;

function LandingPage(props) {
  return (
    <>
      <NavBar />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1700"
        height="700"
        fill="none"
        viewBox="0 0 1440 510"
      >
        <path
          fill="#7CB8EF"
          d="M462 101.596c-196.8-184-403.333-76.667-482 0l-236 528h1732L1493 230c-13.33 13.333-68 95.6-196 238-160 178-481-36.404-483-42.404s-106-94-352-324z"
        ></path>
      </svg>
      <IllustrationImg src="https://res.cloudinary.com/emishalabs/image/upload/v1585828216/illustration_ooent4.png"></IllustrationImg>
      <CustomButton />
      <Titlename>
        <div>
          <h1>Your Portfolio needs Superpower.</h1>
        </div>
      </Titlename>
      <SubTitleName>
        <div>
          <h1>And we are here to help you do just that...</h1>
        </div>
      </SubTitleName>
      <Introduction>
        <div>Why Scrumbble?</div>
      </Introduction>
      <Description>
        It gives you a powerful way to showcase your projects, skills,
        achievements, and makes it easy for you to share your portfolio with a
        built in QR Code.
      </Description>
      <Footer />
    </>
  );
}

export default LandingPage;
