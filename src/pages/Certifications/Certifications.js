import React from "react";
import * as S from "./Styles.js"

//router dom
import { Link } from "react-router-dom"

//certificationsJSON
import CertificationJson from "./Certifications.json"

//components
// import Button from "../../components/Button/Button.js"
import Certification from "../../components/Certification/Certifications.js";

export default function Certifications(){

    const infos = CertificationJson

    return(
        <>
            <S.CertificationsPage>
                <S.HeaderPage>
                <Link to="/"> <h3>Portfólio</h3></Link>
                </S.HeaderPage>
                
                <S.MainPage>
                    <h1>CERTIFICAÇÕES</h1>
                    {/* <S.Buttons>
                        <Button textButton="Todos" colorBorderButton="#5e0fdb"/> 
                        <Button textButton="Alura" colorBorderButton="#5dd3de"/>
                        <Button textButton="DIO" colorBorderButton="#5e0fdb"/>
                    </S.Buttons> */}
                    <S.Certifications>
                        {infos.certification.map((item) => (
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