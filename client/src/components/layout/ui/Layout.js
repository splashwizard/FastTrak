import React from 'react'
import styled from 'styled-components';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import { QuickLinks } from '../user/homepage/QuickLinks';
import { Row, Col } from 'antd';

const { Header, Footer } = Layout;

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
export const EmpireHeader = styled(Header)`
background: black;
padding: rem-calc(10 0);
position: relative;
z-index: 5;
-webkit-box-shadow: 0 0 15px 1px hsla(0, 0%, 49.8%, 0.1);
box-shadow: 0 0 15px 1px hsla(0, 0%, 49.8%, 0.1);
height: 105px ;`


export const EmpireFooter = () => {
    return (
        <Footer style={{ background: 'black' }}>

            <Row>
                <Col span={6}><Logo /></Col>
                <Col span={6}><QuickContact /></Col>
                <Col span={6}>col-6</Col>
                <Col span={6}>col-6</Col>
            </Row>
        </Footer>
    )
}




const EmpireContact = styled.div`
color:white;
`







const QuickContact = () => {
    return (
        <EmpireContact>
            hiiii
        </EmpireContact>
    );
};