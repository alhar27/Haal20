import styled from '@emotion/styled'
import React from 'react'
import { BsArrowUp } from 'react-icons/bs'
import { almaColors, StyledAppLink } from '../styles/SharedStyles'
import { Contact } from './shared/Contact'

export const Footer = () => {
  return (
    <StyledFooterContainerDiv>
      <div>
        <Contact /> || <StyledAppLink href="#">
        <BsArrowUp/>
        </StyledAppLink>
      </div>
      <StyleFlippDiv>
        (╯°□°）╯︵ ┻━┻
      </StyleFlippDiv>
      <div>
        Made with ❤️ in SWE © 2023
      </div>
    </StyledFooterContainerDiv>
  )
}
const StyledFooterContainerDiv = styled.div`
  border-top: #000000 1px solid;
  background-color: ${almaColors.grey100};
  width: 100%;
  padding: 1em 0em 0.5em 0em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  position : fixed;
  bottom : 0;
`
const StyleFlippDiv= styled.div`
  text-shadow:  2px 2px 5px ${almaColors.grey500};
  margin: 0.5em 1em;
  transition: 1s;
  &:hover{
    text-shadow: 2px 2px 5px ${almaColors.black};
    transform: scale(1.5);
  }
`