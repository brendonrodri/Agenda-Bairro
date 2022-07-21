import React from "react"
import {FaTree} from "react-icons/fa"
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import NavBarComponent from "../../NavBar/navbar"
import { CardsContainer } from ".."
import * as S from "../../styles"
export default function LeisureandRecreationContent(){
    return(
        <>
            <NavBarComponent />
            <S.ContentContainer>
                <S.ContentBanner style={{
                    background: "orange"
                }}>
                    <div>
                        <h3>
                            Objetivo de Desenvolvimento Sustentável
                        </h3>
                        <span>4</span>
                        <h2>
                            Lazer e Recreação
                        </h2>
                        <p>
                            Garantir o lazer da comunidade
                        </p>
                    </div>
                    <IconContext.Provider value={{size: "15vw"}}>
                        <S.BannerIconDiv>     
                            <FaTree />
                        </S.BannerIconDiv>
                    </IconContext.Provider>      
                </S.ContentBanner> 
                <S.ContentText>
                   <h3>
                        Objetivo 
                   </h3>
                   <p>
                     Tem como objetivo garantir o lazer e o reacreação da comunidade, gerando bem estar social:
                   </p>
                   <S.List>
                        <S.ListItem>
                            Garantir e incentivar o acesso para além da comunidade escolar das bibliotecas citadas no <Link to="/Educacao-de-qualidade"> Objetivo 1 </Link>.
                        </S.ListItem>
                        <S.ListItem>
                            Criar espaços de lazer comum, como: praças e hortas comunitárias em espaços abandonados.
                        </S.ListItem>
                        <S.ListItem>
                            Criar espaços de cultura amplos, que visem incluir toda a comunidade, desde a pequena infância até a terceira idade. 
                        </S.ListItem>
                        <S.ListItem>
                            Gerar espaços de lazer para a classe trabalhadora, visto que os trabalhadores daqui tem rotinas excessivas e o horário de trabalho não os permite lazer.
                        </S.ListItem>
                   </S.List>
                </S.ContentText>
            </S.ContentContainer>
            <CardsContainer />
        </>
    );
}