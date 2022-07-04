import React from "react";
import {createGlobalStyle} from "styled-components";
import HeaderComponent from "./Components/Header";
import CardsContainerComponent from "./Components/Cards/index"
const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0%;
        box-sizing: border-box;
    }
    html{
        font-family: 'Roboto', sans-serif;
    }
`;
export default function App (){
    return(
        <>
            <GlobalStyle />
            <HeaderComponent />
            {CardsContainerComponent()}
            
        </>
    )
}