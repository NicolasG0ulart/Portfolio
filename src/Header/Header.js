import React from "react";
import * as S from "./Styles"
import { Link } from "react-scroll";

//LinkR === Link + Router
import { Link as LinkR } from "react-router-dom"
//components
import Siderbar from "../components/Sidebar/Sidebar";
import Button from "../components/Button/Button";

//icons
import { FiLinkedin } from "react-icons/fi"
import { FiGithub } from "react-icons/fi"

//image
import imageHeader from "../assets/image-header.svg"

export default function Header(){

    return(
        <>
            <S.Header id="inicio">
                <S.Navigation>
                    <h3><Link to="inicio" smooth={true}></Link>Portfólio</h3>
                    <Siderbar/>
                    <ul>
                        <li><Link to="inicio" smooth={true}>Início</Link></li>
                        <li><Link to="sobre-mim" smooth={true}>Sobre mim</Link></li>
                        <li><Link to="experiencia" smooth={true}>Experiência</Link></li>
                        <li><Link to="projetos" smooth={true}>Projetos</Link></li>
                        <li><LinkR to="/certificacoes">Certificações</LinkR></li>
                    </ul>
                </S.Navigation>

                <S.Presentation>
                    <S.Content>
                        <p>OLÁ, EU SOU</p>
                        <h2>NICOLAS GOULART</h2>
                        <p>DESENVOLVEDOR FRONT-END.</p>

                        <S.Buttons>
                            <Button
                            colorBorderButton={'#5e0fdb'}
                            iconButton={<FiLinkedin size={20}/>}
                            textButton={'LinkedIn'}
                            linkButton="https://www.linkedin.com/in/nicolas-goulart-a64359244/"
                            />
                            <Button
                            colorBorderButton={'#5dd3de'}
                            iconButton={<FiGithub size={20}/>}
                            textButton={'GitHub'}
                            linkButton="https://github.com/NicolasG0ulart"
                            />
                        </S.Buttons>
                    </S.Content>

                    <S.ImageHeader>
                        <img src={imageHeader} alt="Imagem aleatória de enfeite do site"/>
                    </S.ImageHeader>
                </S.Presentation>
            </S.Header>
        </>
    )
}