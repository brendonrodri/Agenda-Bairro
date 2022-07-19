import React from "react";
import {Link} from "react-router-dom";
import {FaBriefcaseMedical} from "react-icons/fa";
import * as S from "../../styles";
export default function HealthComponent (){
    return(
        <Link to="/Saude-de-qualidade" >
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
                    <FaBriefcaseMedical className="icons" />
                </S.LogoCardDiv>
            </S.Card>
        </Link> 
    )
}