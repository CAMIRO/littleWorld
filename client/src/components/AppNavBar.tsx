import React, { Fragment } from 'react'
import styled from 'styled-components'

 export const AppNavBar: React.FC = () => {
    return (
        <Wrapper>
            <LogoContainer>
               logo 
            </LogoContainer>

        </Wrapper>
       
    )
}
const Wrapper = styled.div`
  width: 66px;
  min-width: 66px;
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