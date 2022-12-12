import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div className='container'>
            <p>N.{props.ordem}</p>
            <ul>
                <li>Nome: {props.nome}</li>
                <li>Área: {props.area}</li>
            </ul>
        </div>
    );
}

export default Card;
