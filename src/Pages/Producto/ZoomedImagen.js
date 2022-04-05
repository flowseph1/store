import React, { useEffect } from 'react';
import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { GrClose } from 'react-icons/gr';
import { motion } from 'framer-motion';

function ZoomedImagen({ imgs, isZoomed, setIsZoomed }) {
    const handleImgNext = () => {
        if (isZoomed === imgs.length - 1) {
            setIsZoomed(0);
        } else {
            setIsZoomed(isZoomed + 1);
        }
    };

    const handleImgBack = () => {
        if (isZoomed === 0) {
            setIsZoomed(5);
        } else {
            setIsZoomed(isZoomed - 1);
        }
    };

    return (
        <ZoomedImageContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            <motion.div className="zoomedContainer" initial={{ y: 50 }} animate={{ y: 0 }} transition={{ duration: 0.1 }}>
                <div className="zoomedTitulo">
                    <h1>Imagen amplia</h1>
                    <GrClose onClick={() => setIsZoomed(null)} />
                </div>
                <div className="zoomedImagen">
                    <img src={imgs[isZoomed]} alt="" />
                </div>
                <button onClick={() => setIsZoomed(null)}>Cerrar</button>
                <div className="arrowLeft arrows" onClick={() => handleImgBack()}>
                    <IoIosArrowBack size={25} />
                </div>
                <div className="arrowRight arrows" onClick={() => handleImgNext()}>
                    <IoIosArrowForward size={25} />
                </div>
            </motion.div>
        </ZoomedImageContainer>
    );
}

export default ZoomedImagen;

const ZoomedImageContainer = styled(motion.div)`
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    user-select: none;
    background-color: rgba(0, 0, 0, 0.5);

    .zoomedContainer {
        position: relative;
        border-radius: 8px;
        background-color: white;
        padding: 0 3em;
        width: 60%;
        height: 80%;
        display: flex;
        align-items: center;
        flex-direction: column;
        border: 1px solid #eeee;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

        .arrows {
            cursor: pointer;
            padding: 0.5em;
            border-radius: 50%;
            color: darkGray;
            display: flex;
            justify-content: center;
            align-items: center;

            :hover {
                background-color: #eeee;
            }
        }

        .arrowLeft {
            position: absolute;
            left: 10%;
            top: 50%;
            transform: translateY(-50%);
        }

        .arrowRight {
            position: absolute;
            right: 10%;
            top: 50%;
            transform: translateY(-50%);
        }

        .zoomedTitulo {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #eeee;

            svg {
                border-radius: 50%;
                padding: 0.8em;
                cursor: pointer;

                :hover {
                    background-color: #eeee;
                }
            }
        }

        .zoomedImagen {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 80%;

            img {
                width: 70%;
                height: 70%;
                object-fit: contain;
            }
        }

        h1 {
            margin: 0;
            box-sizing: border-box;
            padding: 1em;
            font-size: 1.5em;
        }

        button {
            position: absolute;
            bottom: 5%;
            right: 5%;
            border: 1px solid #eee;
            background-color: white;
            border-radius: 8px;
            padding: 1em;
            cursor: pointer;

            :hover {
                background-color: #eeee;
            }
        }
    }
`;
