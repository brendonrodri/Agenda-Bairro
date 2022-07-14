import React from "react"
import {FaBookOpen} from "react-icons/fa"
import * as S from "../../styles"
export default function YouthEducationComponent (){
    return(
        <S.Card style={{
            background: "#0a97d9"
        }}>
            <S.TitleCardDiv>
                <S.NumberCard>
                    5
                </S.NumberCard>
                <S.TitleCard>Educação da Juventude</S.TitleCard>             
            </S.TitleCardDiv>
            <S.LogoCardDiv>
                <FaBookOpen className="icons" />
            </S.LogoCardDiv>
        </S.Card>
    )
}