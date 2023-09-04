import styled from "styled-components"

export const CertificationsPage = styled.section`
    width: 100%;
    padding-inline: 30px;
    @media(min-width: 768px){
        padding-inline: 50px;
    }
    @media(min-width: 1024px){
        width: 100%;
        padding-inline: 80px;
    }
    @media(min-width: 1440px){
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
    }
`
export const HeaderPage = styled.header`
    height: 100px;
    border-bottom: solid 2px #151515;
    h3{
        color: #5e0fdb;
        line-height: 100px;
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
        transition: .2s;
        &:hover{
            cursor: pointer;
            font-size: 1.7rem;
        }
    }
`
export const MainPage = styled.main`
    margin-top: 30px;

    h1{
        font-size: 1.75rem;
        font-weight: 600;
    }
`
export const Buttons = styled.div`
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    @media(min-width: 500px){
        width: 450px;
    }
`
export const Certifications = styled.section`
    margin-top: 30px;

    display: flex;
    gap: 30px;
    justify-content: space-between;
    flex-wrap: wrap;
`