import styled from "styled-components"

export const Footer = styled.footer`
    padding: 40px 30px;
    h3{
        font-size: 1rem;
        color: #C4C4C4;
        font-weight: 400;
    }
    @media(min-width: 768px){
        padding-inline: 50px;
    }
    @media(min-width: 1024px){
        padding-inline: 80px;
    }
    @media(min-width: 1440px){
        padding-inline: 80px;
        max-width: 1440px;
        margin: 0 auto;
    }
`
