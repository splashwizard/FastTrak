import React from 'react'
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import styled from "styled-components";
import Navbar from '../../layout/user/navbar/Navbar'
import Register from "../../layout/admin/Register"
import { Banner } from '../../layout/user/homepage/Banner'
import { QuickLinks } from '../../layout/user/homepage/QuickLinks'
import { About } from '../../layout/user/homepage/About'
import { Logo, EmpireHeader, EmpireFooter } from '../../layout/ui/Layout'
import Map from '../../layout/ui/Map'
const { Header, Content, Footer } = Layout;




const Homepage = () => {

    return (
        <Layout className="layout">
            <EmpireHeader>
                <Logo href="#" />
                <Navbar />
            </EmpireHeader>
            <Content >

                <Banner />
                <QuickLinks />
                <About />

                <Map />


            </Content>
            <EmpireFooter />
        </Layout>
    )
}

export default Homepage