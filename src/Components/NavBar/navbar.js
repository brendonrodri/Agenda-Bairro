import React from "react"
import { Link } from "react-router-dom"
import * as S from "../styles"
export default function NavBarComponent (){
    return(
        <S.NavBar>
                <S.Menu>
                    <Link to="/">
                        <S.MenuItem>Home</S.MenuItem>
                    </Link> 
                    <S.MenuItem>Sobre o bairro</S.MenuItem>
                    <S.MenuItem>Objetivos</S.MenuItem>
                </S.Menu>
        </S.NavBar>
    )
}