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
                    <Link to="/Sobre">
                        <S.MenuItem>Sobre o bairro</S.MenuItem>
                    </Link>
                </S.Menu>
        </S.NavBar>
    )
}