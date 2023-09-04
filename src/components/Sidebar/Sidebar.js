import React, {useState} from "react";


//LinkR === Link + Router
import { Link as LinkR } from "react-router-dom"

import * as S from "./Styles"

//icons
import { VscThreeBars, VscAccount, VscStarEmpty, VscPreview, VscRepo } from "react-icons/vsc"
import { TiHomeOutline, TiTimes } from "react-icons/ti";

export default function Siderbar(){

    const [open, IsOpen] = useState(false)

    function changeMenu(){
        IsOpen(!open)

        console.log(open)
    }

    return(
        <>
           <S.SidebarSection>
                <VscThreeBars color="#5e0fdb" size={30} onClick={()=>changeMenu()}/>

                    <S.ListMobile className={open ? 'open' : ""}>
                        <S.RedesignIco>
                            <TiTimes color="#5e0fdb" size={35} onClick={()=>changeMenu()}/>
                        </S.RedesignIco>

                        <h3>Portfólio</h3>
                        <ul>
                            <S.LinkReactScroll onClick={()=>changeMenu()} to="inicio" smooth={true}><li><TiHomeOutline color="#5e0fdb" size={25}/>Início</li></S.LinkReactScroll>
                            <S.LinkReactScroll onClick={()=>changeMenu()} to="sobre-mim" smooth={true}><li><VscAccount color="#5e0fdb" size={25}/>Sobre mim</li></S.LinkReactScroll>
                            <S.LinkReactScroll onClick={()=>changeMenu()} to="experiencia" smooth={true}><li><VscStarEmpty color="#5e0fdb" size={25}/>Experiência</li></S.LinkReactScroll>
                            <S.LinkReactScroll onClick={()=>changeMenu()} to="projetos" smooth={true}><li><VscPreview color="#5e0fdb" size={25}/>Projetos</li></S.LinkReactScroll>
                            <li><VscRepo color="#5e0fdb" size={25}/><LinkR to="/certificacoes">Certificações</LinkR></li>
                        </ul>
                    </S.ListMobile>

           </S.SidebarSection>
        </>
    )
}