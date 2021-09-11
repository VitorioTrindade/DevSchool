
import { Container } from './styled'
import Lateral from '../../components/lateral'
import Conteudo from './conteudo'


export default function Monkchat() {
    return (
        <Container>
            <Lateral />
            <Conteudo />
        </Container> 
    )
}