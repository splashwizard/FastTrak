import React, { Fragment, useState } from 'react'
import { Layout, Menu, Icon } from 'antd';
import styled from 'styled-components';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../../actions/auth'
import { Redirect } from 'react-router-dom'
import { BrowserRouter as Link } from "react-router-dom";




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

const { Sider } = Layout;
const { SubMenu } = Menu;

const logoStyle = {
    height: "32px",
    background: "rgba(255, 255, 255, 0.2)",
    margin: "16px"
}



const Sidebar = ({ auth: { isAuthenticated, loading }, logout }) => {
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
    }
    if (!isAuthenticated) {
        return <Redirect to="/login" />
    }
    return (
        <Fragment>
            <Sider collapsible collapsed={isCollapsed.collapsed} onCollapse={onCollapse}>
                <Logo className="logo" >Welcome</Logo>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        <Icon type="dashboard" />
                        <span >Dashboard</span>
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
                            <Icon type="database" />
                            <span >View Inventory</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="plus" />
                            <span >Add New</span>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                                <Icon type="team" />
                                <span>Team</span>
                            </span>
                        }
                    >
                        <Menu.Item key="4">
                            <Icon type="user" />
                            <span >View Team</span>
                        </Menu.Item>

                        <Menu.Item key="5">
                            <Icon type="plus" />
                            <span >Add Members</span>
                            <Link to="/addusers" />
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="6">
                        <Icon type="inbox" />
                        <span>Applicants</span>
                    </Menu.Item>
                    <Menu.Item key="7">
                        <Icon type="global" />
                        <span>Web Traffic</span>
                    </Menu.Item>
                    <Menu.Item key="8">
                        <Icon type="appstore" />
                        <span>Dealership Info</span>
                    </Menu.Item>
                    <Menu.Item key="9">
                        <Icon type="setting" />
                        <span>Site Settings</span>
                    </Menu.Item>
                    <Menu.Item
                        key="10"
                        onClick={logoutAdmin}
                    >
                        <Icon type="logout" />
                        <span>Logout</span>
                    </Menu.Item>
                </Menu>
            </Sider>
        </Fragment>
    )
}

Sidebar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps, { logout })(Sidebar)