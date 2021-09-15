
import styled from 'styled-components'

const MenuStyled = styled.div`
    width: 22.2em;
    height: 100vh;
  
    background-color: #2b3031;
  
    color: white;

    position: sticky;
    top: 0px;

  .logo-nome {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  
    height: 5em;
  }
  
  .logo {
    margin-right: 0.3em;
  }
  
  .logo img {
    width: 21.33px;
    height: 26.67px;
  }
  
  .nome-dev {
    font-family: 'Roboto', sans-serif;
    font-size: 1.4em;
    font-weight: 700;
  }
  
  .nome-dev > b {
    color: #ea10c7;
  }
  
  .barra {
    width: 22.2em;
    height: 61px;
  
    background: #262626;
  }
  
  .opcoes-gerenciamento {
    display: flex;
    flex-direction: row;
  
    padding: 1.3em 1em 1.2em 4em;
  
    width: 356px;
    height: 61px;
  }
  
  .texto-opcao {
    margin-right: 9em;
  
    font-family: 1em 'Roboto', sans-serif;
  }
  
  .lista-alunos {
    display: flex;
    flex-direction: row;
    background-color: white;
  
    height: 60px;
  }
  
  .barra-esquerda {
    width: 4px;
    height: 60px;
  
    background-color: #db21bd;
  }
  
  .texto-aluno {
    color: black;
    margin: 1.4em 3.7em 0em;
    font: 1em 'Roboto', sans-serif;
  }
`

export { MenuStyled };