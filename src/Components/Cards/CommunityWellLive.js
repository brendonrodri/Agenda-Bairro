import React from "react"
import {FaBookOpen} from "react-icons/fa"
import * as S from "../styles"
export default function CommunityWellLive (){
    return(
        <S.Card style={{
            background: "green"
        }}>
            <S.TitleCardDiv>
                <S.NumberCard>
                    2
                </S.NumberCard>
                <S.TitleCard>Bem Viver Comunitário</S.TitleCard>             
            </S.TitleCardDiv>
            <S.LogoCardDiv>
                <FaBookOpen className="icons" />
            </S.LogoCardDiv>
        </S.Card>
    )
}