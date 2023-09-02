import React from "react"
import * as S from "./Styles"

export default function Experience(){

    return(
        <>
            <S.Experience id="experiencia">
                <S.TitleSection>EXPERIÊNCIA</S.TitleSection>
                <S.AboutPosition>
                    <S.NamePosition>Shadow Desenvolvedor Front-End</S.NamePosition>
                    <S.NameCompany><span><a href="https://vainaweb.com.br" target="_BLANK" rel="noreferrer">Vai na Web</a></span> <span>Set. 2022 - Jan. 2023</span></S.NameCompany>
                    <S.DescriptionPosition>
                        Minha experiência no <a 
                        href="https://vainaweb.com.br"
                        target="_BLANK"
                        rel="noreferrer">
                        VNW</a> não apenas refinou
                        minhas habilidades técnicas, mas também aprimorou minhas soft skills, como a
                        colaboração estreita com designers para criar interfaces coesas e a busca incessante
                        pela otimização da experiência do usuário, resultando em um equilíbrio
                        harmonioso entre estética visual e funcionalidade prática.
                    </S.DescriptionPosition>
                </S.AboutPosition>
            </S.Experience>
        </>
    )
}