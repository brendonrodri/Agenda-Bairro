import React from "react"
import {FaBookOpen} from "react-icons/fa"
import CardsContainerComponent from ".."
import * as S from "../../styles"
export default function AccessToTechnologyContent(){
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
                        <span>2</span>
                        <h2>
                            Acesso a tecnologia.
                        </h2>
                        <p>
                            Garantir o acesso a tecnologia.
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
                     Tem como objetivo garantir o acesso a tecnologia visando um uma autonomia digital e capacitação para as novas ferramentas do século 21.
                   </p>
                   <S.List>
                        <S.ListItem>
                            Garantir acesso a internet de qualidade no bairro. Por meio de redes sem fio em ponto estratégicos da comunidade.
                        </S.ListItem>
                        <S.ListItem>
                            Criar cursinhos de letramento digital, com foco em bom uso das redes sociais, comunicação e empreendedorimso digital.
                        </S.ListItem>
                        <S.ListItem>
                            Garantir acesso a cursos de tecnologia voltada para o trabalho por meio do acesso a internet de qualidade. 
                        </S.ListItem>
                        <S.ListItem>
                           Criar um "Zap" do bairro com foco em divulgação e publicidade para impactar o comércio local. 
                        </S.ListItem>
                   </S.List>
                </S.ContentText>
            </S.ContentContainer>
            <CardsContainerComponent />
        </>
    );
}