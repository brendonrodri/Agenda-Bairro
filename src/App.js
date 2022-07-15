import React from "react";
import { GlobalStyle } from "./Components/styles";
import HeaderComponent from "./Components/Header";
import RoutesComponent from "./Components/Routes/Routes";
export default function App (){
    return(
        <>
            <GlobalStyle />
            <HeaderComponent />
            <RoutesComponent />
        </>
    )
}