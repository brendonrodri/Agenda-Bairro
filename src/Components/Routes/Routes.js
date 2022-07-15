import React from "react-dom"
import {Routes, Route} from "react-router-dom"
import CardsContainerComponent from "../../Components/Cards/index"
import EducationContent from "../../Components/Cards/Education/content";
import HealthContent from "../../Components/Cards/Health/content";
import ValuingCultureContent from "../../Components/Cards/ValuingCulture/content";
import LeisureandRecreationContent from "../../Components/Cards/Leisureandrecreation/content";
import AccessToTechnologyContent  from "../../Components/Cards/AcessToTechnology/content";
import AboutComponent from "../../Components/About/About";
export default function RoutesComponent(){
    return(
        <Routes>
            <Route path="/" element={<CardsContainerComponent />} />
            <Route path="/Educacao-de-qualidade" element={<EducationContent />}/>
            <Route path="/Acesso-a-tecnologia" element={<AccessToTechnologyContent />}/>
            <Route path="/Saude-de-qualidade" element={<HealthContent />}/>
            <Route path="/Lazer-e-recreacao" element={<LeisureandRecreationContent/>}/>
            <Route path="/Valorizacao-da-cultura" element={<ValuingCultureContent />}/>
            <Route path="/Sobre" element={<AboutComponent/>}/>
        </Routes>
    )
}