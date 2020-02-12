import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const About = () => {
    return (
        <FullContainer>
            <div>
                <h1>Why Empire Motors?</h1>
                <p>
                    Empire motors is a locally owned company here to serve your needs in
                    purchasing a using car that fits your standards. We have a nice
                    selection of used cars at a low price. Let us help you pick out a
                    car that you will be happy with for years to come.
                </p>
                <p>
                    We have qualified staff that are here to listen to your desired
                    specs and we are sure that we can make you happy. With new
                    vehicles being added daily come down to our shop and check out our
                    selection.</p>
                <Link to='/inventory'><button>Find Your Perfect Vehicle</button></Link>
            </div>
        </FullContainer>
    )
}

const FullContainer = styled.div`
background-image: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),url("/images/about.png");
background-size: cover;
background-repeat: no-repeat;
background-position: center center;
padding: 5rem;
color:#020101d1;
h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
}
p{
    font-size: 1.2rem;
    line-height: 1.5;
}
div{
    width: 45%;
    text-align:center;
    margin-left:-4%;
    button{
        padding: 1rem;
        text-decoration: none;
        background: black;
        color: white;
        border: 1px white solid;
        border-radius: 5px;
        font-size: 1rem;
        cursor: pointer;
        &:hover{
            background:white;
            color:black;  
            border: 1px black solid;

        }  
    }

    
}
`

