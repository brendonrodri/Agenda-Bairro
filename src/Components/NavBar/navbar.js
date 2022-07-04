import React from "react"
import * as S from "../styles"
export default function NavBarComponent (){
    return(
        <S.NavBar>
                <S.Menu>
                    <S.MenuItem>Home</S.MenuItem>
                    <S.MenuItem>Sobre o bairro</S.MenuItem>
                    <S.MenuItem>Objetivos</S.MenuItem>
                </S.Menu>
        </S.NavBar>
    )
}