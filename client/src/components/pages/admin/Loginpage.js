import React from 'react'
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Login from "../../layout/admin/Login"
import { Logo, EmpireHeader, EmpireFooter, NavBarContact } from '../../layout/ui/Layout'
import Navbar from '../../layout/user/navbar/Navbar'

const { Content } = Layout;



const Loginpage = () => {

    return (
        <Layout className="layout">
            <EmpireHeader>
                <Logo href="/" />
                <Navbar />
                <NavBarContact />
            </EmpireHeader>
            <Content >

                <Login />

            </Content>
            <EmpireFooter />
        </Layout>
    )
}

export default Loginpage