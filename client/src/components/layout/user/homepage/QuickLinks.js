import React from 'react';
import styled from 'styled-components';


export const QuickLinks = (props) => {
    return (
        <div style={{ textAlign: "center", background: "#F1F2F5" }}>
            <Card block={1}>
                <a href="/inventory" >View Inventory</a>
            </Card>
            <Card block={2}>
                <a href="/finance">Apply For Loan</a>
            </Card>
            <Card>
                <a href="/about">Get In Touch</a>
            </Card>
        </div>
    )
}

const Card = styled.div`
display:inline-block;
margin: 50px;
background: #fff;
width: 350px;
height: 350px;
-webkit-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
position: relative;
background-image: ${ props => props.block === 1 ? 'url("/images/block_bg_1.png");' : 'url("/images/block_bg_2.png");'};
background-size: cover;
background-position: 50%;
background-repeat: no-repeat;
&:after {
  display: block;
  content: "";
  background-color: #000;
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  opacity: 0.5;
} 
 > a {
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 375px;
    height: 375px;
    position: relative;
    z-index: 2;
    color: #fff;
    font-weight: 700;
    font-size: rem-calc(22);
}

`