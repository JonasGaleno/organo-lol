import './index.css';

const Campeao = ({nome, regiao, imagem, corDeFundo}) => {

    return (
        <div className='campeao'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <p>{regiao}</p>
            </div>
        </div>
    );
}

export default Campeao;
