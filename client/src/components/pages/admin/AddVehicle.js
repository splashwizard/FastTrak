import React from 'react'
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import SideBar from "../../layout/admin/Sidebar"
import AdminNavbar from '../../layout/admin/AdminNavbar'
import AddVehicleForm from '../../layout/admin/content/AddVehicle'
import { AdminFooter } from '../../layout/admin/AdminFooter'



const { Content } = Layout;



const activeLink = "2"


const AddVehicle = () => {


    return (

        <Layout style={{ minHeight: '100vh' }}>
            <SideBar activeLink={activeLink} />
            <Layout>
                <AdminNavbar />
                <Content style={{ margin: '20px 16px' }}>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        <AddVehicleForm />
                    </div>
                </Content>
                <AdminFooter />
            </Layout>
        </Layout>




    )
}

export default AddVehicle