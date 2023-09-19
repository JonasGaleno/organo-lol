import Campeao from '../Campeao';
import './index.css';

const Funcao = (props) => {

    return (
        (props.campeoes.length > 0) &&
        <section className='funcao' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderBottomColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='campeoes'>
                {props.campeoes.map(campeao => <Campeao
                    corDeFundo={props.corPrimaria}
                    key={campeao.nome}
                    nome={campeao.nome}
                    regiao={campeao.regiao}
                    imagem={campeao.imagem}
                    funcao={campeao.funcao}
                />)}
            </div>
        </section>
    );
}

export default Funcao;
