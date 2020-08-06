import React from "react";
import { connect, styled } from "frontity";
import { H1, H2 } from "./text/titles";
import Container from "../assets/styles/general";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <StyledLink link="/">
          <H1>{state.frontity.title}</H1>
        </StyledLink>
        <H2>{state.frontity.description}</H2>
        <MobileMenu />
      </Container>
      <Nav />
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const StyledLink = styled(Link)`
  text-decoration: none;
`;
