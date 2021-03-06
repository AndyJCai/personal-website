import React from "react";
import styled from "styled-components";
import * as Scroll from "react-scroll";

const NavWrapper = styled("div")<{scroll: boolean}>`
  color: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-top: 13px;
  padding-bottom: 13px;
  transition: 0.3s;
  background: ${(props) =>
    props.scroll ? "#FFFFFF" : "rgba(255, 255, 255, 0)"};
  z-index: 999;
  box-shadow: ${(props) =>
      props.scroll ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0)"}
    0px 3px 8px;
  @media only screen and (max-width: 500px) {
    justify-content: center;
  }
  @media only screen and (max-width: 400px) {
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

const NavItems = styled("div")<{scroll: boolean}>`
  display: flex;
  align-items: center;
  margin-right: 20px;
  @media only screen and (max-width: 500px) {
    margin: 0;
  }
  z-index: inherit;
  & > * {
    color: ${(props) => (props.scroll ? "rgb(99, 99, 99)" : "white")};
    position: relative;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 3;
      height: 3px;
      margin-bottom: -3px;
      background: ${(props) =>
        props.scroll
          ? "linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)"
          : "white"};
      opacity: 0;
      transition: 0.2s;
    }
    &:hover {
      &::before {
        opacity: 1;
      }
    }
  }
`;

const ScrollLink = styled(Scroll.Link)`
  transition: 0s;
  margin-left: 12px;
  margin-right: 12px;
  padding: 10px 5px;
  font-size: 14px;
  @media only screen and (max-width: 500px) {
    margin-left: 8px;
    margin-right: 8px;
  }
  @media only screen and (max-width: 400px) {
    margin-left: 4px;
    margin-right: 4px;
  }
  &:hover {
    cursor: pointer;
  }
`;

const ExtLink = styled("a")<{scroll: boolean}>`
  ${(props) => (props.scroll ? "background-clip: text" : "")};
  ${(props) => (props.scroll ? "-webkit-background-clip: text" : "")};
  text-decoration: none;
  transition: 0.2s;
  margin-left: 12px;
  margin-right: 12px;
  padding: 10px 3px;
  font-size: 14px;
  @media only screen and (max-width: 500px) {
    margin-left: 8px;
    margin-right: 8px;
  }
  @media only screen and (max-width: 400px) {
    margin-left: 4px;
    margin-right: 4px;
  }
  &:hover {
    cursor: pointer;
  }
`;

interface NavProps {
  scrolled: boolean;
}

export default class Navbar extends React.Component<NavProps> {
  render() {
    return (
      <>
        <NavWrapper scroll={this.props.scrolled}>
          <NavItems scroll={this.props.scrolled}>
            <ScrollLink to="exp" smooth={true} duration={500}>
              experience
            </ScrollLink>
            <ScrollLink to="proj" smooth={true} duration={500}>
              projects
            </ScrollLink>
            <ExtLink
              scroll={this.props.scrolled}
              target="_blank"
              href="./AndyCaiResume.pdf"
            >
              resume
            </ExtLink>
          </NavItems>
        </NavWrapper>
      </>
    );
  }
}