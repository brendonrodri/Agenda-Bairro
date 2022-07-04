import React from "react"
import NavBarComponent from "../NavBar/navbar"
import * as S from "../styles"
export default function HeaderComponent(){
    return(
        <S.Header>
            {NavBarComponent()}
        </S.Header>
    )
}