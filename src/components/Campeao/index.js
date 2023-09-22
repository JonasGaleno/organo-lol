import './index.css';
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const Campeao = ({campeao, corDeFundo, aoDeletar, aoFavoritar}) => {

    const favoritar = () => {
        aoFavoritar(campeao.id);
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }

    return (
        <div className='campeao'>
            <AiFillCloseCircle
                size={25} 
                className='deletar' 
                onClick={() => aoDeletar(campeao.id)} 
            />
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={campeao.imagem} alt={campeao.nome}/>
            </div>
            <div className='rodape'>
                <h4>{campeao.nome}</h4>
                <p>{campeao.regiao}</p>
                <div className='favoritar'>
                    {campeao.favorito 
                        ? <AiFillHeart {...propsFavorito} color='#ff0000' /> 
                        : <AiOutlineHeart {...propsFavorito}/>
                    }
                </div>
            </div>
        </div>
    );
}

export default Campeao;
