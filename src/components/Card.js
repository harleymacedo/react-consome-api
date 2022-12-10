import React from 'react';

const Card = (props) => {
    return (
        <div>
            <p>Professor</p>
            <ol>
                <li>Nome: {props.nome}</li>
                <li>Área: {props.area}</li>
            </ol>
        </div>
    );
}

export default Card;
