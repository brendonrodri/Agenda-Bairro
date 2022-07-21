import React from "react"
import { NavBarDesktop } from "../NavBar/navbar"
import * as S from "../styles"
export default function HeaderComponent(){
    return(
        <S.Header>
            {NavBarDesktop()}
        </S.Header>
    )
}