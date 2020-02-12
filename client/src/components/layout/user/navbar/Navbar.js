import React, { Fragment } from 'react'
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import styled from "styled-components";
const NavBarMenu = styled(Menu)`
background:black;
width: 50%;
display: inline-block;
`

const NavbarItem = styled(Menu.Item)`
 display: inline-block;
    a{
    font-size: 16px;
    line-height:5;
    text-transform: uppercase;
    padding: 10px;
    color: white!important;
    }
    a:hover{
    border-bottom: 1px solid white;
}
&.ant-menu-item-selected{
background:black!important;
}
`
const Navbar = () => {
    return (
        <Fragment>
            <NavBarMenu
                theme="dark"
                mode="horizontal"
            >
                <NavbarItem key="1">
                    <Link to="/inventory">
                        Inventory
                    </Link>
                </NavbarItem>
                <NavbarItem key="2">
                    <Link to="/finance">
                        Finances
                    </Link>
                </NavbarItem>
                <NavbarItem key="3">
                    <Link to="/about">
                        About Us
                    </Link>
                </NavbarItem>

            </NavBarMenu>

        </Fragment>
    );
};
export default Navbar;