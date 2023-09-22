import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Funcao from './components/Funcao';
import Rodape from './components/Rodape';

function App() {

  const [funcoes, setFuncoes] = useState([
    {
      id: uuidv4(),
      nome: 'Top',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'Jungle',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Mid',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Atirador',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Suporte',
      cor: '#DB6EBF'
    }
  ]);

  const [campeoes, setCampeoes] = useState([
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Zed',
      regiao: 'Ionia',
      imagem: 'https://prod.api.assets.riotgames.com/public/v1/asset/lol/13.17.1/CHAMPION/238/ICON',
      funcao: 'Mid'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Karthus',
      regiao: 'Ilha das sombras',
      imagem: 'https://prod.api.assets.riotgames.com/public/v1/asset/lol/13.17.1/CHAMPION/30/ICON',
      funcao: 'Jungle'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Akali',
      regiao: 'Ilha das sombras',
      imagem: 'https://prod.api.assets.riotgames.com/public/v1/asset/lol/13.17.1/CHAMPION/84/ICON',
      funcao: 'Top'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Aatrox',
      regiao: 'Shurima',
      imagem: 'https://prod.api.assets.riotgames.com/public/v1/asset/lol/13.17.1/CHAMPION/238/ICON',
      funcao: 'Top'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Jhin',
      regiao: 'Ionia',
      imagem: 'https://prod.api.assets.riotgames.com/public/v1/asset/lol/13.18.1/CHAMPION/202/ICON',
      funcao: 'Atirador'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Braum',
      regiao: 'Freljord',
      imagem: 'https://prod.api.assets.riotgames.com/public/v1/asset/lol/13.17.1/CHAMPION/201/ICON',
      funcao: 'Suporte'
    },
  ]);

  const adicionaCampeao = (campeao) => {
    setCampeoes([...campeoes, campeao]);
  }

  const adicionaFuncao = (funcao) => {
    setFuncoes([...funcoes, funcao]);
  }

  const deletarColaborador = (id) => {
    setCampeoes(campeoes.filter(campeao => campeao.id !== id));
  }

  const alteraCorFuncao = (cor, id) => {
    setFuncoes(funcoes.map(funcao => {
      if (funcao.id === id) {
        funcao.cor = cor;
      }

      return funcao;
    }));
  }

  const resolverFavorito = (id) => {
    setCampeoes(campeoes.map(campeao => {
      if (campeao.id === id) {
        campeao.favorito = !campeao.favorito;
      }

      return campeao;
    }));
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
        aoCadastrarCampeao={campeao => adicionaCampeao(campeao)}
        aoCadastrarFuncao={funcao => adicionaFuncao(funcao)}
        rotas={funcoes.map(funcao => funcao.nome)}
      />
      <section className='funcoes'>
        <h1>Meus campeoes</h1>
        {funcoes.map(funcao => <Funcao 
          key={funcao.nome}
          funcao={funcao}
          campeoes={campeoes.filter(colaborador => colaborador.funcao === funcao.nome)}
          aoDeletar={deletarColaborador}
          mudarCor={alteraCorFuncao}
          aoFavoritar={resolverFavorito}
        />)}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
