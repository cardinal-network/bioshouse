import React from "react";
import { connect, styled } from "frontity";
import { H1, H2 } from "../text/titles";
import Link from "../../services/link";
import Nav from "../menus/top/nav";
import MobileMenu from "../menus/top/menu";
import logo from "../../assets/imgs/bios-logo.png"; // with import

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <StyledLink link="/">
          <img src={logo} alt="Bios House logo" title="Bios House logo"></img>
        </StyledLink>
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