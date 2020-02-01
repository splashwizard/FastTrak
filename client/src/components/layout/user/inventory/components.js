import React from 'react'
import styled from 'styled-components';
import { Card } from 'antd'



export const VehicleCard = styled(Card)`
box-shadow: 10px 10px 5px 5px grey;
background: #2a2a2a;
color: white;
margin-left: 30%;
height: 300px;
margin-bottom: 5%;
    div.ant-card-head{
        max-height: 30%;
        border:none;
    div.ant-card-head-title{
        text-align: left;
        font-size: 30px;
        font-weight: bold;
        color:#aa1826;
        font-style: oblique;
        font-family: Roboto;
        
     }
    }
    div.ant-card-body{
        padding-top:0;
        height:70%
    }
    

.inner{
    width:80%;
    float:left;
    img{
        float:left;
    }
    .placeholders{
        float:left;
        text-align: right;
        font-size: 20px;
        font-family: Roboto;
        font-weight: 300;
        line-height: 1.7;
        padding-left: 10%;
        span{
            display:block;
        }
    }
    .details{
        float: right;
        color:#aa1826;
        margin-right: 15%;
        text-align: left;
        font-size: 20px;
        font-family: Roboto;
        font-weight: 500;
        line-height: 1.7;   
        span{
            display:block;
        }
    }

}

.outer {
    span {
        display : block;
        color:red;
    }
}

`




export const InventoryContainer = styled.div`
font-family: "Roboto";
background: #f7f7f7;
padding: 50px;
text-align: center;

.inventory {
    height: 1000px;

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

`
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

`

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



