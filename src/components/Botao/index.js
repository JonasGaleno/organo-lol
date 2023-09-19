import './index.css';

const Botao = (props) => {

    return (
        <button className="botao-form">
            {props.children}
        </button>
    );
}

export default Botao;
