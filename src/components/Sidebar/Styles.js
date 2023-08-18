import styled from "styled-components"

export const SidebarSection = styled.section`
    @media(min-width: 769px){
        display: none;
    }
`
export const ListMobile = styled.div`
    position: absolute;
    top: 0;
    left: -100%;
    padding-inline: 10px;
    padding-top: 36px;

    background-color: #181818;
    width: 100%;
    height: 100%;

    
    transition: 0.4s;
    &.open {
        left: 0;
        position: fixed;
    }

    h3{
        text-align: center;
        color: #5e0fdb;
        font-size: 1.5rem;
        font-weight: 500;
    }

    ul{
        padding-top: 80px;
        list-style: none;
        display: flex;
        gap: 10px;
        flex-direction: column;
        align-items: center;
    }
    ul li{
        display: flex;
        gap: 20px;
        align-items: center;
        padding-left: 20px;
        border-radius: 15px;
        width: 100%;
        height: 65px;
        transition: 0.4s;
        &:hover{
            background-color: #202020;
        }
    }
`
export const RedesignIco = styled.div`
    position: absolute;
    top: 34px;
    right: 34px;
`
