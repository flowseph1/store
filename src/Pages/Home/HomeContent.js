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
