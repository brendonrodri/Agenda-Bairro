import React from "react"
import {FaBookOpen} from "react-icons/fa"
import {Link} from "react-router-dom"
import * as S from "../../styles"
import "../styles.css"
export default function EducationCard (){
    return(
            <Link to="/Educacaodequalidade">
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
            </Link>
            
    )
}