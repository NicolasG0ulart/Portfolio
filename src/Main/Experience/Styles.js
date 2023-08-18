import styled from "styled-components"

export const Experience = styled.section`
    padding: 40px 30px;

    @media(min-width: 768px){
        padding: 40px 50px;
    }
    @media(min-width: 1024px){
        padding: 40px 80px;
    }
    @media(min-width: 1440px){
        padding: 40px 80px;
        max-width: 1440px;
        margin: 60px auto;
    }
`
export const TitleSection = styled.h1`
    font-size: 1.75rem;
    font-weight: 600;
`
export const AboutPosition = styled.div`
    border-top: solid #5e0fdb;
    margin-top: 30px;
    padding-top: 30px;
    @media(min-width: 1024px){
        width: 400px;
    }
`
export const NamePosition = styled.p`
    font-size: 1.25rem;
    font-weight: 400;
`
export const NameCompany = styled.p`
    margin-top: 15px;
    font-size: 1rem;
    font-weight: 500;
    color: #5e0fdb;
    display: flex;
    justify-content: space-between;
`
export const DescriptionPosition = styled.p`
    margin-top: 25px;
    font-size: 1rem;
    font-weight: 300;
    color: #C4C4C4;
`