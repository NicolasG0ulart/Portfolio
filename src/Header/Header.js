import React from "react";
import * as S from "./Styles"

//components
import Siderbar from "../components/Sidebar/Sidebar";
import Button from "../components/Button/Button";

//icons
import { FiLinkedin } from "react-icons/fi"
import { FiGithub } from "react-icons/fi"

export default function Header(){

    return(
        <>
            <S.Header>
                <S.Navigation>
                    <h3>Portfólio</h3>
                    <Siderbar/>
                </S.Navigation>

                <S.Presentation>
                    <p>OLÁ, EU SOU</p>
                    <h2>NICOLAS GOULART</h2>
                    <p>DESENVOLVEDOR FRONT-END.</p>

                    <S.Buttons>
                        <Button
                        colorBorderButton={'#5e0fdb'}
                        iconButton={<FiLinkedin size={20}/>}
                        textButton={'LinkedIn'}
                        />
                        <Button
                        colorBorderButton={'#5dd3de'}
                        iconButton={<FiGithub size={20}/>}
                        textButton={'GitHub'}
                        />
                    </S.Buttons>
                </S.Presentation>
            </S.Header>
        </>
    )
}