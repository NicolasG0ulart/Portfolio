import React from "react";
import styled from "styled-components"

export default function Certification({linkImageBG, nameCertification, description, workload}){

    const CertificationComponent = styled.div`
        margin-top: 80px;
        width: 100%;

        img{
            border-left: #5e0fdb 3px solid;
            border-radius: 3px;
            width: 100%;
        }
        @media(min-width: 768px){
            width: 45%;
        }
        @media(min-width: 1024px){
            width: 300px;
        }
        @media(min-width: 1440px){
            width: 400px;
        }
    `
    const NameCertification = styled.h3`
        margin-top: 20px;
        font-size: 1.25rem;
        font-weight: 400;
    `
    const Description = styled.p`
        margin-top: 15px;
        font-size: 1rem;
        font-weight: 300;
        color: #C4C4C4;
    `
    const Workload = styled.p`
        margin-top: 15px;
        font-size: 1rem;
        font-weight: 500;
        color: #5e0fdb;
        span{
            color: #5dd3de;
        }
    `

    return(
        <>
            <CertificationComponent>
                <img src={linkImageBG} alt="Certificado"/>
                <NameCertification>{nameCertification}</NameCertification>
                <Description>{description}</Description>
                <Workload>Carga horária de: <span>{workload}</span></Workload>
            </CertificationComponent>
        </>
    )
}