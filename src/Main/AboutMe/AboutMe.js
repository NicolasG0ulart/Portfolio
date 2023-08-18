import React from "react";
import * as S from "./Styles"

//components
import Button from "../../components/Button/Button"

//icons
import { AiOutlineHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

//images
import myPicture from "../../assets/mypicture.png"



export default function AboutMe(){

    return(
        <>
            <S.AboutSection>
                

                <S.AboutMe>
                    <S.MyPicture src={myPicture} alt="Uma foto minha"/>

                    <S.Content>
                        <S.TitleSection>SOBRE MIM</S.TitleSection>
                        <S.Location>Santana do Deserto, MG</S.Location>
                        <S.Description>DESCRIÇÃO CHATA QUE VOU COLOCAR AQUI DEPOIS
                        DESCRIÇÃO CHATA QUE VOU COLOCAR AQUI DEPOIS
                        DESCRIÇÃO CHATA QUE VOU COLOCAR AQUI DEPOIS
                        </S.Description>

                        <S.DivIcons>
                            <AiOutlineHtml5 color="#5e0fdb" size={40}/>
                            <IoLogoCss3 color="#5e0fdb" size={40}/>
                            <IoLogoJavascript color="#5e0fdb" size={40}/>
                            <FaReact color="#5e0fdb" size={40}/>
                        </S.DivIcons>

                        <S.Buttons>
                                <Button
                                colorBorderButton={'#5dd3de'}
                                iconButton={<AiOutlineDownload size={20}/>}
                                textButton={'Currículo'}
                                />
                                <Button
                                colorBorderButton={'#5e0fdb'}
                                iconButton={<HiOutlineMail size={20}/>}
                                textButton={'E-mail'}
                                />
                            </S.Buttons>
                    </S.Content>
                </S.AboutMe>
            </S.AboutSection>
        </>
    )
}