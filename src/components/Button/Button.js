import React from "react";
import styled from "styled-components"

export default function Button({colorBorderButton, textButton, iconButton, linkButton}){

    const Button = styled.button`
        background-color: transparent;
        border: solid ${colorBorderButton} 2px;
        border-radius: 4px;
        height: 50px;
        padding-inline: 30px;
        display: flex;
        align-items: center;
        gap: 15px;
        font-weight: 600;
        transition: .4s;
        &:hover{
            cursor: pointer;
            background-color: #202020;
        }

        @media(max-width: 375px){
            padding-inline: 15px;
            gap: 10px;
        }
    `

    return(
        <>
<<<<<<< HEAD
            <a href={linkButton} target="_BLANK" rel="noreferrer">
=======
            <a href={linkButton} target="_BLANK" rel="noopener noreferrer">
>>>>>>> 3ee4dec303aff2423e75cbbeb1e7ef8e3661de3d
                <Button>
                    {iconButton}
                    {textButton}
                </Button>
            </a>
        </>
    )
}
