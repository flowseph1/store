import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../Assets/Images/Logo2.png';

function LoadingPage() {
    return (
        <LoadingPageContainer initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="logoImgContainer">
                <img src={logo} alt="" />
            </div>
        </LoadingPageContainer>
    );
}

export default LoadingPage;

const LoadingPageContainer = styled(motion.div)`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: white;
    z-index: 99999999;
    display: flex;
    justify-content: center;
    align-items: center;

    .logoImgContainer {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 20%;
        }

        ::after {
            content: '';
            position: absolute;
            background-color: white;
            width: 700px;
            height: 700px;
            border-radius: 45%;
            animation: spin 6s ease-in-out infinite alternate;

            @keyframes spin {
                0% {
                    transform: translatey(-40%) rotate(0deg);
                }

                100% {
                    transform: translatey(-100%) rotate(800deg);
                }
            }
        }
    }
`;
