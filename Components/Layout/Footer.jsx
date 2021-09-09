import Link from 'next/link';
import React from 'react'
import styled from 'styled-components'
import { color, FontSize } from '../../styles/Staticstyle';
import { NavData } from './Nav.data';


const FooterWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 5rem 0rem 5rem 0rem;
  .Container {
    width: 100%;
    .copyright{
      margin-top:2rem;
      width: 100%;
      display: flex;
      justify-content: center;
      text-align: center;
    } 
    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2rem 2rem;
      margin: 0 auto;
      .col {
        display: flex;
        flex-direction: column;
        align-items: center;
        h4 {
          font-weight: 500;
          font-size: ${FontSize.FooterFont};
        }
        ul {
          margin: 0;
          padding: 0;
          li {
            margin-top: 0.5rem;
            list-style: none;
            font-size: ${FontSize.FootersubFont};
          }
        }
      }
    }
  }
`;

const data ={
  title: "ON ROOM",
  tel: "647-530-8134",
  email:"rudwo8134@gmail.com",
  Address: "19 Western Battery Road, Toronto, ON",

  cutomerserviceemail: "rudwo8134@gmail.com",
  cutomerservicephone:"647-530-8134"
}

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="Container">
        <div className="row">
          <div className="col">
            <h4>{data.title}</h4>
            <ul className="ListUnstyled">
              <li>{data.tel}</li>
              <li>{data.email}</li>
              <li>{data.Address}</li>
            </ul>
          </div>
          <div className="col">
            <h4>Link</h4>
            <ul className="ListUnstyled">
              {NavData.map((data,index)=>{
                return (
                  <li key={index}>
                    <Link href={data.Link}>
                      <a>{data.name}</a>
                    </Link>
                  </li>
                );
              })}
              </ul>
          </div>
          <div className="col">
            <h4>Custommer Services</h4>
            <ul className="ListUnstyled">
              <li>{data.cutomerserviceemail}</li>
              <li>{data.cutomerservicephone}</li>
            </ul>
          </div>
        </div>
        <span className="copyright">
          Copyright © ONROOM. All Rights Reserved at {new Date().getFullYear()}.
        </span>
      </div>
    </FooterWrapper>
  );
}

export default Footer
