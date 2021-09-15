import { CabecalhoStyled } from './styled'

export default function Cabecalho() {
    return(
        <CabecalhoStyled>
            <div className="usu">
              <div className="imagem-usu"> 
                <img className="img-cabecalho" src="/assets/images/vito.png" alt="" /> 
                <div className="bola-notificacao"> 3 </div>
              </div>
              <div className="ola-usu">Olá, <b>Vitório Trindade</b></div>
            </div>
            <div className="cabecalho-esq">
              <div className="circulo-botao">
                <div className="botao-recarregar"> <img src="/assets/images/recarregar.svg" alt="" /> </div>
              </div>
              <div className="circulo-botao">
                <div className="botao-sair"> <img src="/assets/images/sair.svg" alt="" /> </div>
              </div>
            </div>
        </CabecalhoStyled>
    )
}