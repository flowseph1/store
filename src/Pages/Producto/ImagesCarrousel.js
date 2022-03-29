import React, { useState } from 'react';
import styled from 'styled-components';

function ImagesCarrousel({ img, index, setPosition }) {
    /* Variable para almacenar true si la imagen respectiva recibió click y asi cambiar el nombre de clase a 'active' */
    const [isActive, setIsActive] = useState(false);

    /* Función para colocar el valor de la posición dependiendo del index de la imagen en cuestión */
    const handlePosition = index => {
        setPosition(-index * 500);
        setIsActive(!isActive);
    };

    return (
        <ImgContainer onClick={() => handlePosition(index)}>
            <img src={img} alt="" />
        </ImgContainer>
    );
}

export default ImagesCarrousel;

const ImgContainer = styled.div`
    padding: 0 0.5em;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: box-shadow 0.3s;

    :hover {
        box-shadow: 0 0 1px darkGray;
    }
`;
