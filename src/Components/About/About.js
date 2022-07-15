import React from "react"
import * as S from "../styles"
export default function AboutComponent (){
    return(
        <S.AboutContainer>
            <S.AboutTitle>
                Parada Angélica
            </S.AboutTitle>
            <S.AboutTextArea>
                <p>
                    Parada Angélica é um bairro do município de Duque de Caxias, localizado no 3º distrito de Imbariê.<br/>
                    Os moradores do bairro e visitantes podem contar com locomoção ao centro da cidade e/ou até mesmo à Central do Brasil, no Centro da Capital através da Linha Vila Inhomirim, operada pela SuperVia.<br/>
                    Com cerca de 14 mil habitantes, surge ao final do século XIX como ponto de parada de viajantes que subiam o caminho da Serra da Estrela com destino a Petrópolis, daí o nome "Parada Angélica".<br/>
                </p>
                <p>
                    A ligação com a Avenida Automóvel Club tornou o bairro ponto importante na subida de automóveis à cidade serrana, isto é, em fins da década de 1940, mesmo período em que a ligação ferroviária ao Rio de Janeiro, no então Distrito Federal (EF Leopoldina) foi modernizada, com a construção da estação ferroviária atual. Sua população cresceu com o aumento da atividade industrial do município, a partir do deslocamento de populações da então capital do país em busca de melhores condições de moradia. Já nos anos 1980, o bairro assume feições de núcleo urbano, com comércio, DPO (posto policial da PMERJ), escola pública e privada, etc.<br/>
                </p>
                <p>
                    Atualmente com o início das operações do Centro de distribuição das Casas Bahia, localizado na Avenida Automóvel Clube, próximo as proximidades das comunidades do Conjunto Imbariê III e do Jardim Vale do Sol, entre os bairros vizinhos de Santa Lúcia, Imbariê e Taquara, o movimento de cargas e de pessoas pela Automóvel Clube se intensificou, fato esse minorado pela duplicação parcial da estrada. O descaso do poder público é notório em grande parte do bairro, onde serviços essenciais como fornecimento de água, segurança e saúde são extremamente precários.
                </p>
                <span>
                    <a href="https://pt.wikipedia.org/wiki/Parada_Ang%C3%A9lica"> Fonte: pt.wikipedia.org/wiki/Parada_Angélica </a> 
                </span>
            </S.AboutTextArea>
        </S.AboutContainer>
    )
}