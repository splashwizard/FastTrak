import React from 'react'
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import styled from "styled-components";
import { Row, Col } from 'antd';
import Login from "../../layout/admin/Login"

const { Content, Footer } = Layout;

// const Logo = styled.div`
// margin: 16px 24px 16px 0;
// float: left;
// background-image: url("/images/empire-motors-logo.png");
// background-repeat: no-repeat;
// background-size: cover;
// width: 241px;
// height: 70px;
// margin-right: rem-calc(100);
// `


const Halfimage = styled.div`
background-image: url("/images/login_image.png");
background-position: 0 50%;
background-size: cover;
background-repeat: no-repeat;
height: 500px;`


const Loginpage = () => {

    return (
        <Layout className="layout">
            <Content style={{ padding: '0 50px' }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                    <Row>
                        <Col span={12}>
                            <div className="contentContainer">
                                <Login />
                            </div>
                        </Col>
                        <Col span={12}>
                            <Halfimage />
                        </Col>
                    </Row>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )
}

export default Loginpage