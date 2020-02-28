import React from 'react'
import 'antd/dist/antd.css';
import { Spin, Layout } from 'antd';
import Navbar from '../../layout/user/navbar/Navbar'
import { EmpireHeader, Logo, EmpireFooter, NavBarContact } from '../../layout/ui/Layout'
import { Vehicle } from '../../layout/user/vehicle/Vehicle'
import { connect } from "react-redux";

//declare any constants 
const { Content } = Layout;

const ViewVehicle = ({ userVehicles: { loading } }) => {
    return (
        <Spin spinning={loading} size="large" style={{ position: "fixed", top: '30%' }}>
            <Layout className="layout">
                <EmpireHeader>
                    <Logo href='/' />
                    <Navbar />
                    <NavBarContact />

                </EmpireHeader>
                <Content>
                    <div style={{ background: '#ffffff', minHeight: 280, paddingBottom: 20 }}>
                        <Vehicle />
                    </div>
                </Content>
                <EmpireFooter />
            </Layout>
        </Spin>
    )
};

const mapStateToProps = state => ({
    userVehicles: state.userVehicles
});
export default connect(mapStateToProps, {})(ViewVehicle)
