import React from "react";
import * as S from "./Styles"

//components
import Project from "../../components/Project/Project";

export default function Projects(){

    return(
        <>
            <S.Projects>
                <S.TitleSection>PROJETOS</S.TitleSection>
                <Project
                    srcImage=""
                    nameProject="Nome do Projeto"
                    descriptionProject="Descrição genérica aleatória para um projeto que será adicionado eventualmente neste campo"
                    tecnology="React.js, HTML, CSS, JavaScript"
                />
                <Project
                    srcImage=""
                    nameProject="Nome do Projeto"
                    descriptionProject="Descrição genérica aleatória para um projeto que será adicionado eventualmente neste campo"
                    tecnology="React.js, HTML, CSS, JavaScript"
                />
                <Project
                    srcImage=""
                    nameProject="Nome do Projeto"
                    descriptionProject="Descrição genérica aleatória para um projeto que será adicionado eventualmente neste campo"
                    tecnology="React.js, HTML, CSS, JavaScript"
                />
                <Project
                    srcImage=""
                    nameProject="Nome do Projeto"
                    descriptionProject="Descrição genérica aleatória para um projeto que será adicionado eventualmente neste campo"
                    tecnology="React.js, HTML, CSS, JavaScript"
                />
            </S.Projects>
        </>
    )
}