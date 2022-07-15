import React from "react"
import {FaBookOpen} from "react-icons/fa"
import { Link } from "react-router-dom"
import * as S from "../../styles"
export default function ValuingCultureComponent (){
    return(
        <Link to="/Valorizacao-da-cultura">
            <S.Card style={{
                background: "#a21942"
            }}>
                <S.TitleCardDiv>
                    <S.NumberCard>
                        5
                    </S.NumberCard>
                    <S.TitleCard>Valorização da Cultura</S.TitleCard>             
                </S.TitleCardDiv>
                <S.LogoCardDiv>
                    <FaBookOpen className="icons" />
                </S.LogoCardDiv>
            </S.Card>
        </Link>
        
    )
}