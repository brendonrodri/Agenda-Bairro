import React from "react"
import * as S from "../styles"
import CommunityWellLive from "./CommunityWellLive"
import EducationCard from "./education"
import HealthComponent from "./Health"
import LeisureandRecreationComponent from "./LeisureandRecreation"
import ValuingCultureComponent from "./ValuingCulture"
import YouthEducationComponent from "./YouthEducation"
export default function CardsContainerComponent (){
    return(
        <S.CardsContainer>
            {EducationCard()}
            {CommunityWellLive()}
            {HealthComponent()}
            {LeisureandRecreationComponent()}
            {YouthEducationComponent()}
            {ValuingCultureComponent()}
            {EducationCard()}
            {CommunityWellLive()}
            {HealthComponent()}
            {LeisureandRecreationComponent()}
            {YouthEducationComponent()}
            {ValuingCultureComponent()}


        </S.CardsContainer>
    )
}