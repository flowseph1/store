import { useReducedMotion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../Components/Header';
import { useUserContext } from '../../Services/Context/UserContext';
import { useNavigate } from 'react-router-dom';
import HomeContent from './HomeContent';

function Home() {
    /* Variable de usuario importada desde el contexto de usuario */
    const { user, logOutUser } = useUserContext();
    /* Variable para cambiar navegador izquierdo de filtros */
    const [showFilters, setShowFilters] = useState(true);
    const navigate = useNavigate();

    return (
        /* Contenedor de pagina Home */
        <HomeContainer>
            {/* Header */}
            <Header user={user} setShowFilters={setShowFilters} showFilters={showFilters} />
            {/* Contenido de pagina Home */}
            <HomeContent showFilters={showFilters} />
        </HomeContainer>
    );
}

export default Home;

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;
