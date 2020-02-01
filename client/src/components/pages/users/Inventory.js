import React from 'react'
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Navbar from '../../layout/user/Navbar'
import { EmpireHeader, Logo } from '../../layout/ui/Layout'
import { Inventory } from '../../layout/user/inventory/Inventory'
//declare any constants 
const { Content, Footer } = Layout;


const InventoryPage = () => {

    return (
        <Layout className="layout">
            <EmpireHeader>
                <Logo href='/' />
                <Navbar />
            </EmpireHeader>
            <Content style={{ padding: '0 50px' }}>

                <div style={{ background: '#fff', minHeight: 280 }}>

                    <Inventory />




                </div>

            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )
}

export default InventoryPage



