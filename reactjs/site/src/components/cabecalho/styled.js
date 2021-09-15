
import styled from 'styled-components'

const CabecalhoStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  
    padding: 1em 2em;
  
    width: 100%;

  .usu {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #615858;
  }
  
  .imagem-usu {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    margin-right: 0.5em;
  }

  
  .imagem-usu > img {
    width: 44px;
    height: 44px;
    border-radius: 50px;
  }
  
  .bola-notificacao {
    display: flex;
    justify-content: center;
    align-items: center;
    
    border-radius: 50px;
    border: 2px solid white;
    width: 20px;
    height: 20px;
  
    background: #e911c6;
    color: white;

    position: absolute;
  }
  
  .cabecalho-esq {
    display: flex;
    flex-direction: row;
  }
  
  .circulo-botao {
    display: flex;
    justify-content: center;
    align-items: center;
  
    border-radius: 50px;
    width: 44px;
    height: 44px;
  
    background: #986cdf;
  
    margin-left: 0.4em;
  }
  
  .botao-recarregar,
  .botao-sair {
    margin-top: 0.2em;
  }
`

export { CabecalhoStyled };