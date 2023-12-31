import styled from "styled-components"

export const AboutSection = styled.section`
    background-color: #151515;
`
export const TextInspiration = styled.div`
    position: absolute;
    top: 0;
    left: -310px;
    opacity: 0;
    transition: .4s;

    display: flex;
    align-items: center;

    background-color: #151515;
    border-left: #5dd3de solid 4px;
    width: 310px;
    height: 370px;
    border-radius: 4px;
    padding: 20px;

    p{
        text-align: left;
        font-size: 1rem;
        font-weight: 300;
        line-height: 23px;
        color: #C4C4C4;
    }

    @media(max-width: 1024px){
        display: none;
    }
`
export const TextAnimation = styled.div`
    position: relative;
    &:hover > ${TextInspiration} {
        opacity: 1;
        left: 1.5px;
    }
`
export const MyPicture = styled.img`
    width: 310px;
    height: 370px;
    border-left: #5e0fdb solid 4px;
    border-radius: 4px;
    transition: .4;
    @media(max-width: 1024px){
        display: none;
    }
`

export const AboutMe = styled.section`
    display: flex;
    justify-content: space-between;

    padding: 40px 30px;
    margin-top: 60px;

    @media(min-width: 768px){
        padding: 40px 50px;
    }
    @media(min-width: 1024px){
        padding: 40px 80px;
    }
    @media(min-width: 1440px){
        padding: 80px 80px;
        max-width: 1440px;
        margin: 60px auto;
    }
`
export const Content = styled.div`
    width: 500px;
    @media(max-width: 1024px){
        width: 100%;
    }
`
export const TitleSection = styled.h1`
    font-size: 1.75rem;
    font-weight: 600;
`
export const Location = styled.p`
    margin-top: 20px;
    font-size: 1.25rem;
    font-weight: 400;
`
export const Description = styled.p`
    margin-top: 15px;
    font-size: 1rem;
    font-weight: 300;
    line-height: 23px;
    color: #C4C4C4;
`
export const DivIcons = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    @media(min-width: 1024px){
        width: 250px;
    }
`
export const Buttons = styled.div`
    padding-top: 60px;
    display: flex;
    justify-content: space-between;
    @media(min-width: 1024px){
        width: 370px;
    }
`
