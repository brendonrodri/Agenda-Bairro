import React from "react"
import {FaBookOpen} from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import CardsContainerComponent from ".."
import * as S from "../../styles"
export default function EducationContent(){
    return(
        <>
            <S.ContentContainer>
                <S.ContentBanner>
                    <div>
                        <h3>
                            Objetivo de Desenvolvimento Sustentável
                        </h3>
                        <span>1</span>
                        <h2>
                            Educação de Qualidade 
                        </h2>
                        <p>
                            Acesso a educação de qualidade e inclusiva para a comunidade
                        </p>
                    </div>
                    <IconContext.Provider value={{size: "15vw"}}>
                        <S.BannerIconDiv>     
                            <FaBookOpen />
                        </S.BannerIconDiv>
                    </IconContext.Provider>      
                </S.ContentBanner> 
                <S.ContentText>
                   <h3>
                        Objetivo 
                   </h3>
                   <p>
                        Garantir acesso a educação de qualidade e inclusiva para a comunidade, visando impactar desde a educação básica, até a educação de nível médio, a fim de garantir uma base educacional para incluir os educandos em universidades e cursos técnicos. Como:
                   </p>
                   <S.List>
                        <S.ListItem>
                            Inclusão da família nos processos educacionais, tornando a comunidade escolar e a comunidade familiar uma só. Visando que esses dois espaços são fundamentais no desenvolvimento educacional.
                        </S.ListItem>
                        <S.ListItem>
                            Criação de cursinhos populares, como pré-vestibulares sociais para garantir que a juventude possa garantir uma educação superior
                        </S.ListItem>
                        <S.ListItem>
                            Criação de programas de mentorias de carreira
                        </S.ListItem>
                        <S.ListItem>
                            Criação de uma biblioteca comunitária.
                        </S.ListItem>
                        <S.ListItem>
                            Criar cursinhos em determinadas áreas, como: tecnologia, idiomas, artes.
                        </S.ListItem>
                   </S.List>
                </S.ContentText>
            </S.ContentContainer>
            <CardsContainerComponent />
        </>
    );
}