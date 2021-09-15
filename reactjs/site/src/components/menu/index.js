import { MenuStyled } from './styled'

export default function Menu() {
    return (
        <MenuStyled >
            <div className="logo-nome">
                <div className="logo"> <img src="/assets/images/logo-devschool.svg" alt="" /> </div>
                <div className="nome-dev"> <b> Dev</b>School</div>
            </div>
            <div className="barra"></div>
            <div className="opcoes-gerenciamento">
                <div className="texto-opcao">Gerenciamento</div>
                <div className="img-opcao"> <img src="/assets/images/seta-baixo.svg" alt="" /> </div>
            </div>
            <div className="lista-alunos">
                <div className="barra-esquerda"></div>
                <div className="texto-aluno">Aluno</div>
            </div>
        </MenuStyled>
    )
} 