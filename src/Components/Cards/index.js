import React from "react"
import * as S from "../styles"
import CommunityWellLive from "./CommunityWellLive/card"
import EducationCard from "./Education/card"
import HealthComponent from "./Health/card"
import LeisureandRecreationComponent from "./Leisureandrecreation/card"
import ValuingCultureComponent from "./ValuingCulture/card"
import YouthEducationComponent from "./YouthEducation/card"

export default function CardsContainerComponent (){
    return(
        <S.Main>
            <S.TitleMain>
                Os Objetivos de Desenvolvimento Sustentável em Parada Angélica
            </S.TitleMain>
            <S.ParagraphDescription>
                Os Objetivos de Desenvolvimento Sustentável são um apelo global à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade. Estes são os objetivos para os quais as Nações Unidas estão contribuindo a fim de que possamos atingir a Agenda 2030 no Brasil
            </S.ParagraphDescription>
            <S.CardsContainer>
                {EducationCard()}
                {CommunityWellLive()}
                {HealthComponent()}
                {LeisureandRecreationComponent()}
                {ValuingCultureComponent()}
            
            </S.CardsContainer>
        </S.Main>
        
    )
}