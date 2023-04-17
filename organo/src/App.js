import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import CampoTexto from './components/campoTexto';
import Time from './components/Time';

function App() {

  const times = [
    {
      nome: 'Programacao',
      corPrimaria: '#57C271',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
       corSecundaria: '#F0F8E2'
    },
    {
      nome: 'DevOps',
      corPrimaria: '#E06B69',
       corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
       corPrimaria: '#DB6EBF',
       corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
        corPrimaria: '#FFBA05',
       corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovacao e Gestao',
        corPrimaria: '#FF8A29',
       corSecundaria: '#FFEEDF'
    },
  ]

const [colaboradores, setColaboradores] = useState([])

const aoNovoColaboradorAdicionado = (colaborador) => {
  console.log(colaborador)
}

  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria}/> )}
  
    </div>
  );
}

export default App;
