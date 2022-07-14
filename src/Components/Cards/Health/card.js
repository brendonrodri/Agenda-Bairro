import React from "react"
import {FaBookOpen} from "react-icons/fa"
import * as S from "../../styles"
export default function HealthComponent (){
    return(
        <S.Card style={{
            background: "red"
        }}>
            <S.TitleCardDiv>
                <S.NumberCard>
                    3
                </S.NumberCard>
                <S.TitleCard>Saúde de Qualidade</S.TitleCard>             
            </S.TitleCardDiv>
            <S.LogoCardDiv>
                <FaBookOpen className="icons" />
            </S.LogoCardDiv>
        </S.Card>
    )
}