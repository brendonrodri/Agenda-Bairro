import React from "react"
import {Link} from "react-router-dom"
import {FaTree} from "react-icons/fa"
import * as S from "../../styles"
export default function LeisureandRecreationComponent (){
    return(
        <Link to="/Lazer-e-recreacao">
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
                    <FaTree className="icons" />
                </S.LogoCardDiv>
            </S.Card>
        </Link>
    )
}