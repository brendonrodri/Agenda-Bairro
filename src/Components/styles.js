import styled from "styled-components"
export const Main = styled.main`
    font-family: 'Roboto', sans-serif;
`;
export const Header = styled.header`
    width: 70%;
    @media (max-width: 480px){
        width: 100%;
        text-align: center;
    }
`;
export const TitleMain = styled.h1`
    font-size: 2.25em;
    margin: 20px;
`;
export const ParagraphDescription = styled.p`
    font-size: 1em;
    margin: 20px;
    line-height: 20px;
`;
export const CardsContainer = styled.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 480px){
        justify-content: center;
    }
`
export const Card = styled.div`
    width: 200px;
    height: 200px;
    display: block;
    color: #fff;
    margin: 10px;
    @media (max-width: 480px){
        width: 80vw;
        height: 300px;
    }
`;
export const TitleCardDiv = styled.div`
    display: flex;
    flex-direction: row;
`;
export const TitleCard = styled.h3`
    font-size: 1.2em;
    margin: 10px;
    text-align: left;
    letter-spacing: 1.3px;
`;
export const NumberCard = styled.h3`
    font-size: 1.6em;
    margin: 10px;
`;
export const LogoCardDiv = styled.div`
    display: flex;
    height: 60%;
    justify-content: center;
    align-items: center;
`