import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'
import React from 'react'
import Header from '../Components/Header'
import mapstyles from '../styles/mapstyles'
import styled from 'styled-components'
import { useState } from 'react'
import house from '../public/assets/house.svg'
import { useCallback } from 'react'
import Card from '../Components/Util/Card'
import Title from '../Components/Util/Title'

const Wrapper = styled.div`
  display: grid;
  max-width: 1300px;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 1rem;
  row-gap: 2rem;
`


const Rentcondo = ({data}) => {
  return (
    <>
      <Header title="Condo/Apart rent" />
      <Title title="Condo/Apart Rent" />
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
}

export async function getStaticProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default Rentcondo;
