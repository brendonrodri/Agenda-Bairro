import React from "react"
import {FaBookOpen} from "react-icons/fa"
import * as S from "../styles"
import "./styles.css"
export default function EducationCard (){
    return(
            <S.Card style={{
            background: "blue"
        }}>
            <S.TitleCardDiv>
                <S.NumberCard>
                    1
                </S.NumberCard>
                <S.TitleCard>Educação de Qualidade</S.TitleCard>             
            </S.TitleCardDiv>
           
            <S.LogoCardDiv>
                <FaBookOpen className="icons" />
            </S.LogoCardDiv>
        </S.Card>        
    )
}