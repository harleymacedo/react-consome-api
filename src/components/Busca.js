import React, {useState} from 'react';

const Busca = () => {

    const [professores, setProfessores] = useState([]);
    const [textoBusca, setTextoBusca] = useState('');

    const buscarProfessores = async () => {
        try {
            const url = 'https://node-express-api-rest-mock.vercel.app/professor/todos';
            const result = await fetch(url);
            const professoresBuscados = await result.json();
            setProfessores(professoresBuscados);
        } catch (error) {
            setProfessores([]);
        }
    }

    const atualizaValor = (event) => {
        setTextoBusca(event.target.value);
    }

    return (
        <div>
            <h3>Busca de Professores</h3>
            <input type='text' placeholder='Nome:' onChange={atualizaValor} />
            <button onClick={buscarProfessores} >Buscar</button>
            {professores.map( (professorAtual) => {
                return (
                    <h4 key={professorAtual.nome}>{professorAtual.nome}</h4>
                );
            } )}
        </div>
    );
}

export default Busca;
