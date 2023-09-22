import hexToRgba from 'hex-to-rgba';
import Campeao from '../Campeao';
import './index.css';

const Funcao = ({funcao, campeoes, aoDeletar, mudarCor, aoFavoritar}) => {

    return (
        (campeoes.length > 0) &&
        <section 
            className='funcao' 
            style={{
                backgroundColor: hexToRgba(funcao.cor, '0.6'), 
                backgroundImage: 'url(/images/fundo.png)',
            }}>
            <input 
                value={funcao.cor} 
                onChange={evento => mudarCor(evento.target.value, funcao.id)} 
                type='color' 
                className='cor-fundo' />
            <h3 style={{borderBottomColor: funcao.cor}}>{funcao.nome}</h3>
            <div className='campeoes'>
                {campeoes.map(campeao => <Campeao
                    key={campeao.id}
                    campeao={campeao}
                    aoDeletar={aoDeletar}
                    corDeFundo={funcao.cor}
                    aoFavoritar={aoFavoritar}
                />)}
            </div>
        </section>
    );
}

export default Funcao;
