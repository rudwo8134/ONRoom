import React from 'react'
import styled from 'styled-components'
import { color } from '../../styles/Staticstyle';

const TitleWarpper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  text-align:center;
  padding:1rem 0rem;
`;

const Name = styled.h1`
  font-size: 2rem;
  font-weight:bold;
  color: ${color.BlackBold};
  text-shadow: 0rem 0.2rem 0.15rem ${color.MainColor};
  text-transform: capitalize;
`


const Title = ({title}) => {
  return (
    <TitleWarpper>
      <Name>{title}</Name>
    </TitleWarpper>
  );
}

export default Title
