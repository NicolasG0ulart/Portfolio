import React from "react";
import styled from "styled-components"

//icons
import { FiLink } from "react-icons/fi";

export default function Project({srcImage, nameProject, descriptionProject, tecnology}){

    const Project = styled.div`
        margin-top: 40px;

        img{
            background-color: #121212;
            border-radius: 3px;
            border-left: #5e0fdb 3px solid;
            width: 100%;
            height: 160px;
            text-align: center;
            line-height: 160px;
        }
    `
    const NameProject = styled.p`
        margin-top: 30px;
        font-size: 1.25rem;
        font-weight: 400;
    `
    const DescriptionProject = styled.p`
        margin-top: 20px;
        font-size: 1rem;
        font-weight: 300;
        color: #C4C4C4;
    `
    const Tecnology = styled.p`
        margin-top: 20px;
        font-size: 1rem;
        font-weight: 500;
        color: #5e0fdb;
        span{
            color: #5dd3de;
        }
    `
    const ButtonStyled = styled.button`
        margin-top: 30px;
        width: 100%;
        background-color: transparent;
        border-top: solid #5dd3de 2px;
        border-right: solid #5dd3de 2px;
        border-left: solid #5e0fdb 2px;
        border-bottom: solid #5e0fdb 2px;
        border-radius: 4px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
        font-weight: 400;
    `

    return(
        <>
            <Project>
                <img src={srcImage} alt="Imagem do Projeto"/>
                <NameProject>{nameProject}</NameProject>
                <DescriptionProject>{descriptionProject}</DescriptionProject>
                <Tecnology>Tecnologias usadas no projeto: <span>{tecnology}</span></Tecnology>
                <ButtonStyled>
                    <FiLink size={20}/>
                    Visualizar
                </ButtonStyled>
            </Project>
        </>
    )
}