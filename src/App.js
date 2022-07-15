import React from "react";
import {Routes, Route} from "react-router-dom"
import {createGlobalStyle} from "styled-components";
import HeaderComponent from "./Components/Header";
import CardsContainerComponent from "./Components/Cards/index"
import EducationContent from "./Components/Cards/Education/content";
import CommunityWellContent from "./Components/Cards/CommunityWellLive/content";
import HealthContent from "./Components/Cards/Health/content";
import LeisureandRecreationContent from "./Components/Cards/ValuingCulture/content"
import ValuingCultureContent from "./Components/Cards/ValuingCulture/content";
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
                <Route path="/Educacao-de-qualidade" element={<EducationContent />}/>
                <Route path="/Bem-viver-comunitario" element={<CommunityWellContent />}/>
                <Route path="/Saude-de-qualidade" element={<HealthContent />}/>
                <Route path="/Lazer-e-recracao" element={<LeisureandRecreationContent />}/>
                <Route path="/Valorizacao-da-cultura" element={<ValuingCultureContent />}/>
            </Routes>
           
        </>
    )
}