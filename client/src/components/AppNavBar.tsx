import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";



 export const AppNavBar: React.FC  = () => {


    const isSelected = () => {
    return true
  }

    return (
        <Wrapper>
          <LogoContainer>
            <Logo>logo</Logo> 
          </LogoContainer>
          <MenuContainer>
          <nav>
            <ul>
              <MenuItem>   
                <li onClick={isSelected}>
                  <Link to="/">Desserts</Link>
                </li>
              </MenuItem>
           <MenuItem>
            <li  onClick={isSelected}>
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
  display: flex;
  flex-direction: column;
  position: relative;
  flex-shrink: 0;
  height: 100vh;
`

const LogoContainer = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  padding: 10px;
  align-items: center;
`

const Logo = styled.a`
  background: #884FFC;
  cursor: pointer;
  padding: 8px;
  width: 38px;
  height: 38px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  svg {
    min-width: 100%;
    min-height: 100%;
  }
`
const MenuContainer = styled.div`
  flex: 1;
  flex-shrink: 1;
  flex-basis: 0px;
  -webkit-box-flex: 1;
  overflow: auto;
  min-height: 66px;
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