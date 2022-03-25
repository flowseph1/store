import { useReducedMotion } from 'framer-motion';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../Components/Header';
import { useUserContext } from '../../Services/Context/UserContext';
import { useNavigate } from 'react-router-dom';
import HomeContent from './HomeContent';

function Home() {
    const { user, logOutUser } = useUserContext();
    const navigate = useNavigate();

    return (
        <HomeContainer>
            <Header user={user} />
            <HomeContent />
        </HomeContainer>
    );
}

export default Home;

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;
