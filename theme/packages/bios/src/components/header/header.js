import React from "react";
import { connect, styled } from "frontity";
import { H1, H2 } from "../text/titles";
import Link from "./link";
import Nav from "../menus/top/nav";
import MobileMenu from "../menus/top/menu";

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

const Container = styled.div`
  width: 90%;
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
