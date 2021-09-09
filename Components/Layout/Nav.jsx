import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/assets/Logo.png'

import { NavData } from './Nav.data'
import { color,FontSize } from '../../styles/Staticstyle'
import Button from '../Util/Button'

const NavWrapper = styled.nav`
  max-width: 1300px;
  padding: 3rem 0rem;
  height: 50px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center ;
`
const LogoWrapper = styled(Link)`

`

const NavLinkWrapper = styled.div`
  ul {
    display: flex;
    align-items: center;
    li {
      list-style: none;
      margin-left: 2rem;
      font-size: ${FontSize.NavFont};
      font-weight: bold;
      transition: all 0.3s ease-in-out;
      &:hover{
        color:${color.MainColor}
        
      }
      span{
        font-size: ${FontSize.NavsubFont};
        font-weight: 400;
      }
    }
  }
`;
const LinkWrapper = styled(Link)`
`;

const Nav = () => {
  return (
    <NavWrapper>
      <LogoWrapper href="/">
        <a>
          <Image src={Logo} alt="ON Room Main Rogo" />
        </a>
      </LogoWrapper>
      <NavLinkWrapper>
        <ul>
          {NavData.map((data, index) => {
            const { name, subtitle } = data;
            return (
              <li key={index}>
                <LinkWrapper href={data.Link}>
                  <a>
                    {name} <br /> <span>{subtitle}</span>
                  </a>
                </LinkWrapper>
              </li>
            );
          })}
        </ul>
      </NavLinkWrapper>
      <Button text="Login" />
      <Button text="Register" black />
    </NavWrapper>
  );
}

export default Nav
