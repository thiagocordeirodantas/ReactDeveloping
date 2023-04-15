import CampoTexto from '../campoTexto'
import './Formulario.css'
import ListaSuspensa from '../ListaSuspensa'

const Formulario = () => {

    const times =[
        'Programacao',
        'Front-End',
        'Data Science',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Inovacao e Gestao'
    ]

    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto label="Nome" placeholder="Digite o seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
                <ListaSuspensa label="Time" itens={times}/> 
            </form>
        </section>
    )
}

export default Formulario 