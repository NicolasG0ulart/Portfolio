import React, {useState} from "react";

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
                            <li><TiHomeOutline color="#5e0fdb" size={25}/> Início</li>
                            <li><VscAccount color="#5e0fdb" size={25}/> Sobre mim</li>
                            <li><VscStarEmpty color="#5e0fdb" size={25}/> Experiência</li>
                            <li><VscPreview color="#5e0fdb" size={25}/>Projetos</li>
                            <li><VscRepo color="#5e0fdb" size={25}/> Certificações</li>
                        </ul>
                    </S.ListMobile>

           </S.SidebarSection>
        </>
    )
}