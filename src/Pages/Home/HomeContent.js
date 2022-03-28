import React, { useState } from 'react';
import styled from 'styled-components';
import LeftContent from './LeftContent';
import RightContent from './RightContent';

function HomeContent({ showFilters }) {
    /* Variable para mostrar alerta */
    const [mostrarAlerta, setMostrarAlerta] = useState();
    return (
        /* Contener de pagina Home */
        <HomeContentContainer>
            {/* Componente de alertas */}
            {/*             <Alertas>hola</Alertas>
             */}{' '}
            {/* Componente Izquierdo de pagina Home */}
            <LeftContent showFilters={showFilters} />
            {/* Componenete Derecho de pagina Home, recibe parametro para poder cambiar variable mostrarAlerta*/}
            <RightContent setMostrarAlerta={setMostrarAlerta} />
        </HomeContentContainer>
    );
}

export default HomeContent;

const HomeContentContainer = styled.div`
    flex: 1;
    display: flex;
    position: relative;
    overflow: hidden;
`;

const Alertas = styled.div`
    position: absolute;
    top: 70px;
    right: 50%;
    transform: translateX(50%);
    padding: 1rem 0.9rem;
    border-radius: 8px;
    background-color: ${process.env.REACT_APP_ERROR_COLOR};
    color: ${process.env.REACT_APP_ERROR_FONT_COLOR};
    width: 390px;
    font-size: 13px;
    font-weight: 600;
    display: flex;
    align-items: center;

    svg {
        margin-right: 5px;
    }
`;
