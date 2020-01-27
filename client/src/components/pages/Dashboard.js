import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'antd/dist/antd.css';
import styled from "styled-components";
import { Layout } from 'antd';
import SideBar from "../layout/admin/Sidebar"
import AdminNavbar from '../layout/admin/AdminNavbar'
import AddUser from './AddUser'


const { Header, Content, Footer, Sider } = Layout;





const Dashboard = () => {


    return (
        <Router>
            <Layout style={{ minHeight: '100vh' }}>
                <SideBar />
                <Layout>
                    <AdminNavbar />
                    <Content style={{ margin: '20px 16px' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            dashboard

                        <Route exact path="/" component={Dashboard} />
                            <Route path="/addusers" component={AddUser} />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        </Router>





    )
}

export default Dashboard