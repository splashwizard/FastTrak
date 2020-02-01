import styled from 'styled-components';
import { Layout } from 'antd';

const { Header } = Layout;

export const Logo = styled.a`
margin: 16px 24px 16px 0;
float: left;
background-image: url("/images/empire-motors-logo.png");
background-repeat: no-repeat;
background-size: cover;
width: 241px;
height: 70px;
margin-right: rem-calc(100);
`
export const EmpireHeader = styled(Header)`
background: black;
padding: rem-calc(10 0);
position: relative;
z-index: 5;
-webkit-box-shadow: 0 0 15px 1px hsla(0, 0%, 49.8%, 0.1);
box-shadow: 0 0 15px 1px hsla(0, 0%, 49.8%, 0.1);
height: 105px ;`
