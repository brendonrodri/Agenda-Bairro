import styled, {createGlobalStyle} from "styled-components"
export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0%;
        box-sizing: border-box;
    }
    html{
        font-family: 'Roboto', sans-serif;
    }
`;
export const Main = styled.main`
    width: 100%;
    margin: 20px 0;
   @media (max-width: 480px){

   }
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
   width:100%;
   height: 10vh;
   display: flex;
   justify-content: center;
   align-items: center;
   border-bottom: 2px solid #000;
   a{
        text-decoration: none;
        color: #000;
    }
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
    margin: 20px;
    width: 60%;
    text-align: left;
    position: relative;
    left: 7%;
    @media(max-width: 400px){
        font-size: 2.2em;
        margin: 20px;
        width: 80%;
    }
`;
export const ParagraphDescription = styled.p`
    font-size: 1.1em;
    margin: 20px;
    line-height: 23px;
    width: 60%;
    position: relative;
    left: 7%;
    @media(max-width: 480px){
        font-size: 1.5em;
        text-align: justify;
        width: 75vw;
    }
`;
export const CardsContainer = styled.section`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    @media (max-width: 480px){
        justify-content: center;
    }
    a{
        text-decoration: none;
    }
`
export const Card = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 5%;
    display: block;
    color: #fff;
    margin: 15px;
    a{
        text-decoration: none;
    }
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
export const ContentBanner = styled.div`
    width: 83%;
    height: 70vh;
    display: flex;
    align-items: center;
    color: #fff;
    background-color: blue;
    padding: 20px;
    div{
        margin: 10px;
    }
    h2{
        font-size: 2.2em;
        padding: 5px;
    }
    h3{
        padding: 5px;
    }
    span{
        font-size: 3.8em;
        font-weight: normal;
        padding: 5px;
    }
    p{
        padding: 5px;
    }
    @media (max-width: 480px){
        flex-direction: column;
        width: 95%;
        height: 80vh;
        h3{
            font-size: 1.7em;
        }
        h2{
            font-size: 2.3em;
        }
        p{
            font-size: 1.3em;
        }
    }
`
export const BannerIconDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
`
export const ContentContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0;
`
export const ContentText = styled.section`
    width: 83%;
    height: 70vh;
    margin: 10px 0;
    p{
        font-size: 1.2em;
        width: 70%;
        padding: 10px;
    }
    h3{
        padding: 10px;
        font-size: 1.6em;
    }
    @media (max-width: 480px){
        width: 100%;
        margin: 20px 0px;
        p{
            font-size: 1.3em;
            width: 95%;
            padding: 15px;
            margin: 0 auto;
        }
        h3{
            font-size: 1.8em;
            padding: 15px;
            margin-left: 13px;
        }
    }
`
export const List = styled.ol`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 15px;
    @media(max-width: 480px){
        height: 80vh;
        width: 100%;
        justify-content: flex-start;
        margin: 40px 0;
        padding: 0px 25px;
    }
`
export const ListItem = styled.li`
    padding: 5px;
    margin: 0px 10px;
    font-size: 1.2em;
    @media(max-width: 480px){
        font-size: 1.1em;
    }
`
export const AboutContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const AboutTitle = styled.h2`
    font-size: 2.25em;
    text-align: center;
`
export const AboutTextArea = styled.article`
    width: 80%;    
    p{
        font-size: 1.2em;
        padding: 10px;
        margin: 3px;
        text-align: justify;
    }
    a{
        color: #000;
        text-decoration: none;
        padding: 10px;
        margin: 3px;
    }
`
export const MainTextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

`
export const MenuMobileButton = styled.button`
    width: 5vw;
    position: absolute;
    top: 7%;
    background: none;
    border: none;
    padding: 15px;
    margin: 20px;
    svg{
        width: 8vw;
        height: 10vh;
        color: #000;
    }
`
export const MenuMobileList = styled.ul`
    display: block;
    color: #fff;
    position: relative;
    top: 10px;
    z-index: 11;
    padding: 20px;
   background-color: #139DE6;
    -webkit-animation: fadeIn .7s ease-in-out;
    -moz-animation: fadeIn .7s ease-in-out;
    -o-animation: fadeIn .7s ease-in-out;
    animation: menufadeIn .7s ease-in-out;
    @-webkit-keyframes menufadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; } 
    }
    @-moz-keyframes menufadeIn {
        0% { opacity: 0;}
        100% { opacity: 1; }
    }
    @-o-keyframes menufadeIn {
        0% { opacity: 0;
            transform: translateY(-30px); }
        100% { opacity: 1; }
    }
    @keyframes menufadeIn {
        from { opacity: 0;          
        }
        to { opacity: 1;           
        }
    }
`
export const DropDownItem = styled.li`
    font-size: 1em;
    padding: 5px;
    list-style: none ;
    @media (max-width: 480px){
        a{
            color: #fff;
            font-size: 1.2em;
            
        }
    }
`