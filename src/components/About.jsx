import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import logo from '../assets/angryCat.png';
import { almaColors } from '../styles/SharedStyles';

export const About = () => {
  const [text, setText] = useState('');
  const words = ['Software Engineer', 'Programmer', 'Fullstack Developer', 'Coder'];
  let wordIndex = 0;
  let letterIndex = 0;
  
  useEffect(() => {
    const type = () => {
      let newWord = '';
      let i = 0;
      const intervalId = setInterval(() => {
        if (i < words[wordIndex].length) {
          newWord += words[wordIndex][i];
          setText(newWord);
          i++;
        } else {
          clearInterval(intervalId);
          wordIndex = (wordIndex + 1) % words.length; // Move to the next word
          // if (wordIndex !== 0) { // If it's not the first word, start typing it after a delay
            setTimeout(type, 2000);
          // }
        }
      }, 100);
    };

    const erase = () => {
      let i = text.length;
      const intervalId = setInterval(() => {
        if (i > 0) {
          setText(text.slice(0, i-1));
          i--;
        } else {
          clearInterval(intervalId);
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(type, 2000);
        }
      }, 100);
    };
    // const erase = () => {
    //   if (letterIndex > 0) {
    //     setText((prevText) => prevText.slice(0, prevText.length - 1));
    //     letterIndex--;
    //     setTimeout(erase, 100);
    //   } else {
    //     wordIndex = (wordIndex + 1) % words.length;//wordIndex < words.length - 1 ? wordIndex + 1 : 0;
    //     letterIndex = 0; // Reset letterIndex after each word
    //     setTimeout(type, 1000);
    //   }
    // };

    type();
  }, []);

  return (
    <StyledAboutContainerDiv>
      <StyledAboutBoxDiv>
        <StyledAppLogoImg src={logo} alt="logo" />
      </StyledAboutBoxDiv>
      <StyledAboutBoxDiv>
        I'm
        <StyledBoxDiv>
          Alma Härlin
        </StyledBoxDiv>
        {text} @IKEA
      </StyledAboutBoxDiv>
    </StyledAboutContainerDiv>
  )
}
const StyledAboutContainerDiv = styled.div`
  padding: 10em 0em; 
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`
const StyledAboutBoxDiv = styled.div`
  text-align: left;
  margin: 2em 3em; 
`
// TODO: ON HOVER DOES NOT WORK HERE
const StyledAppLogoImg = styled.img`
  height: 40vmin;
  pointer-events: none;
  border: ${almaColors.black} solid 2px;
  border-radius: 0.5em;
  box-shadow: -25px 25px rgba(0, 0, 0, 0.2), -25px 25px rgba(0, 0, 0, 0.19);
  &:hover{
    box-shadow: none;
    margin: 1.5em 1.5em 2em 2em;
  }
`

const StyledBoxDiv = styled.div`
  text-shadow:  2px 2px 5px ${almaColors.grey500};
  transition: 1s;
  &:hover{
    text-shadow: 2px 2px 5px ${almaColors.black};
  }
`