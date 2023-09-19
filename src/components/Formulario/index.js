import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './index.css';

const Formulario = (props) => {
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

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoCadastrarCampeao({
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

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do seu campeão</h2>
                <CampoTexto
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
                <CampoTexto
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
                    itens={props.rotas}
                />
                <Botao>
                    Criar campeão
                </Botao>
            </form>
        </section>
    );
}

export default Formulario;
