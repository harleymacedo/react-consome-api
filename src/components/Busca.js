import React, {useState} from 'react';
import Card from './Card';
import './Busca.css';

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
        <div className='container--busca'>
            <div className='container--busca-formulario'>
                <h3>Busca de Professores</h3>
                <input type='text' placeholder='Nome:' onChange={atualizaValor} />
                <button onClick={buscarProfessores} >Buscar</button>
            </div>
            
            <div className='container--busca-resultado'>
                {professores.map( (professorAtual, index) => {
                    return (
                        <Card nome={professorAtual.nome} area={professorAtual.area} ordem={index} />
                    );
                } )}
            </div>
        </div>
    );
}

export default Busca;
