import React from 'react'
import { Button } from 'antd'
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import styled from "styled-components";



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
        <Menu
            theme="dark"
            mode="horizontal"
        >
            <NavbarItem key="1">
                <Link to="/inventory">
                    <a>Inventory</a>
                </Link>
            </NavbarItem>
            <NavbarItem key="2">
                <Link to="/finance">
                    <a>Finances</a>
                </Link>
            </NavbarItem>
            <NavbarItem key="3">
                <Link to="/contact">
                    <a>Contact Us</a>
                </Link>
            </NavbarItem>

        </Menu>
    );
};
export default Navbar;