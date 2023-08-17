import React from "react";
import * as S from "./Styles"

//components
import AboutMe from "./AboutMe/AboutMe";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";

export default function Main(){

    return(
        <>
            <S.Main>
                <AboutMe/>
                <Experience/>
                <Projects/>
            </S.Main>
        </>
    )
}