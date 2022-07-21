import React from "react"
import {FaBriefcaseMedical} from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import NavBarComponent from "../../NavBar/navbar"
import { CardsContainer } from ".."
import * as S from "../../styles"
export default function HealthContent(){
    return(
        <>  
            <NavBarComponent />
            <S.ContentContainer>
                <S.ContentBanner style={{
            background: "red"
             }}>
                    <div>
                        <h3>
                            Objetivo de Desenvolvimento Sustentável
                        </h3>
                        <span>3</span>
                        <h2>
                        Saúde de Qualidade
                        </h2>
                        <p>
                            Acesso a saúde de qualidade.
                        </p>
                    </div>
                    <IconContext.Provider value={{size: "13vw"}}>
                        <S.BannerIconDiv>     
                            <FaBriefcaseMedical />
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
                            Garantir a funcionalidade dos PSF (Programa Saúde da Família) e acompanhamento das famílias.
                        </S.ListItem>
                        <S.ListItem>
                            Garantir acesso à informação sobre os direitos de acesso à saúde da população. 
                        </S.ListItem>
                        <S.ListItem>
                            Criar mutirões de marcação de médicos, exames médicos e exames de rotina, a fim de prevenir doenças e melhorar a saúde da comunidade. 
                        </S.ListItem>
                        <S.ListItem>
                            Incluir a comunidade em programas de controle de doenças sazonais, como a dengue.
                        </S.ListItem>
                        <S.ListItem>
                            Cobrar da prefeitura políticas públicas de saneamento básico.
                        </S.ListItem>
                   </S.List>
                </S.ContentText>
            </S.ContentContainer>
            <CardsContainer />
        </>
    );
}