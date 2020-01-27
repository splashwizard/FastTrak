import React, { Fragment } from 'react'
import { Layout, Menu, Icon } from 'antd';
import styled from 'styled-components'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const AdminHeader = styled(Header)`
padding: 0,;
height: 68px !important;
background:rgba#001529 !important;
`


const MenuItem = styled(Menu.Item)`
float:right;
margin-right:10%;
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