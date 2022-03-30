import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { BsCreditCard2Back } from 'react-icons/bs';
import { RiShoppingBag3Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

function CarritoButtons() {
    const navigate = useNavigate();

    return (
        <CarritoButtonsContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ButtonBack onClick={() => navigate('/home')}>
                <RiShoppingBag3Line />
                Seguir comprando
            </ButtonBack>
            <ButtonCheckOut>
                <BsCreditCard2Back /> Proceder a pago
            </ButtonCheckOut>
        </CarritoButtonsContainer>
    );
}

export default CarritoButtons;

const CarritoButtonsContainer = styled(motion.div)`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const ButtonCheckOut = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em 1.5em;
    line-height: 1;
    background-color: ${process.env.REACT_APP_SECONDARY_COLOR};
    border-radius: 8px;
    cursor: pointer;
    color: white;
    transition: background-color 0.3s;
    font-size: 0.9em;

    svg {
        margin-right: 1em;
    }

    :hover {
        background-color: ${process.env.REACT_APP_SECONDARY_COLOR_HOVER};
    }
`;

const ButtonBack = styled(ButtonCheckOut)`
    margin-right: 2em;
    background-color: white;
    color: black;
    font-size: 0.8em;
    border: 1px solid darkGray;

    :hover {
        background-color: #eeee;
    }
`;
