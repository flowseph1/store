import React, { useState } from 'react';
import styled from 'styled-components';
import LeftContent from './LeftContent';
import RightContent from './RightContent';

function HomeContent() {
    const [mostrarAlerta, setMostrarAlerta] = useState();
    return (
        <HomeContentContainer>
            <Alertas></Alertas>
            <LeftContent />
            <RightContent setMostrarAlerta={setMostrarAlerta} />
        </HomeContentContainer>
    );
}

export default HomeContent;

const HomeContentContainer = styled.div`
    flex: 1;
    display: flex;
    position: relative;
`;

const Alertas = styled.div`
    position: absolute;
    top: 70px;
    padding: 0.8rem 0.9rem;
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
