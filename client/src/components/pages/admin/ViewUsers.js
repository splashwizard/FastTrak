import React from 'react'

import 'antd/dist/antd.css';

import { Layout } from 'antd';
import SideBar from "../../layout/admin/Sidebar"
import AdminNavbar from '../../layout/admin/AdminNavbar'

import ViewTeam from '../../layout/admin/content/ViewTeam'



const { Content, Footer, Sider } = Layout;





const ViewUsers = () => {


    return (

        <Layout style={{ minHeight: '100vh' }}>
            <SideBar />
            <Layout>
                <AdminNavbar />
                <Content style={{ margin: '20px 16px' }}>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        <ViewTeam />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>




    )
}

export default ViewUsers