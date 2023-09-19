import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Funcao from './components/Funcao';
import Rodape from './components/Rodape';

function App() {

  const funcoes = [
    {
      nome: 'Top',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Jungle',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Mid',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Atirador',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Suporte',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    }
  ]

  const [campeoes, setCampeoes] = useState([]);

  const adicionaCampeao = (campeao) => {
    setCampeoes([...campeoes, campeao]);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
        aoCadastrarCampeao={campeao => adicionaCampeao(campeao)}
        rotas={funcoes.map(funcao => funcao.nome)}
      />
      {funcoes.map(funcao => <Funcao 
        key={funcao.nome} 
        nome={funcao.nome}
        corPrimaria={funcao.corPrimaria}
        corSecundaria={funcao.corSecundaria}
        campeoes={campeoes.filter(colaborador => colaborador.funcao === funcao.nome)}
      />)}
      <Rodape />
    </div>
  );
}

export default App;
