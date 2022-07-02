import React from "react";
import {createGlobalStyle} from "styled-components";
import HeaderComponent from "./Components/Header";
import CardsContainerComponent from "./Components/Cards/index"
import * as S from "./Components/styles";
const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0%;
        box-sizing: border-box;
    }
`;
export default function App (){
    return(
        <S.Main>
            <GlobalStyle />
            <HeaderComponent />
            {CardsContainerComponent()}
        </S.Main>
    )
}