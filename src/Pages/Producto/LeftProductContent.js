import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import sas from '../../Assets/Images/sas.png';
import sas2 from '../../Assets/Images/sas2.png';
import sas3 from '../../Assets/Images/sas3.png';
import sas4 from '../../Assets/Images/sas4.png';
import sas5 from '../../Assets/Images/sas5.png';
import sas6 from '../../Assets/Images/sas6.png';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';
import ZoomedImagen from './ZoomedImagen';
import ImagesCarrousel from './ImagesCarrousel';

function LeftProductContent() {
    /* Variable donde se almacena el calculo del ancho del carrousel principal */
    const [carrouselWidth, setCarrouselWidth] = useState(0);
    /* Variable donde se almacena el calculo del ancho del carrousel secundario */
    const [secondaryCarrouselWidth, setSecondatyCarrouselWidth] = useState(0);
    /* Variable donde se almacena la posición actual del carrousel */
    const [position, setPosition] = useState(0);
    /* Variable donde se almacena la posición de la imagen seleccionada*/
    const [isZoomed, setIsZoomed] = useState(null);
    /* Referencias de los carruseles */
    const carrousel = useRef(null);
    const secondaryCarrousel = useRef(null);

    /* Variable donde se almacenan las direcciones de las imágenes */
    const [imgs, setImgs] = useState([sas, sas2, sas3, sas4, sas5, sas6]);

    /* useEffect para colocar el ancho de los carruseles en sus respectivas variables */
    useEffect(() => {
        setCarrouselWidth(carrousel.current.scrollWidth - carrousel.current.offsetWidth);
        setSecondatyCarrouselWidth(secondaryCarrousel.current.scrollWidth - secondaryCarrousel.current.offsetWidth);
    }, [carrousel, position]);

    /* useEffect para agregar evento de presionar tecla, que escucha la tecla 'Escape' para poder salir del modal de previsualización */
    useEffect(() => {
        window.addEventListener('keydown', e => e.key === 'Escape' && setIsZoomed(null), false);
    }, []);

    /* Funciona para controlar la flecha izquierda */
    const handleLeftArrow = () => {
        const width = 500;
        position !== 0 && setPosition(position + width);
    };

    /* Funciona para controlar la flecha derecha */
    const handelRightArrow = () => {
        const width = 500;
        position !== -carrouselWidth && setPosition(position - width);
    };

    return (
        <LeftProductContainer>
            {/* Modal para ampliar imagen */}
            <AnimatePresence>{isZoomed !== null && <ZoomedImagen imgs={imgs} isZoomed={isZoomed} setIsZoomed={setIsZoomed} />}</AnimatePresence>
            {/* Carrousel Principal de imágenes */}
            <MainCarrousel className="imagenPrincipal" ref={carrousel}>
                <motion.div
                    className="imagenes"
                    drag="x"
                    dragConstraints={{ right: 0, left: -carrouselWidth }}
                    whileTap={{ cursor: 'grabbing' }}
                    animate={{ x: position }}
                    transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}
                >
                    {imgs.map((img, index) => (
                        <div className="imageContent" key={index}>
                            <img src={img} alt="" onClick={() => setIsZoomed(index)} />
                        </div>
                    ))}
                </motion.div>
                {/* Flechas de para mover imágenes de carrousel */}
                <div className="arrowContainer leftArrow" onClick={() => handleLeftArrow()}>
                    <IoIosArrowBack size={20} />
                </div>
                <div className="arrowContainer rightArrow" onClick={() => handelRightArrow()}>
                    <IoIosArrowForward size={20} />
                </div>
            </MainCarrousel>
            {/* Carrousel secundario */}
            <div className="secondaryCarrousel">
                <Carrousel drag="x" dragConstraints={{ right: 0, left: -secondaryCarrouselWidth }} ref={secondaryCarrousel}>
                    {imgs.map((img, index) => (
                        <ImagesCarrousel img={img} index={index} key={index} setPosition={setPosition} />
                    ))}
                </Carrousel>
            </div>
            <Especificaciones>
                <h4>Especificaciones</h4>
                <div className="especificacionesProducto">
                    <div className="tituloEspecificacion">Usuarios</div>
                    <div className="inputContainer">
                        <div className="cajaTexto">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="tituloEspecificacion">Almacenamiento</div>
                    <div className="inputContainer">
                        <div className="cajaTexto">
                            <select name="Almacenamiento" id="">
                                <option value="">10 Gb</option>
                                <option value="">15 Gb</option>
                            </select>
                        </div>
                    </div>
                </div>
            </Especificaciones>
        </LeftProductContainer>
    );
}

export default LeftProductContent;

const LeftProductContainer = styled.div`
    margin-right: 3em;
    flex: 1;
    max-width: 500px;
    min-height: 1000px;

    .secondaryCarrousel {
        overflow: hidden;
    }

    .imagenPrincipal {
        display: flex;
        align-items: center;
        border: 1px solid #eee;
        height: 30%;
        margin-bottom: 1em;
        position: relative;
        overflow-x: hidden;
        user-select: none;

        :hover {
            .arrowContainer {
                opacity: 1;
            }
        }

        img {
            width: 20em;
            object-fit: contain;
            cursor: zoom-in;
            -webkit-user-drag: none;
            -khtml-user-drag: none;
            -moz-user-drag: none;
            -o-user-drag: none;
        }

        svg {
            color: darkGray;
        }

        .arrowContainer {
            transition: opacity 0.5s;
            opacity: 0;
            position: absolute;
            cursor: pointer;
            border-radius: 50%;
            padding: 0.5em;
            display: flex;
            justify-content: center;
            align-items: center;

            :hover {
                background-color: #eee;
            }
        }

        .leftArrow {
            left: 10px;
        }

        .rightArrow {
            right: 10px;
        }
    }
`;

const Carrousel = styled(motion.div)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: grab;

    img {
        object-fit: contain;
        width: 5em;
        -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
    }
`;

const MainCarrousel = styled(motion.div)`
    .imagenes {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 100%;
        .imageContent {
            width: 500px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`;

const Especificaciones = styled.div`
    h4 {
        margin: 1em 0;
        font-size: 0.9em;
    }

    .tituloEspecificacion {
        color: rgba(0, 0, 0, 0.7);
    }

    .especificacionesProducto {
        display: grid;
        grid-template-columns: 1fr 1fr;

        div {
            font-size: 0.8em;
            padding-block: 1em;
            border-bottom: 1px solid #eeee;
            display: flex;
            align-items: center;
        }

        input,
        select {
            background-color: transparent;
            border: none;
            outline: none;
            width: 130px;
            font-size: 1.2em;
        }

        .cajaTexto {
            border-radius: 4px;
            outline: none;
            border: 1px solid rgba(0, 0, 0, 0.2);
            padding: 0.5em;
            width: fit-content;
        }

        .inputContainer {
            display: flex;
            justify-content: flex-end;
        }
    }
`;
