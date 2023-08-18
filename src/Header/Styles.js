import styled from "styled-components"

export const Header = styled.header`
    width: 100%;
`
export const Navigation = styled.nav`
    padding-inline: 30px;
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: solid 2px #151515;

    ul{
        display: flex;
        gap: 30px;
        list-style: none;
        @media(max-width: 768px){
            display: none;
        }
        li{
            color: #C4C4C4;
            &:hover{
                cursor: pointer;
                color: #5dd3de;
            }
        }
    }

    h3{
        color: #5e0fdb;
        font-size: 1.5rem;
        font-weight: 500;
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
export const Presentation = styled.div`
    padding-top: 30px;
    padding-inline: 30px;

    display: flex;

    p{
        font-size: 1.25rem;
        font-weight: 600;
        @media(max-width: 400px){
            font-size: 1rem;
        }
    }
    h2{
        margin: 15px 0 15px;
        font-size: 2rem;
        font-weight: 600;
        color: #5e0fdb;
        @media(max-width: 400px){
            font-size: 1.5rem;
        }
    }
    
    @media(min-width: 768px){
        padding-inline: 50px;
    }
    @media(min-width: 1024px){
        width: 50%;
        padding-inline: 80px;
    }
    @media(min-width: 1440px){
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
    }
`
export const Content = styled.div`
    width: 340px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media(max-width: 1024px){
        width: 100%;
    }
`
export const ImageHeader = styled.div`
    height: 565px;
    img{
        position: absolute;
        right: 0;

    }
    @media(max-width: 1024px){
        display: none;
    }
`
export const Buttons = styled.div`
    padding-top: 60px;
    display: flex;
    justify-content: space-between;
`
