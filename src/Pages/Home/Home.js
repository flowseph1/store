import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../../Components/Header';
import { useUserContext } from '../../Services/Context/UserContext';
import HomeContent from './HomeContent';
import LoadingPage from '../../Components/LoadingPage';

function Home() {
    /* Variable de usuario importada desde el contexto de usuario */
    const { user, logOutUser } = useUserContext();
    /* Variable para cambiar navegador izquierdo de filtros */
    const [showFilters, setShowFilters] = useState(true);

    /* Variable para disparar pantalla de cargar */
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(!isLoading);
        }, 3000);
    }, []);

    return (
        /* Contenedor de pagina Home */
        <HomeContainer>
            <AnimatePresence>{isLoading && <LoadingPage />}</AnimatePresence>

            {/* Header */}
            <Header user={user} setShowFilters={setShowFilters} showFilters={showFilters} />
            {/* Contenido de pagina Home */}
            <HomeContent showFilters={showFilters} />
        </HomeContainer>
    );
}

export default Home;

const HomeContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100vh;
`;
