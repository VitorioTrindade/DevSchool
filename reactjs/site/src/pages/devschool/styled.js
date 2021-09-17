
import styled from 'styled-components'

const Conteudo = styled.div`
  width: 100%;

  .tabelas-e-inputs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2em 3em;
    background: linear-gradient(0deg, #f5f5f5, #f5f5f5), #f5f5f5;
  }
  
  .box-cadastro-editar {
    background-color: #ffffff;
    box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);

    padding: 2em 8em 2em 2em;
    margin-bottom: 2em;
  
    height: 12em;
    width: 100%;
  }
  
  .titulo-barra {
    display: flex;
    flex-direction: row;
    align-items: center;
  
    margin-bottom: 1em;
  }
  
  .barra-novo {
    width: 26px;
    height: 0px;
  
    border: 3px solid #986cdf;
    border-radius: 20px;
    transform: rotate(-90deg);
  
    margin-right: 0.2em;
  }
  
  .titulo-novo {
    color: #3c3939;
    font-weight: bold;
    font-size: 1.8em;
    font-family: 'Roboto', sans-serif;
  }
  
  .inputs-botao {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  
  .inputs-botao div:nth-child(1) {
    margin: 0em 4.25em 0.5em 1.55em !important;
  }
  
  .campo-input {
    margin: 0em 4em 0.5em 0em;
  }
  
  .campo-input > input {
    width: 13.06em;
    height: 2.2em;
    padding: 0.3em .5em;
  
    background-color: #ffffff;
    border: 1px solid #a8a8a8;
    box-sizing: border-box;
    border-radius: 5px;
  
    outline: none;
  }
  
  .botao-cadastro button {
    background-color: #e911c6;
    color: white;
  
    outline: none;
    border-radius: 20px;
    border: none;
  
    padding: 0.5em 1em;
  }
  
  .box-tabela {
    background-color: #ffffff;
    box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);

    padding: 2em;
    width: 100%;
  }
  
  .barra-tabela {
    width: 26px;
    height: 0px;
  
    border: 3px solid #986cdf;
    border-radius: 20px;
    transform: rotate(-90deg);
  
    margin-right: 0.2em;
  }
  
  .titulo-tabela {
    color: #3c3939;
    font-weight: bold;
    font-size: 1.8em;
  }
  
  .tabela-alunos {
    border-collapse: collapse;
  }
  
  table {
    margin-top: 2em;
    box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);

    width: 100%;
  }
  
  thead {
    background-color: #986cdf;
  }

  .coluna-acao {
    width: .1em;
  }
  
  .coluna-acao > button {
    visibility: hidden;
  }

  tr:hover {

      .coluna-acao > button {
          visibility: visible;
      }   

  }

  tbody {
    background-color: #f5f5f5;
  }

  .linha-alternada {
    background-color: #fff;
  }
  
  td {
    text-align: left;
    height: 61.93px;
    padding: .8em;
    color: #6d6868;
    font-weight: 600;
  }
  
  th {
    height: 61.93px;
    text-align: left;
    padding: .8em;
    color: #fff;
  }

  td > button {
    border-radius: 70px;
    background-color: #565656;

    width: 31px;
    height: 31px;

    border: none;
    outline: none;

    padding-top: .25em;
  }
`

const Container = styled.div`
    display: flex;
    flex-direction: row;

    max-width: 100vw;
  
    font-family: 'Roboto', sans-serif;
`

export { Conteudo, Container };