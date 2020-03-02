import styled from 'styled-components';


export const VehicleCard = styled.div`
margin-left: 0;
height: 250px;
margin-bottom: 5%;
padding-top: 15px;
background:#d9d9d966;
padding: 2% 5%;
border: 1px solid white;
border-radius: 15px;
.product-thumbnail{
        width: 30%;
        float: left;
        padding-top:5%;
    }
.product-description{
    width: 45%;
    float: left;
    h4{
        font-size: 20px;
        font-weight: 500;
        text-transform: uppercase;
    }
    p{
        text-transform: uppercase;
        color: black; 
    }
}
.product-price{
    width: 25%;
    float: left;
    text-align:right;
}
.product-price .price{
    padding: 0 .25rem;
    font-size: 1.75rem;
    color:#AA1826;
    letter-spacing:1.5px;
    font-weight:bolder;
}
`



export const ViewDetails = styled.a`
background: #AA1826;
font-size: 20px;
padding: .75rem;
border: 1px solid white;
border-radius: 5px;
color: white;
float: right;
 &:hover{
    color: white;
    background: #c11d2c;
 }
 i {
     padding-right:10px;
 }
`

export const UserSideBar = styled.aside`
flex: 0 0 200px;
max-width: 300px;
min-width: 300px;
min-height: 200px;
background: #881823;
padding: 0%;
max-height: 100%;
margin-right:5%;
ul{
    width: 80%;
    font-weight: 700;
    background-color: rgb(245, 245, 245);
    margin: auto !important;
    margin-top: 10% !important;;
    color: #AA1826;
    background: black;
    padding-bottom: 10%;
}
 li > div{
   &:hover{
     color:white !important;
   }
 }
 li > div > i{
   color:black !important;
  &:hover{
    color:white !important;
  }
}
`

export const InventoryContainer = styled.div`
font-family: "Roboto";
background: #ffffff;
width: 80%;
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
        padding: 10px;
        text-transform: uppercase;
        font-size: 24px;
        text-align:center;

    }
    .filter-stock-active {
        display: inline-block
      }
      
      
      @media (min-width: 768px) {
        .filter-stock-active {
          float: left
        }
      }
      
      .filter-stock-active button {
        display: inline-block;
        float: left;
        font-size: 1rem;
        padding: 0 5px;
        background: #AA1826;
        margin: 3px;
        color: white;
      }
      
      .filter-stock-active button:not(:last-child)[data-separator=slash]:after {
        content: "/";
        color: #464a4c;
        margin-left: .75em
      }
      
      .filter-stock-active button[data-separator=comma]:after {
        content: ",";
        color: #464a4c
      }
      
      .filter-stock-active button:before {
        display: inline-block;
        font: normal normal normal 14px/1 FontAwesome;
        font-size: inherit;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 0;
        margin: 0 2px 0 0;
        opacity: 0;
        transition: opacity 240ms cubic-bezier(.19, 1, .22, 1), width 180ms cubic-bezier(.19, 1, .22, 1);
        content: "";
      }
      
      .filter-stock-active button:hover {
        color: white;
      }
      
      .filter-stock-active button:hover:before {
        opacity: 1;
        width: 1em
      }
      
      .filter-stock-active-wrap {
        margin-bottom: 15px;
      }
      
      .filter-stock-active-wrap::after {
        display: block;
        content: "";
        clear: both;
      }
      
      .results-meta {
        line-height: 2.12rem;
        padding-top: .9375rem;
        text-align: center;
        background-color: #f5f5f5;
        margin-left: -.9375rem;
        margin-right: -.9375rem;
        margin-bottom: 15px;
      }
      
      .results-meta::after {
        display: block;
        content: "";
        clear: both
      }
      
      @media (min-width: 768px) {
        .results-meta {
          background-color: transparent;
          margin-left: 0;
          margin-right: 0;
          margin-bottom: 30px;
          border-bottom: 5px solid #AA1826;
          padding-bottom: 20px;
        }
      }
      
      .results-meta .total-count {
        font-size: .75rem
      }
      
      @media (min-width: 768px) {
        .results-meta .total-count {
          float: left;
          width: 220px;
          max-width: 30%;
          margin-right: 2%;
          letter-spacing: 2px;
          font-size: 1rem;
          color: #AA1826;
          text-transform: uppercase;
        }
      }
      
      .results-meta .page-length-control {
        list-style-type: none;
        padding: 0;
        margin: 0 0 .625rem
      }
      
      @media (min-width: 768px) {
        .results-meta .page-length-control {
          float: right;
          width: 220px;
          max-width: 30%;
          margin-bottom: 0
        }
      }
      
      .results-meta .page-length-control li {
        display: inline-block
      }
      
      @media (min-width: 768px) {
        .results-meta .page-length-control li {
          float: left;
          padding: 0 1px
        }
      }
      
      .results-meta .page-length-control button {
        display: inline-block;
        float: left;
        font-size: 1rem;
        padding: 0 5px;
        background: #AA1826;
        margin: 3px;
      }
      
      .results-meta .page-length-control button:hover {
        text-decoration: none
      }
      
      @media (min-width: 768px) {
        .results-meta .page-length-control a {
          float: left;
          font-size: 1rem
        }
      }
      
      ._bpbackinv{
          color:white;
      }
      ._bpbackinv.active,
      ._bpbackinv:focus,
      ._bpbackinv:hover {
        
        color: #e23156;
        border: 1px solid #e23156;
        background:white !important ;
      }
      
      .ant-menu-submenu-title {
        width: 100% !important;
      }

`;


