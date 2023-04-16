import CampoTexto from '../campoTexto'
import './Formulario.css'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'

const Formulario = () => {

    const times = [
        'Programacao',
        'Front-End',
        'Data Science',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Inovacao e Gestao',
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
         console.log('Foi Submitido')
       
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o seu nome" />
                <CampoTexto obrigatorio={true}  label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
                <ListaSuspensa obrigatorio={true}  label="Time" itens={times}/> 
                <Botao texto="Criar card"/>
            </form>
        </section>
    )
}

export default Formulario 