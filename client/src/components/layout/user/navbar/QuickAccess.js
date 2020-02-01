import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Icon } from 'antd'


export const QuickNav = styled.nav`
border: 1px solid white;
height: 50px;
ul {
  li {
    display: inline-block;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
    font-size: rem-calc(12);

    svg {
      font-size: rem-calc(16);
      margin-right: rem-calc(10);
    }
    span {
      display: inline-block;
    }
    &:nth-child(1) {
      
        background: #aa1826;
        color: #fff;
      
    }
    &:nth-child(2) {
      
        background: #000000;
        color: #fff;
      
    }
  }
}
a {
  color: #333;
  display: inline-block;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: rem-calc(0 20);
}
.search {
  svg {
    margin-right: 0;
  }
}
`


export const QuickAccess = () => {
  return (
    <QuickNav >
      <ul>
        <li>
          <Link href="/contact">

            <span>
              <Icon type="clock-circle" />Get In Touch
                </span>


          </Link>
        </li>
        <li>
          <Link href="/finance">

            <span>
              <Icon type="percentage" /> Finance
                </span>

          </Link>
        </li>
      </ul>
    </QuickNav>
  )
}
