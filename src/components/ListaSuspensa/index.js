import './index.css';

const ListaSuspensa = ({valor, aoAlterado, obrigatorio, label, placeholder, itens}) => {

    return (
        <div className="campo-lista">
            <label>
                {label}
            </label>
            <select 
                required={obrigatorio} 
                value={valor} 
                onChange={evento => aoAlterado(evento.target.value)}
            >
                 <option value="">{placeholder}</option>
                {itens.map(item =>  <option key={item}>{item}</option>)}
            </select>
        </div>
    );
}

export default ListaSuspensa;
