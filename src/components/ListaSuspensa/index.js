import './index.css';

const ListaSuspensa = (props) => {

    return (
        <div className="campo-lista">
            <label>
                {props.label}
            </label>
            <select 
                required={props.obrigatorio} 
                value={props.valor} 
                onChange={evento => props.aoAlterado(evento.target.value)}
            >
                 <option value="">{props.placeholder}</option>
                {props.itens.map(item =>  <option key={item}>{item}</option>)}
            </select>
        </div>
    );
}

export default ListaSuspensa;
