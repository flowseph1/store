import React from 'react';
import { motion } from 'framer-motion';
import { BiError } from 'react-icons/bi';
import { AiFillCheckCircle } from 'react-icons/ai';
import styled from 'styled-components';

function Alertas({ message, type, exitOn }) {
    const handleExit = () => {
        setTimeout(() => {
            exitOn(null);
        }, 5000);
    };

    return (
        <AlertContainer type={type} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onAnimationEnd={() => handleExit()}>
            {type === 'error' ? <BiError size={15} /> : <AiFillCheckCircle size={15} />}
            <div>{message}</div>
        </AlertContainer>
    );
}

export default Alertas;

const AlertContainer = styled(motion.div)`
    position: absolute;
    top: 70px;
    padding: 1rem 0.9rem;
    border-radius: 8px;
    background-color: ${props => (props.type === 'error' ? process.env.REACT_APP_ERROR_COLOR : process.env.REACT_APP_SUCCESS_COLOR)};
    color: ${props => (props.type === 'error' ? process.env.REACT_APP_ERROR_FONT_COLOR : process.env.REACT_APP_SUCCESS_FONT_COLOR)};
    width: 390px;
    font-size: 13px;
    font-weight: 600;
    display: flex;
    align-items: center;

    svg {
        margin-right: 5px;
    }
`;
