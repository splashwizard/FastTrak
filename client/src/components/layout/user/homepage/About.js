import React from 'react'
import styled from 'styled-components'
export const About = () => {
    return (
        <FullContainer>
            <InnerHalfContainer><h1>Unlock the potential with your new local dealer!</h1><p>
                Empire motors is a locally owned company here to serve your needs in
                purchasing a using car that fits your standards. We have a nice
                selection of used cars at a low price. Let us help you pick out a
                car that you will be happy with for years to come.
            </p>
                <p>
                    We have qualified staff that are here to listen to your desired
                    specs and we are sure that we can make you happy. With new
                    vehicles being added daily come down to our shop and check out our
                    selection.
            </p></InnerHalfContainer>
            <img src="/images/about_image.png" alt="about" />

        </FullContainer>
    )
}

const FullContainer = styled.div`
background: #181818;
color: #fff;
padding: 5rem;
text-align: right;
background:black;
    h1 {
    color: #fff;
    font-size: 2rem;
    font-weight: 300;
    margin-bottom: 1rem;
}
p{
    font-size: 1.2rem;
    line-height: 1.5;
}
`

const InnerHalfContainer = styled.div`
display:block-inline;
width:70%;
`

const ImageContainer = styled.div`
background-image: url("/images/about_image.png");
background-position: 0 50%;
background-repeat: no-repeat;
height: 100%;
float:right;
`