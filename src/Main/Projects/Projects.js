import React from "react";
import * as S from "./Styles"

//components
import Project from "../../components/Project/Project";

export default function Projects(){

    return(
        <>
            <S.ProjectsSection>
                <S.TitleSection>PROJETOS</S.TitleSection>
                <S.Projects>
                    <Project
                        srcImage="https://portfolio-nicolas-goulart.netlify.app/static/media/project-home-you.3d197076647ad151b343.PNG"
                        nameProject="Nome do Projeto"
                        descriptionProject="Descrição genérica aleatória para um projeto que será adicionado eventualmente neste campo"
                        tecnology="React.js, HTML, CSS, JavaScript"
                    />
                    <Project
                        srcImage="https://portfolio-nicolas-goulart.netlify.app/static/media/project-home-you.3d197076647ad151b343.PNG"
                        nameProject="Nome do Projeto"
                        descriptionProject="Descrição genérica aleatória para um projeto que será adicionado eventualmente neste campo"
                        tecnology="React.js, HTML, CSS, JavaScript"
                    />
                    <Project
                        srcImage="https://portfolio-nicolas-goulart.netlify.app/static/media/project-home-you.3d197076647ad151b343.PNG"
                        nameProject="Nome do Projeto"
                        descriptionProject="Descrição genérica aleatória para um projeto que será adicionado eventualmente neste campo"
                        tecnology="React.js, HTML, CSS, JavaScript"
                    />
                    <Project
                        srcImage="https://portfolio-nicolas-goulart.netlify.app/static/media/project-home-you.3d197076647ad151b343.PNG"
                        nameProject="Nome do Projeto"
                        descriptionProject="Descrição genérica aleatória para um projeto que será adicionado eventualmente neste campo"
                        tecnology="React.js, HTML, CSS, JavaScript"
                    />
                </S.Projects>
            </S.ProjectsSection>
        </>
    )
}