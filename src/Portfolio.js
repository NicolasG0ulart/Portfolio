import React from "react";
import { createGlobalStyle } from "styled-components";

//components
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

export default function Portfolio(){

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body{
  background-color: #121212;
}
h1, h2, h3, h4, h5, p, button, li{
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
}
#page-wrap {
  padding-bottom: 10px;
  padding-top: 10px;
}
`

  return(
    <>
      <GlobalStyle/>
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}