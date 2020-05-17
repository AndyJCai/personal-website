import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";


import {
    Instagram,
    LinkedIn,
    GitHub,
    MailOutlineRounded
} from "@material-ui/icons";

import mainpic from "../assets/main1.jpeg";

const ProfFrame = keyframes`
from {
  width: 0px;
  height: 0px;
  border: none;
}
to {
}
`;

const Otherframe = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}`;

const CoverWrapper = styled("div")`
  background: linear-gradient(200deg, #1d2b64, #f8cdda);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
`;

const ProfPic = styled("div")`
  border-radius: 50%;
  border: white 7px solid;
  background-image: url(${mainpic});
  background-size: 150%;
  background-position-x: center;
  background-position-y: 18%;
  width: 300px;
  height: 300px;
  animation: ${ProfFrame} 0.7s 0.5s both;
  @media only screen and (max-width: 500px) {
    width: 260px;
    height: 260px;
  }
  @media only screen and (max-height: 730px) {
    width: 260px;
    height: 260px;
  }
  @media only screen and (max-width: 400px) {
    width: 230px;
    height: 230px;
  }
`;

const Title = styled("div")`
  color: white;
  font-weight: 300;
  font-size: 70px;
  letter-spacing: 0.07em;
  margin-top: 10px;
  animation: ${Otherframe} 0.8s 1.2s both;
  @media only screen and (max-width: 500px) {
    font-size: 60px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 50px;
  }
  @media only screen and (max-height: 600px) {
    margin-top: 4px;
  }
`;

const Desc = styled("div")`
  color: white;
  margin-top: 10px;
  font-size: 20px;
  margin-bottom: 8px;
  animation: ${Otherframe} 0.8s 1.2s both;
`;

const PicWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 120px;
  @media only screen and (max-width: 500px) {
    margin-bottom: 50px;
  }
  @media only screen and (max-height: 730px) {
    margin-bottom: 50px;
  }
  @media only screen and (max-height: 600px) {
    margin-bottom: 30px;
  }
`;

const ConCollection = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${Otherframe} 0.8s 1.2s both;
`;

const Contact = styled("a")`
  color: white;
  margin-left: 8px;
  margin-right: 8px;
  padding: 6px;
  & > * {
    width: 30px;
    height: 30px;
    transition: 0.13s;
  }
  &:hover {
    & > * {
      transform: scale(1.3);
    }
  }
`;

export default class Cover extends React.Component {
  render() {
    return (
      <>
        <CoverWrapper>
          <Train />
          <PicWrapper>
            <ProfPic />
            <Title>andy cai</Title>
            <Desc>i like peanut butter and trains</Desc>
            <ConCollection>
              <Contact
                target="_blank"
                href="https://www.linkedin.com/in/andycai0212/"
              >
                <LinkedIn />
              </Contact>
              <Contact target="_blank" href="https://github.com/andyjcai/">
                <GitHub />
              </Contact>
              <Contact
                target="_blank"
                href="https://www.instagram.com/notandycai/"
              >
                <Instagram />
              </Contact>
              <Contact target="_blank" href="mailto:andycai20000212@gmail.com">
                <MailOutlineRounded />
              </Contact>
            </ConCollection>
          </PicWrapper>
        </CoverWrapper>
      </>
    );
  }
}