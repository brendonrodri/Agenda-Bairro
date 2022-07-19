import React from "react"
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
                
            </S.MainTextContainer>
            <S.TitleMain>
                Os Objetivos de Desenvolvimento Sustentável em Parada Angélica
            </S.TitleMain>
            <S.ParagraphDescription>
                Os Objetivos são ideias para gerar um bem estar social e uma sustabilidade dentro do bairro de Parada Angélica, com medidas que podem ser construídas tanto pela população, de forma autônoma, quanto com a ajuda dos secretariados da Prefeitura e iniciativa privada. 
            </S.ParagraphDescription>
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