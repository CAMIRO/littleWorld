import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { Text } from "../containers/language";

export const AppNavBar: React.FC = () => {

  return (
    <Wrapper>
      <MenuContainer>

        <Nav>
          <UL>
            <LI>
              <Link to="/">
                <Logo src="/logo.png" alt="Logo" />
              </Link>
            </LI>
            <LI>
              <Link to="/">
                <Text tid="exploreHeader" />
              </Link>
            </LI>
            <LI>
              <Link to="/fastFood">Fast Food</Link>
            </LI>
            <LI>
              <Link to="/contact">Contact</Link>
            </LI>
          </UL>
        </Nav>
      </MenuContainer>
    </Wrapper>

  )
}
const Wrapper = styled.div`
  width: 96px;
  min-width: 98px;
  z-index: 102;
  box-shadow: inset -7px 0px 22px -7px rgba(0, 0, 0, 0.18);
  border-right: 1px solid #e4e4e4;
`
const MenuContainer = styled.div`
  min-height: 70px;
  position: fixed;
  width: inherit;
  flex-direction: column;
  align-items: center;
`
const Logo = styled.img`
  background: transparent;
  cursor: pointer;
  width: 68px;
  height: 68px;
`

const Nav = styled.nav`
li:hover {
    color: #7c8593;
    border-left: 2px solid #884ffc;
    box-shadow: inset 0px 0px 3px rgba(0, 0, 0, 0.1);
    a {
      color: #7c8593;
      text-decoration: none;
    }
  }
`
const UL = styled.ul`
`

const LI = styled.li`
 display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    font-size: 13px;
    cursor: pointer;
a {
      color: #7c8593;
      text-decoration: none;
    }

`

// TODO: maybe y should do something like this
const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`