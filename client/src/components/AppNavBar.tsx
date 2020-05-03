import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import { Text } from "../containers/language";

export const AppNavBar: React.FC = () => {


  const isSelected = () => {
    return true
  }

  return (
    <Wrapper>
      <MenuContainer>

        <Nav fill>
          <Nav.Item>
            <Nav.Link onClick={isSelected}>
              <Link to="/">
                <Logo src="/logo.png" alt="Logo" />
              </Link>
            </Nav.Link>

          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={isSelected}>
              <Link to="/">
                <Text tid="exploreHeader" />
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={isSelected}>
              <Link to="/fastFood">Fast Food</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={isSelected}>
              <Link to="/contact">Contact</Link>
            </Nav.Link>
          </Nav.Item>

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
const Logo = styled.img`
  background: transparent;
  cursor: pointer;
  width: 68px;
  height: 68px;
`
const MenuContainer = styled.div`
  min-height: 70px;
  position: fixed;
  width: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
`
