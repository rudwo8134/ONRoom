import React from 'react'
import styled from 'styled-components'
import { FontSize, color } from '../../styles/Staticstyle'

const ButtonWrapper = styled.div`
  font-weight: bold;
  border: none;
  padding: ${({big}) => (big ? '1rem 3rem' : '0.5rem 1.5rem')};
  text-transform: capitalize;
  border-radius: 30px;
  font-size: ${({big}) => (big ? '1.4rem' : `${FontSize.ButtonFont}`)};
  background-color: ${color.MainColor};
  color:${({black})=> black ? "#222": "#fff"};
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: transparent;
    border: 1px solid ${color.MainColor};
    color: ${({black})=> black ? `${color.MainColor}` :`${color.BlackBold}`};
  }
`;

const Button = ({text, big, black}) => {
  return (
    <ButtonWrapper big={big ? big : undefined} black={black}>
      {text}
    </ButtonWrapper>
  )
}

export default Button
