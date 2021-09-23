
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css';

import LoadingBar from 'react-top-loading-bar'

import { Conteudo, Container } from './styled'
import Cabecalho from '../../components/cabecalho'
import Menu from '../../components/menu'

import { useState, useEffect, useRef } from 'react';

import Api from '../../service/api'
const api = new Api();

export default function DevSchool() {

    const [alunos, setAlunos] = useState([]);
    const [nome, setNome] = useState('');
    const [chamada, setChamada] = useState('');
    const [turma, setTurma] = useState('');
    const [curso, setCurso] = useState('');
    const [idAlterando, setIdAlterando] = useState(0);

    const loading = useRef(null);

    async function listar() {
        loading.current.continuousStart();

        let r = await api.listarAlunos();
        setAlunos(r);

        loading.current.complete()
    }

    async function inserir() {
        if (idAlterando === 0) {
            let r = await api.inserirAluno(nome, chamada, curso, turma);

            if (r.erro) 
                toast.error(`${r.erro}`);
            else 
                toast.dark('🗿 Aluno Inserido');
        } else {
            let r = await api.alterar(idAlterando, nome, chamada, curso, turma);

            if (r.erro) 
                toast.error(`${r.erro}`);
            else
                toast.dark('🗿 Aluno alterado');
        }

        limparCampos();
        listar();
    }

    async function limparCampos() {
        setNome('');
        setChamada('');
        setCurso('');
        setTurma('');
        setIdAlterando(0);
    }

    async function remover(id) {
          confirmAlert({
              title: 'Remover aluno',
              message: `Tem certeza que deseja remover o aluno ${id} ?`,
              buttons: [
                  {
                      label: 'Sim',
                      onClick: async () => {
                          let r = await api.remover(id);
                          console.log(r);
                          if (r.erro)
                              toast.error(`${r.erro}`);
                          else {
                            toast.dark('🗿 Aluno removido')
                            listar();
                          }   
                      }
                  },
                  {
                      label: 'Não'
                  }
              ]
          });
    }

    async function editar(item) {
        setNome(item.nm_aluno);
        setChamada(item.nr_chamada);
        setCurso(item.nm_curso);
        setTurma(item.nm_turma);
        setIdAlterando(item.id_matricula);
    }

    useEffect(() => {
        listar();
    }, [])

    return(
        <Container>
            <ToastContainer />
            <LoadingBar color="#e911c6" ref={loading} />
            <Menu />
            <Conteudo>
              <Cabecalho />
              <div className="tabelas-e-inputs">
                <div className="box-cadastro-editar">
                    <div className="titulo-barra">
                    <div className="barra-novo"></div>
                    <div className="titulo-novo"> {idAlterando === 0 ? "Novo Aluno" : "Alterando Aluno " + idAlterando} </div>
                    </div>
                    <div className="inputs-botao">
                        <div className="campo-input"> Nome: <input type="text" value ={nome} onChange={e => setNome(e.target.value)} /> </div>
                        <div className="campo-input"> Curso: <input type="text" value ={curso} onChange={e => setCurso(e.target.value)} /> </div>
                        <div className="campo-input"> Chamada: <input type="text" value ={chamada} onChange={e => setChamada(e.target.value)}/> </div>
                        <div className="campo-input"> Turma: <input type="text" value ={turma} onChange={e => setTurma(e.target.value)}/> </div>
                        <div className="botao-cadastro"> <button onClick={inserir}> {idAlterando == 0 ? "Cadastrar" : "Alterar"} </button> </div>
                    </div>
                </div>
                <div className="box-tabela"> 
                    <div className="titulo-barra">
                        <div className="barra-tabela"></div>
                        <div className="titulo-tabela"> Alunos Matriculados </div>
                    </div>
                    <table className="tabela-alunos"> 
                        <thead>
                            <tr> 
                                <th > ID </th>
                                <th> Nome </th>
                                <th> Chamada </th>
                                <th> Turma </th>
                                <th> Curso </th>
                                <th className="coluna-acao"> </th>
                                <th className="coluna-acao"> </th>
                            </tr> 
                        </thead>

                        <tbody>

                            {alunos.map((item, i) =>
                               <tr className={i % 2 === 0 ? "linha-alternada" : ""}>
                                    <td> {item.id_matricula} </td>
                                    <td title={item.nm_aluno}>
                                       {item.nm_aluno != null && item.nm_aluno.length >= 25 
                                            ? item.nm_aluno.substr(0, 25) + '...'   
                                            : item.nm_aluno} 
                                    </td>
                                    <td> {item.nr_chamada} </td>
                                    <td title= {item.nm_turma}>
                                        {item.nm_turma != null && item.nm_turma.length >= 20
                                             ? item.nm_turma.substr(0, 25) + '...'
                                             : item.nm_turma}
                                    </td>
                                    <td title= {item.nm_curso}>
                                        {item.nm_curso != null && item.nm_curso.length >= 15
                                             ? item.nm_curso.substr(0, 25) + '...'
                                             : item.nm_curso}
                                    </td>
                                    <td className="coluna-acao"> <button onClick={() => editar(item) }> <img src="/assets/images/edit.svg" alt="" /> </button> </td>
                                    <td className="coluna-acao"> <button onClick={() => remover(item.id_matricula) }> <img src="/assets/images/trash.svg" alt="" /> </button> </td>
                               </tr>
                            )}   
                        </tbody>
                    </table>
                </div>
              </div>
            </Conteudo> 
        </Container>
    )
}

