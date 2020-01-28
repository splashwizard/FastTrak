import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'antd/dist/antd.css';
import styled from "styled-components";
import { Layout } from 'antd';
import SideBar from "../../layout/admin/Sidebar"
import AdminNavbar from '../../layout/admin/AdminNavbar'
import Adduser from '../../layout/admin/Register'
import ViewTeam from '../../layout/admin/content/ViewTeam'



const { Header, Content, Footer, Sider } = Layout;





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