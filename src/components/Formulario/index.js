import { v4 as uuidv4 } from 'uuid'; 
import { useState } from 'react';
import Botao from '../Botao';
import Campo from '../Campo';
import ListaSuspensa from '../ListaSuspensa';
import './index.css';

const Formulario = ({aoCadastrarCampeao, aoCadastrarFuncao, rotas}) => {
    const regioes = [
        'Bandópolis', 
        'Demacia', 
        'Freljord', 
        'Ilha das sombras', 
        'Ionia',
        'Ixtal',
        'Noxus',
        'O vazio',
        'Piltover',
        'Shurima',
        'Targon',
        'Zaun',
        'Águas de sentina'
    ]

    const [nome, setNome] = useState('');
    const [imagem, setImagem] = useState('');
    const [regiao, setRegiao] = useState('');
    const [funcao, setFuncao] = useState('');

    const [nomeNovaFuncao, setNomeNovaFuncao] = useState('');
    const [corNovaFuncao, setCorNovaFuncao] = useState('');

    const aoCriarCampeao = (evento) => {
        evento.preventDefault()
        aoCadastrarCampeao({
            id: uuidv4(),
            favorito: false,
            nome,
            regiao,
            imagem,
            funcao
        });
        setNome('');
        setImagem('');
        setRegiao('');
        setFuncao('');
    }

    const aoCriarFuncao = (evento) => {
        evento.preventDefault()
        aoCadastrarFuncao({
            id: uuidv4(),
            nome: nomeNovaFuncao,
            cor: corNovaFuncao
        });
        setNomeNovaFuncao('');
        setCorNovaFuncao('');
    }

    return (
        <section className="formulario">
            <form onSubmit={aoCriarCampeao}>
                <h2>Preencha os dados para criar o card do seu campeão</h2>
                <Campo
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                    obrigatorio={true}
                    label="Nome" 
                    placeholder="Digite o nome do campeão"
                />
                <ListaSuspensa
                    valor={regiao}
                    aoAlterado={regiao => setRegiao(regiao)}
                    obrigatorio={true}
                    label="Região" 
                    placeholder="Selecione a região do campeão" 
                    itens={regioes}
                />
                <Campo
                    valor={imagem}
                    aoAlterado={imagem => setImagem(imagem)}
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem do campeão"
                />
                <ListaSuspensa
                    valor={funcao}
                    aoAlterado={funcao => setFuncao(funcao)}
                    obrigatorio={true}
                    label="Função"
                    placeholder="Selecione a função do campeão"
                    itens={rotas}
                />
                <Botao>
                    Criar campeão
                </Botao>
            </form>
            <form onSubmit={aoCriarFuncao}>
                <h2>Preencha os dados para criar uma nova função</h2>
                <Campo
                    valor={nomeNovaFuncao}
                    aoAlterado={nomeFuncao => setNomeNovaFuncao(nomeFuncao)}
                    obrigatorio
                    label="Nome" 
                    placeholder="Digite o nome da função"
                />
                <Campo
                    type='color'
                    valor={corNovaFuncao}
                    aoAlterado={cor => setCorNovaFuncao(cor)}
                    obrigatorio
                    label="Cor" 
                    placeholder="Digite a cor da função"
                />
                <Botao>
                    Criar função
                </Botao>
            </form>
        </section>
    );
}

export default Formulario;
