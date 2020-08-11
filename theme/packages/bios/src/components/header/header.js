import React from "react";
import { connect, styled } from "frontity";
import { H1, H2 } from "../text/titles";
import Link from "../../services/link";
import Nav from "../menus/top/nav";
import MobileMenu from "../menus/top/menu";
import logo from "../../assets/imgs/"; // with import

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <StyledLink link="/">
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="938.000000pt" height="135.000000pt" viewBox="0 0 938.000000 135.000000"
            preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,135.000000) scale(0.100000,-0.100000)"
              fill="#000000" stroke="none">
            </g>
          </svg>
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