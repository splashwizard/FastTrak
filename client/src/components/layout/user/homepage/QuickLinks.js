import React from 'react'
import { Block, QuickLinkContainer } from './components'
export const QuickLinks = () => {
    return (
        <QuickLinkContainer >

            <Block background="first" href="google.ca">Shop Pre-owned</Block>
            <Block background="second">Apply for Financing</Block>
            <Block background="third">Contact Us</Block>

        </QuickLinkContainer>
    )
}
