import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/assets/Logo.png'

const NavWrapper = styled.nav`
  max-width: 1300px;
  height: 50px;
  margin: 0 auto;
  background-color: black;
`
const LogoWrapper = styled(Link)`

`

const Nav = () => {
  return (
    <NavWrapper>
      <LogoWrapper href="/">
        <a>
          <Image src={Logo} alt="ON Room Main Rogo" />
        </a>
      </LogoWrapper>
    </NavWrapper>
  );
}

export default Nav
