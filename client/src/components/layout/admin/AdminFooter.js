import React, { Fragment } from 'react'
import styled from 'styled-components';
import { Layout } from 'antd';


const { Footer } = Layout;

export const Logo = styled.a`
margin: 16px 24px 16px 0;
float: left;
background-image: url("/images/empire-motors-logo.png");
background-repeat: no-repeat;
background-size: cover;
width: 241px;
height: 70px;
margin-right: rem-calc(100);
`


export const AdminFooter = () => {

    return (
        <Footer style={{ background: 'black' }}>
            <Fragment>
                <Logo />

            </Fragment>

        </Footer>
    )
}

