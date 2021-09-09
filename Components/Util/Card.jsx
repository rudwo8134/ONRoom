import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { FaBed, FaBath } from 'react-icons/fa';
import {AiFillTag} from 'react-icons/ai'
import home from '../../public/assets/main.png'
import { color } from '../../styles/Staticstyle';
import Link  from 'next/link'; 
const CardWrapper = styled.div`
  border: 1px solid #222;
  border-radius: 3px;
  background-color: #f2f2f2;
  width: 20rem;
  padding: 1rem;
  .innerwrapper {
    background-color: #f2f2f2;
    width: 100%;
    height: 100%;
    .Price{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      h1{
        margin-right: 1rem;
      }
    }
    .address{
      font-weight: 400;
      text-transform: capitalize;
    } 
    .tag{
      margin-top: 1rem;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      column-gap: 5px;
      span{
        padding: 0.3rem;
        font-size: 0.7rem;
        border:none;
        outline: none;
        border-radius: 20px;
        text-transform: capitalize;
        background-color: ${color.MainColor};
        color:#222;
        display: flex;
        justify-content: center;
        align-items: center;
        svg{
          margin-right: 3px;
          font-size: 1rem;
        }
      }
    }
    .icon {
      margin-top:1rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      color: #666666;
      .col {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .row {
          display: flex;
          align-items: center;
          justify-content: center;
          span {
            font-size: 2rem;
          }
          svg {
            font-size: 2rem;
            margin-left: 1rem;
          }
        }
      }
    }
  }
`;


const Card = () => {
  return (
    <Link href="/rentcondo/1">
      <a>
        <CardWrapper>
          <div className="innerwrapper">
            <Image src={home} alt="home" />
            <div className="Price">
              <h1>$590</h1>
              <h4>Monthly</h4>
            </div>

            <span className="address">
              unit 3109 19 Western Battery Road, Toronto
            </span>
            <div className="icon">
              <div className="col">
                <div className="row">
                  <span>2</span>
                  <FaBed />
                </div>
                <span>Bedrooms</span>
              </div>
              <div className="col">
                <div className="row">
                  <span>2</span>
                  <FaBath />
                </div>
                <span>bathrooms</span>
              </div>
            </div>
            <div className="tag">
              <span>
                <AiFillTag />
                fancy
              </span>
              <span>
                <AiFillTag />
                fancy
              </span>
              <span>
                <AiFillTag />
                fancy
              </span>
              <span>
                <AiFillTag />
                fancy
              </span>
            </div>
          </div>
        </CardWrapper>
      </a>
    </Link>
  );
}

export default Card
