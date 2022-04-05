import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import FiltroProductos from './FiltroProductos';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { AnimatePresence, motion, AnimateSharedLayout } from 'framer-motion';
import FiltroPrecio from './FiltroPrecio';

function LeftContent({ showFilters, categorias, filtrosProductos, setfiltrosProductos }) {
    const [showProducto, setShowProducto] = useState(true);
    const [showPrecio, setShowPrecio] = useState(true);

    /* Variantes de animación para el filtro de productos */
    const sideBar = {
        hidden: { opacity: 0 },
        visible: {
            opacity: showFilters ? 1 : 0,
            hidden: showFilters ? 'visible' : 'hidden',
            x: showFilters ? 0 : -20,
        },
    };

    return (
        <AnimatePresence>
            <LeftContainer animate={{ flex: showFilters ? 0.2 : 0.00000001, width: showFilters ? '317px' : 0 }}>
                <AnimateSharedLayout>
                    <FiltroContainer layout initial="hidden" animate="visible" variants={sideBar}>
                        <TipoProducto key="producto">
                            <motion.div layout className="tituloFiltro" onClick={() => setShowProducto(!showProducto)}>
                                <motion.h4>Producto</motion.h4>
                                {!showProducto ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp />}
                            </motion.div>
                            <AnimatePresence>
                                {showProducto && (
                                    <motion.div layout key="producto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                        <FiltroProductos
                                            layout
                                            categorias={categorias}
                                            filtrosProductos={filtrosProductos}
                                            setfiltrosProductos={setfiltrosProductos}
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </TipoProducto>
                        <TipoProducto key="precio" layout>
                            <motion.div layout className="tituloFiltro" onClick={() => setShowPrecio(!showPrecio)}>
                                <motion.h4 layout>Precio</motion.h4>
                                {!showPrecio ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp />}
                            </motion.div>
                            <motion.div layout>
                                <AnimatePresence>
                                    {showPrecio && (
                                        <motion.div key="precio" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                            <FiltroPrecio />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </TipoProducto>
                    </FiltroContainer>
                </AnimateSharedLayout>
            </LeftContainer>
        </AnimatePresence>
    );
}

export default LeftContent;

const LeftContainer = styled(motion.div)`
    position: relative;
    border-right: 1px solid #eeee;
    display: flex;
    justify-content: center;
    transition: all 0.3s;
    padding: 0 1em;
    z-index: 9999;
    background-color: white;
    height: 100%;

    @media (max-width: 1335px) {
        flex: 0;
        position: absolute;
    }

    .subLista {
        margin-left: 2em;
    }

    .tituloFiltro {
        display: flex;
        justify-content: space-between;
        align-items: center;

        cursor: pointer;
    }

    .tituloSubproducto {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }

    .subProductLenght {
        font-size: 0.8em;
        margin-left: 2em;
    }
`;

const FiltroContainer = styled(motion.div)`
    padding: 2em;
    @media (max-width: 1335px) {
        overflow: hidden;
    }
`;

const TipoProducto = styled(motion.div)`
    padding-top: 1em;
    padding-bottom: 1em;
    border-bottom: 1px solid #eeee;
    min-width: 220px;
    max-width: 220px;
    font-size: 0.8em;

    h4 {
        margin: 0;
        font-size: 1.5em !important;
    }

    & > div {
        ul {
            list-style: none;
            margin: 0;
            padding: 0;
            color: darkGray;
            white-space: nowrap;

            li {
                margin: 0.8em 0;
                cursor: default;
                user-select: none;

                label {
                    display: flex;
                    align-items: center;

                    :hover .customCheck {
                        background-color: rgba(0, 0, 0, 0.1);
                    }

                    :hover {
                        color: rgba(0, 0, 0, 0.7);
                    }

                    .customCheck {
                        height: 1em;
                        width: 1em;
                        background-color: #eeee;
                        border-radius: 2px;
                        margin-right: 1em;
                        transition: all 0.3s;

                        svg {
                            visibility: hidden;
                        }
                    }

                    input[type='checkbox'] {
                        display: none;

                        :checked ~ .customCheck {
                            background-color: ${process.env.REACT_APP_SECONDARY_COLOR};
                        }

                        :checked ~ div > svg {
                            color: white;
                            visibility: visible;
                        }

                        :checked ~ span {
                            color: rgba(0, 0, 0, 1);
                        }
                    }
                }
            }
        }
    }
`;
