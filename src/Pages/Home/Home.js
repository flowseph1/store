import { useReducedMotion } from 'framer-motion';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../Components/Header';
import { useUserContext } from '../../Services/Context/UserContext';
import { useNavigate } from 'react-router-dom';

function Home() {
    const { user, logOutUser } = useUserContext();
    const navigate = useNavigate();

    useEffect(() => {
        !user && navigate('/');
    }, []);

    return (
        <HomeContainer>
            <Header user={user} />
        </HomeContainer>
    );
}

export default Home;

const HomeContainer = styled.div`
    display: flex;
`;
