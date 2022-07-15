import React from "react"
import {Link} from "react-router-dom"
import {FaBookOpen} from "react-icons/fa"
import * as S from "../../styles"
export default function LeisureandRecreationComponent (){
    return(
        <Link to="/Lazer-e-recracao">
            <S.Card style={{
            background: "orange"
            }}>
                <S.TitleCardDiv>
                    <S.NumberCard>
                        4
                    </S.NumberCard>
                    <S.TitleCard>Lazer e Recreação</S.TitleCard>             
                </S.TitleCardDiv>
                <S.LogoCardDiv>
                    <FaBookOpen className="icons" />
                </S.LogoCardDiv>
            </S.Card>
        </Link>
    )
}