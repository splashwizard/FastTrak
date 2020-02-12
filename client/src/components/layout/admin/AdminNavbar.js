import React, { Fragment } from 'react'
import { Layout } from 'antd';
import styled from 'styled-components'

const { Header, } = Layout;

const AdminHeader = styled(Header)`
padding: 0,;
height: 68px !important;
background:rgba#001529 !important;
`



const AdminNavbar = () => {
    return (
        <Fragment>
            <AdminHeader className="header" >
            </AdminHeader>
        </Fragment >
    )
}

export default AdminNavbar;