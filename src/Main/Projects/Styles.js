import styled from "styled-components"

export const ProjectsSection = styled.section`
    background-color: #151515;
    
`
export const Projects = styled.section`
    padding: 40px 30px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 60px;
    @media(min-width: 768px){
        padding: 40px 50px;
    }
    @media(min-width: 1024px){
        padding: 0 80px;
    }
    @media(min-width: 1440px){
        max-width: 1440px;
        margin: 0 auto;
    }
`
export const TitleSection = styled.h1`
    font-size: 1.75rem;
    font-weight: 600;
    padding: 40px 30px;
    @media(min-width: 1024px){
        max-width: 1440px;
        margin: 0 auto;
        padding: 40px 80px;
    }
`