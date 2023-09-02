import React from "react";
import * as S from "./Styles"

//components
import Project from "../../components/Project/Project";

export default function Projects(){

    return(
        <>
            <S.ProjectsSection id="projetos">
                <S.TitleSection>PROJETOS PESSOAIS</S.TitleSection>
                <S.Projects>
                    <Project
                        srcImage="https://portfolio-nicolas-goulart.netlify.app/static/media/project-home-you.3d197076647ad151b343.PNG"
                        nameProject="Home You"
                        descriptionProject="Home You é um site com um layout totalmente responsivo criado no intúito de venda de imóveis."
                        tecnology="React.js, Styled-Components"
                        linkProject={"https://home-you-site.netlify.app"}
                    />
                    <Project
                        srcImage="https://i.imgur.com/p3MghsL.png"
                        nameProject="Razer"
                        descriptionProject="Redesign do site da Razer com a intenção de deixa-lo mais clean e objetivo."
                        tecnology="React.js, Styled-Components"
                        linkProject={"https://razer-goulart.netlify.app"}
                    />
                    <Project
                        srcImage="https://i.imgur.com/5mCeK30.png"
                        nameProject="9Club"
                        descriptionProject="Projeto em andamento"
                        tecnology="Styled-Components, React-Router, React-Icons"
                        linkProject={"https://9club.netlify.app"}
                    />
                    <Project
                        srcImage="https://i.imgur.com/7N2pKiJ.png"
                        nameProject="Ikari arts"
                        descriptionProject="Exposição de algumas artes de um Desenhista"
                        tecnology="React.js, Styled-Components"
                        linkProject={"https://ikari-arts.netlify.app"}
                    />
                </S.Projects>
            </S.ProjectsSection>
        </>
    )
}