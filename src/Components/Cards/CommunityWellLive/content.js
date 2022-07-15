import React from "react"
import {FaBookOpen} from "react-icons/fa"
import CardsContainerComponent from ".."
import * as S from "../../styles"
export default function CommunityWellContent(){
    return(
        <>
            <S.ContentContainer>
                <S.ContentBanner style={{
                    background: "green"
                }}>
                    <div>
                        <h3>
                            Objetivo de Desenvolvimento Sustentável
                        </h3>
                        <span>1</span>
                        <h2>
                            Bem Viver Comunitário 
                        </h2>
                        <p>
                            Garantir o bem estar e o bem viver da comunidade
                        </p>
                    </div>
                    <div>
                        <FaBookOpen />
                    </div>
                </S.ContentBanner> 
                <S.ContentText>
                   <h3>
                        Objetivo 
                   </h3>
                   <p>
                     Tem como objetivo garantir o bem estar e o bem viver da comunidade, gerando bem estar social:
                   </p>
                   <S.List>
                        <S.ListItem>
                            Garantir e incentivar o acesso para além da comunidade escolar das bibliotecas citadas no Objetivo 1 (inserir um link aqui).
                        </S.ListItem>
                        <S.ListItem>
                            Criar espaços de lazer comum, como: praças e hortas comunitárias em espaços abandonados.
                        </S.ListItem>
                        <S.ListItem>
                            Criar espaços de cultura amplos, que visem incluir toda a comunidade, desde a pequena infância até a terceira idade. 
                        </S.ListItem>
                        <S.ListItem>
                            Gerar espaços de lazer para a classe trabalhadora, visto que os trabalhadores daqui tem rotinas excessivas e o horário de trabalho não os permite lazer, sendo assim.
                        </S.ListItem>
                   </S.List>
                </S.ContentText>
            </S.ContentContainer>
            <CardsContainerComponent />
        </>
    );
}