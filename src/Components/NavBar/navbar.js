import React,{useState, useEffect} from "react"
import { Link } from "react-router-dom"
import * as S from "../styles"
export function NavBarDesktop (){
    return(
        <S.NavBar>
                <S.Menu>
                    <Link to="/">
                        <S.MenuItem>Home</S.MenuItem>
                    </Link> 
                    <Link to="/Sobre">
                        <S.MenuItem>Sobre</S.MenuItem>
                    </Link>
                </S.Menu>
        </S.NavBar>
    )
}
export default function NavBarComponent(){
    const [width, setWidth] =useState(window.innerWidth);
    const breakpoint = 700;
    useEffect(()=>{
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resive", handleResizeWindow);
        return()=>{
            window.removeEventListener("resize", handleResizeWindow);
        };
    },[]);
    if (width < breakpoint){
        return(
            <NavBarMobile />
        )
    }
    return
}
const NavBarMobile = ()=>{
    const [menuswitch, setMenuswitch] = useState()
    return(
        <>
            <S.MenuMobileButton onClick={()=>{
                setMenuswitch(!menuswitch)
                console.log(menuswitch)
            }}>
                <h2>Tópicos</h2>
            </S.MenuMobileButton>
        { menuswitch  && (
                        <S.MenuMobileList>
                        <S.DropDownItem><Link to="/Educacao-de-qualidade">Educação de qualidade</Link> </S.DropDownItem>
                        <S.DropDownItem><Link to="/Acesso-a-tecnologia">Acesso a tecnologia </Link> </S.DropDownItem>
                        <S.DropDownItem><Link to="/Saude-de-qualidade">Saúde de qualidade </Link> </S.DropDownItem>
                        <S.DropDownItem><Link to="/Lazer-e-recreacao">Lazer e recreação</Link> </S.DropDownItem>
                        <S.DropDownItem><Link to="/Valorizacao-da-cultura">Valorização da Cultura</Link> </S.DropDownItem>
                    </S.MenuMobileList>
            ) }
        </>
        
    )
}