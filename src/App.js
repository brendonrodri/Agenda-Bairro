import React from "react";
import {Routes, Route} from "react-router-dom"
import {createGlobalStyle} from "styled-components";
import HeaderComponent from "./Components/Header";
import CardsContainerComponent from "./Components/Cards/index"
import EducationContent from "./Components/Cards/Education/content";
import HealthContent from "./Components/Cards/Health/content";
import ValuingCultureContent from "./Components/Cards/ValuingCulture/content";
import LeisureandRecreationContent from "./Components/Cards/Leisureandrecreation/content";
import AccessToTechnologyContent from "./Components/Cards/AcessToTechnology/content";
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
                <Route path="/Acesso-a-tecnologia" element={<AccessToTechnologyContent />}/>
                <Route path="/Saude-de-qualidade" element={<HealthContent />}/>
                <Route path="/Lazer-e-recreacao" element={<LeisureandRecreationContent/>}/>
                <Route path="/Valorizacao-da-cultura" element={<ValuingCultureContent />}/>
            </Routes>
        </>
    )
}