import React from "react";
import {Routes, Route} from "react-router-dom"
import {createGlobalStyle} from "styled-components";
import HeaderComponent from "./Components/Header";
import CardsContainerComponent from "./Components/Cards/index"
import EducationContent from "./Components/Cards/Education/conten";
import CommunityWellContent from "./Components/Cards/CommunityWellLive/content";
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
            <Routes>
                <Route path="/" element={<CardsContainerComponent />} />
                <Route path="/Educacaodequalidade" element={<EducationContent />}/>
                <Route path="/Bemvivercomunitario" element={<CommunityWellContent />}/>
            </Routes>
            {CardsContainerComponent()}
           
        </>
    )
}