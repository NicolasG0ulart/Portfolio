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
  &::-webkit-scrollbar {
    width: 15px;
  }
  &::-webkit-scrollbar-track {
    background-color: #181818;
  }
  &::-webkit-scrollbar-button {
    background-color: #5dd3de;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #5e0fdb;
  }
  
}
h1, h2, h3, h4, h5, p, button, li{
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
}
a{
  text-decoration: none;
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