
import React from 'react';
import Header from '../../Components/Header';
import mapstyles from '../../styles/mapstyles';
import styled from 'styled-components';
import { useState } from 'react';
import house from '../../public/assets/house.svg';
import { useCallback } from 'react';
import Card from '../../Components/Util/Card';
import Title from '../../Components/Util/Title';
import Link from 'next/link';

const Wrapper = styled.div`
  display: grid;
  max-width: 1300px;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 1rem;
  row-gap: 2rem;
`;
const CreateButtoncontainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  padding: 2rem 0;
`
const CreateButton = styled(Link)`

`
const Contents = styled.a`
  font-size: 1.3rem;
  background-color: #ffa80b;
  font-weight: bold;
  border-radius: 30px;
  padding: 1rem 2rem;
`;

const Rentcondo = () => {
  return (
    <>
      <Header title="Condo/Apart rent" />
      <Title title="Condo/Apart Rent" />
      <CreateButtoncontainer>
        <CreateButton href="/rentcondo/post" passHref>
          <Contents > Create Post</Contents>
        </CreateButton>
      </CreateButtoncontainer>

      <Wrapper>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Wrapper>
    </>
  );
};



export default Rentcondo;
