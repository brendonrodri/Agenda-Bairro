import React from "react"
import {FaPalette} from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import NavBarComponent from "../../NavBar/navbar"
import { CardsContainer } from ".."
import * as S from "../../styles"
export default function ValuingCultureContent(){
    return(
        <>
            <NavBarComponent />
            <S.ContentContainer>
                <S.ContentBanner style={{
                 background: "#a21942"
             }}>
                    <div>
                        <h3>
                            Objetivo de Desenvolvimento Sustentável
                        </h3>
                        <span>1</span>
                        <h2>
                        Valorizar a cultura
                        </h2>
                        <p>
                           Valorizar a cultura regional
                        </p>
                    </div>
                    <IconContext.Provider value={{size: "15vw"}}>
                        <S.BannerIconDiv>     
                            <FaPalette />
                        </S.BannerIconDiv>
                    </IconContext.Provider>      
                </S.ContentBanner> 
                <S.ContentText>
                   <h3>
                        Objetivo 
                   </h3>
                   <p>
                        Garantir a valorização da cultura regional, moldando a relação com a cultura e gerando visibilidade para os artistas locais.
                   </p>
                   <S.List>
                        <S.ListItem>
                            Organizar rodas de cultura ao menos uma vez por mês.
                        </S.ListItem>
                        <S.ListItem>
                            Ajudar no impulsinamento dos artista locais.
                        </S.ListItem>
                        <S.ListItem>
                            Criar um espaço dedicado para produção cultural, onde artista podem frequentar e produzir. 
                        </S.ListItem>
                   </S.List>
                </S.ContentText>
            </S.ContentContainer>
            <CardsContainer/>
        </>
    );
}
