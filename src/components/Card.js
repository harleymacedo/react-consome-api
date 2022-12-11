import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div className='container'>
            <p>Professor</p>
            <ul>
                <li>Nome: {props.nome}</li>
                <li>Área: {props.area}</li>
            </ul>
        </div>
    );
}

export default Card;
