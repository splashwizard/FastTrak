import React from 'react'
import 'antd/dist/antd.css';
import { Spin, Layout } from 'antd';
import Navbar from '../../layout/user/navbar/Navbar'
import { EmpireHeader, Logo } from '../../layout/ui/Layout'
import Inventory from '../../layout/user/inventory/Inventory'
import {connect} from "react-redux";
//declare any constants 
const { Content, Footer } = Layout;

const InventoryPage = ({userVehicles: {loading}}) => {
    return (
        <Spin spinning={loading} size="large" style={{position: "fixed", top:'30%'}}>
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
        </Spin>
    )
};

const mapStateToProps = state => ({
    userVehicles: state.userVehicles
});
export default connect(mapStateToProps, {})(InventoryPage)



