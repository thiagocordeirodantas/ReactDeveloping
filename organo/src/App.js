import Banner from './components/Banner';
import CampoTexto from './components/campoTexto';

function App() {
  return (
    <div className="App">
       <Banner/>
       <CampoTexto label="Nome" placeholder="Digite o seu nome"/>
       <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
       <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem"/>
    </div>
  );
}

export default App;
