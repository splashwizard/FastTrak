import React, { Fragment, useState } from 'react'
import { Layout, Menu, Icon } from 'antd';
import styled from 'styled-components';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../../actions/auth'
import { Redirect } from 'react-router-dom'
import { Link } from "react-router-dom";
const { Sider } = Layout;
const { SubMenu } = Menu;



const Logo = styled.div`
text-align: center;
height: 32px;
/* background: rgba(255, 255, 255, 0.2); */
margin: 16px;
font-size: 26px;
color: white;
text-transform: uppercase;
font-family: inherit;
`
const SideBar = styled(Sider)`
background:black;
ul{
    background:black !important;
}
div{
    background:black !important;
}
`


const Sidebar = ({ auth: { isAuthenticated, loading }, logout, activeLink }) => {
    const [isCollapsed, setCollapse] = useState({
        collapsed: false,

    });


    const onCollapse = collapsed => {
        if (isCollapsed.collapsed === false) {
            setCollapse({
                collapsed: true
            })
        } else {
            setCollapse({
                collapsed: false
            })
        }

    };

    //logout

    const logoutAdmin = () => {
        logout();
        //Redirect if logged out 
        return <Redirect to='/login' />
    }


    return (
        <Fragment>
            <SideBar collapsible collapsed={isCollapsed.collapsed} onCollapse={onCollapse} style={{ background: 'black' }}>
                <Logo className="logo" >Welcome</Logo>
                <Menu theme="dark" defaultSelectedKeys={[activeLink.toString()]} mode="inline">

                    <Menu.Item key="1">
                        <Link to="/dashboard">
                            <Icon type="dashboard" />
                            <span >Dashboard</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <Icon type="car" />
                                <span>Inventory</span>
                            </span>
                        }
                    >
                        <Menu.Item key="2">
                            <Link to="/dashboard/addvehicle">
                                <Icon type="plus" />
                                <span >Add Vehicle</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3" >
                            <Link to='/dashboard/getvehicles' >
                                <Icon type="bulb" />
                                <span >Current</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="4" >
                            <Link to='/dashboard/getvehicles' >
                                <Icon type="fire" />
                                <span >Sold</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="5" >
                            <Link to='/dashboard/getvehicles' >
                                <Icon type="alert" />
                                <span >Incoming</span>
                            </Link>
                        </Menu.Item>


                    </SubMenu>





                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                                <Icon type="dollar" />
                                <span>Finances</span>
                            </span>
                        }
                    >
                        <Menu.Item key="6">
                            <Link to="/dashboard/addvehicle">
                                <Icon type="plus" />
                                <span >Add Finance</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="7" >
                            <Link to='/dashboard/getvehicles' >
                                <Icon type="file-add" />
                                <span >Bill Of Sales</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="8" >
                            <Link to='/dashboard/getvehicles' >
                                <Icon type="environment" />
                                <span >Office</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="9" >
                            <Link to='/dashboard/getvehicles' >
                                <Icon type="tool" />
                                <span >Repair</span>
                            </Link>
                        </Menu.Item>


                    </SubMenu>

                    <Menu.Item key="10">
                        <Icon type="inbox" />
                        <span>Applicants</span>
                    </Menu.Item>
                    <Menu.Item key="11">
                        <Link to="/dashboard/addvehicle">
                            <Icon type="stock" />
                            <span >Metrics</span>
                        </Link>
                    </Menu.Item>


                    <SubMenu
                        key="sub3"
                        title={
                            <span>
                                <Icon type="team" />
                                <span>Team</span>
                            </span>
                        }
                    >
                        <Menu.Item key="12">
                            <Link to="/dashboard/viewusers">
                                <Icon type="user" />
                                <span >View Team</span>
                            </Link>
                        </Menu.Item>

                        <Menu.Item key="13">
                            <Link to="/dashboard/addusers">
                                <Icon type="plus" /><span>Add Members</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="14">
                        <Icon type="setting" />
                        <span>Site Settings</span>
                    </Menu.Item>
                    <Menu.Item
                        key="15"
                        onClick={logoutAdmin}
                    >
                        <Link to="/login">
                            <Icon type="logout" /><span>Logout</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </SideBar>
        </Fragment>
    )
}

Sidebar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    activeLink: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,

})
export default connect(mapStateToProps, { logout })(Sidebar)