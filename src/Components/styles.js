import styled from "styled-components"
import HeaderImage from "../Assets/background.jpeg"
export const Main = styled.main`
    width: 100%;
    margin: 20px 0;
`;
export const Header = styled.header`
    width: 100%;
    height: 15vh;

  
    @media (max-width: 480px){
        width: 100%;
        text-align: center;
    }
`;
export const NavBar = styled.nav`
   width:100% ;
   height: 10vh;
   display: flex;
   justify-content: center;
   align-items: center;
   border-bottom: 2px solid #000;
`
export const Menu = styled.ul`
    width: 50%;
    display: flex;
    justify-content: center;

`
export const MenuItem = styled.li`
    font-size: 1.3em;
    list-style: none;
    margin: 10px;
`
export const TitleMain = styled.h1`
    font-size: 2.25em;
    margin: 0 auto;
    width: 60%;
`;
export const ParagraphDescription = styled.p`
    font-size: 1.3em;
    margin: 20px auto;
    line-height: 23px;
    width: 60%;
`;
export const CardsContainer = styled.section`
    width: 60%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    @media (max-width: 480px){
        justify-content: center;
    }
`
export const Card = styled.div`
    width: 235px;
    height: 235px;
    display: block;
    color: #fff;
    margin: 15px;
    @media (max-width: 480px){
        width: 80vw;
        height: 300px;
    }
`;
export const TitleCardDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
export const TitleCard = styled.h3`
    font-size: 1.2em;
    margin: 10px;
    text-align: center;
    letter-spacing: 1.3px;
`;
export const NumberCard = styled.h3`
    font-size: 1.6em;
    margin: 15px 10px 10px 15px;
`;
export const LogoCardDiv = styled.div`
    display: flex;
    height: 60%;
    justify-content: center;
    align-items: center;
`