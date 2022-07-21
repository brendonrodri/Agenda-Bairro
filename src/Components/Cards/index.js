import React, {useState, useEffect} from "react"
import * as S from "../styles"
import AccessToTechnologyComponent from "./AcessToTechnology/card"
import EducationCard from "./Education/card"
import HealthComponent from "./Health/card"
import LeisureandRecreationComponent from "./Leisureandrecreation/card"
import ValuingCultureComponent from "./ValuingCulture/card"
export default function CardsContainerComponent (){
    return(
        <S.Main>
            <S.MainTextContainer>
            <S.TitleMain>
                    Os Objetivos de Desenvolvimento Sustentável em Parada Angélica
                </S.TitleMain>
                <S.ParagraphDescription>
                    Os Objetivos são ideias para gerar um bem estar social e uma sustabilidade dentro do bairro de Parada Angélica, com medidas que podem ser construídas tanto pela população, de forma autônoma, quanto com a ajuda dos secretariados da Prefeitura e iniciativa privada. 
                </S.ParagraphDescription>
            </S.MainTextContainer>
            
            <S.CardsContainer>
                {EducationCard()}
                {AccessToTechnologyComponent()}
                {HealthComponent()}
                {LeisureandRecreationComponent()}
                {ValuingCultureComponent()}
            </S.CardsContainer>
        </S.Main>
    )
}
export function CardsContainer(){
    const [width, setWidth] =useState(window.innerWidth);
    const breakpoint = 700;
    useEffect(()=>{
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resive", handleResizeWindow);
        return()=>{
            window.removeEventListener("resize", handleResizeWindow);
        };
    },[]);
    if (width < breakpoint){
        return
    }
    return(
        <CardsContainerComponent />
    )
}