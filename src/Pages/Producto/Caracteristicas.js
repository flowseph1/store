import React from 'react';
import styled from 'styled-components';

function Caracteristicas() {
    return (
        <CaracteristicasContainer>
            <h4>Caracteristicas</h4>
            <div className="caracteristicasProducto">
                <div className="caracteristicasTitulo">Tipo</div>
                <div className="caracteristicasValor">Análisis</div>
                <div className="caracteristicasTitulo">Pago</div>
                <div className="caracteristicasValor">Anual</div>
            </div>
        </CaracteristicasContainer>
    );
}

export default Caracteristicas;

const CaracteristicasContainer = styled.div`
    margin-top: 2em;

    h4 {
        margin: 0 0;
        font-size: 1em;
        font-weight: 500;
    }

    .caracteristicasTitulo {
        color: darkGray;
    }

    .caracteristicasValor {
    }

    .caracteristicasProducto {
        display: grid;
        grid-template-columns: 1fr 1fr;
        font-size: 1em;

        div {
            font-size: 0.8em;
            padding-block: 0.5em;
            border-bottom: 1px solid #eeee;
            display: flex;
            align-items: center;
        }
    }
`;
