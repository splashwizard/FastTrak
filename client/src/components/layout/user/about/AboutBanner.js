import React from 'react';
import styled from 'styled-components';



export const AboutBanner = () => {
    return (
        <Banner >
            <div >

                <h2>We know cars so lets talk!</h2>

            </div>
        </Banner>
    )
}

const Banner = styled.div`
background: #000;
margin-bottom: 2rem;
min-height: 700px;
background-image: url("/images/banner.png");
background-position: 50%;
background-repeat: no-repeat;
position: relative;

&:before {
  content: "";
  display: block;
  background: #000;
  opacity: 0.5;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
}

h2 {
    font-size:3rem;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-top: 30%;
  font-weight: 900;
}
`