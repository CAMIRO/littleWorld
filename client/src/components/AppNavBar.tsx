import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

import { Text } from "../containers/language";

export const AppNavBar: React.FC = () => {


  const isSelected = () => {
    return true
  }

  return (
    <Wrapper>
      <MenuContainer>
        <Logo src="/logo.png" alt="Logo" />
        <nav>
          <ul>
            <MenuItem>
              <li onClick={isSelected}>
                <Link to="/">
                  <Text tid="exploreHeader" />
                </Link>
              </li>
            </MenuItem>
            <MenuItem>
              <li onClick={isSelected}>
                <Link to="/fastFood">Fast Food</Link>
              </li>
            </MenuItem>
            <MenuItem>
              <li onClick={isSelected}>
                <Link to="/contact">Contact</Link>
              </li>
            </MenuItem>
          </ul>
        </nav>
      </MenuContainer>
    </Wrapper>

  )
}
const Wrapper = styled.div`
  width: 96px;
  min-width: 96px;
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
  min-height: 66px;
  position: fixed;
  width: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const MenuItem = styled.div`
  height: 54px;
  width: 100%;
  text-align: center;
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  `