import React from 'react'
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import styled from "styled-components";
const NavBarMenu = styled(Menu)`
background:black;
`

const NavbarItem = styled(Menu.Item)`
 display: inline-block;
    a {
    font-size: 16px;
    line-height:5;
    text-transform: uppercase;
      padding: 10px;
      color: white;
    }
    a:hover{
    border-bottom: 1px solid white;      }

`
const Navbar = () => {
    return (
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
                <Link to="/contact">
                    Contact Us
                </Link>
            </NavbarItem>
            <NavbarItem key="4"
                style={{ paddingLeft: '5%' }}
            >


            </NavbarItem>






        </NavBarMenu>
    );
};
export default Navbar;