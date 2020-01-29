import React from 'react'
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import styled from "styled-components";
import Navbar from '../../layout/user/Navbar'
import Register from "../../layout/admin/Register"
import { Banner } from '../../layout/user/homepage/Banner'

const { Header, Content, Footer } = Layout;

const Logo = styled.div`
margin: 16px 24px 16px 0;
float: left;
background-image: url("/images/empire-motors-logo.png");
background-repeat: no-repeat;
background-size: cover;
width: 241px;
height: 70px;
margin-right: rem-calc(100);
`

const EmpireHeader = styled(Header)`
background: black;
padding: rem-calc(10 0);
position: relative;
z-index: 5;
-webkit-box-shadow: 0 0 15px 1px hsla(0, 0%, 49.8%, 0.1);
box-shadow: 0 0 15px 1px hsla(0, 0%, 49.8%, 0.1);
height: 105px ;`


const Homepage = () => {

    return (
        <Layout className="layout">
            <EmpireHeader>
                <Logo href="#" />
                <Navbar />
            </EmpireHeader>
            <Content >

                <Banner />

            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )
}

export default Homepage