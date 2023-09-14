import React from "react";
import { useState } from "react";
import * as S from "./Styles.js"

//router dom
import { Link } from "react-router-dom"

//certificationsJSON
import CertificationJson from "./Certifications.json"

//components
import Button from "../../components/Button/Button.js"
import Certification from "../../components/Certification/Certifications.js";

export default function Certifications(){

    const infos = CertificationJson.certification
    const [filteredInfos, setFilteredInfos] = useState(infos)

    function FilterInfos(platform){
        const filteredItems = infos.filter(item => item.platform === platform);
        
        if (filteredItems.length === 0) {
            setFilteredInfos(infos);
        } else {
            setFilteredInfos(filteredItems);
        }
    }

    return(
        <>
            <S.CertificationsPage>
                <S.HeaderPage>
                <Link to="/"> <h3>Portfólio</h3></Link>
                </S.HeaderPage>
                
                <S.MainPage>
                    <h1>CERTIFICAÇÕES</h1>
                    <S.Buttons >
                        <div onClick={()=>FilterInfos("todos")}>
                            <Button textButton="Todos" colorBorderButton="#5e0fdb"/>
                        </div>
                        <div onClick={()=>FilterInfos("alura")}>
                            <Button textButton="Alura" colorBorderButton="#5dd3de"/>
                        </div>
                        <div onClick={()=>FilterInfos("dio")}>
                            <Button textButton="DIO" colorBorderButton="#5e0fdb"/>
                        </div>
                    </S.Buttons>
                    <S.Certifications>
                        {filteredInfos.map((item) => (
                            <Certification
                                key={item.id}
                                linkImageBG={item.urlImage}
                                nameCertification={item.name}
                                description={item.description}
                                workload={item.workload}
                            />
                        ))}

                    </S.Certifications>
                </S.MainPage>
            </S.CertificationsPage>
        </>
    )
}