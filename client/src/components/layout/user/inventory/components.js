import React from 'react'
import styled from 'styled-components';
import { Card } from 'antd'



export const VehicleCard = styled.div`
border-bottom: 1px solid rgba(0,0,0,.1);
margin-left: 0;
height: 250px;
margin-bottom: 5%;
padding-top: 15px;
.product-thumbnail{
        width: 30%;
        float: left;
    }
.product-description{
    width: 45%;
    float: left;
}
.product-price{
    width: 25%;
    float: left;
    text-align:right;
}
.product-price .price{
    padding: 0 .25rem;
    font-size: 1.75rem;
    color: #e23156;
}
`




export const InventoryContainer = styled.div`
font-family: "Roboto";
background: #ffffff;
width: 70%;
margin:auto;
.inventory {
    
    display: flex;
}
h2 {
    &:before {
        content: '';
        display: block;
        width: 10rem;
        border-top: .75rem solid #AA1826;
        margin: 0 auto 2.5rem;
    }
    color:#AA1826;
    font-size: 45px;
    padding: 10px;
    text-transform: uppercase;
    text-transform: uppercase;
    font-size: 24px;
}
`;
const InventorySideBar = styled.div`
    background: black;
    float: left;
    height: 100%;
    width: 25%;
    color: white;
    padding: 5%;
    h1 {
    font-size: 24px;
    text-transform: uppercase;
    margin-bottom: 20px;
}
`;

const ClearFiltersButton = styled.button`
background-color: #aa1826;
/* Green */
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
border-radius: 25px;
`
export const VehicleCardContainer = styled.div`
    display: block;
    height: 200px;
    margin-left: 30%;
    margin-bottom: 30px;
    width: 65%;
    border: 1px solid;
    padding: 10px;
    box-shadow: 5px 5px #c1c1c1;
    background: #2a2a2a;
    img {
        float: left;
        margin-top: 15px;
        margin-left: 25px;
    }
    a {
        text-decoration: none;
        color: black;
        h1 {
        color: #aa1826;
            
            font-size: 20px;
            font-style: oblique;
            font-weight: 600;
            position: relative;
            right: 20%;
        
        }
        span {
            display: block;
        }
    }
    .details {
        color: #aa1826;
        font-weight: bold;
        float: left;
        text-align: left;
        margin-left: 25px;
        line-height: 1.5;
    }
    .price {
        color: #aa1826;
        font-weight: bold;
        float: right;
        text-align: left;
        margin-left: 25px;
        line-height: 1.75;
        margin-right: 5%;
        span {
            font-weight: 100;
            font-style: italic;
            font-weight: 100;
            font-size: 14px;
        color:white;
            
        }
        h1 {
            font-weight: bold;
            font-family: "Roboto";
            margin: 0;
            left: 0%;
        }
        a {
            padding: 10px;
            background: #aa1826;
            color: white;
            border: 1px solid white;
            position: relative;
            top: 20px;
        }
    }
    .placeholders {
        float: left;
        text-align: left;
        margin-left: 25px;
        line-height: 1.5;
        color: white;
    }
`


export const Sidebar = () => {
    return (
        <InventorySideBar >
            <h1>Search Our Inventory</h1>
        </InventorySideBar>
    );
};

export const ClearFilters = () => {
    return (
        <div>
            <ClearFiltersButton >Clear Filters</ClearFiltersButton>
        </div>
    );
};

export const ViewDetails = styled.a`
background: #AA1826;
font-size: 20px;
padding: 10px;
border: 1px solid white;
border-radius: 10px;
color:white;
float:right;
 &:hover{
     color:black
 }
`




