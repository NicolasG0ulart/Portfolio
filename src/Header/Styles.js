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


h3{
    color: #5e0fdb;
    font-size: 1.5rem;
    font-weight: 500;
}
`
export const Presentation = styled.div`
    padding-top: 30px;
    padding-inline: 30px;

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
`
export const Buttons = styled.div`
    padding-top: 60px;
    display: flex;
    justify-content: space-between;
`
