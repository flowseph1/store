import React, { useEffect, useState } from 'react';
import { BsCheck } from 'react-icons/bs';
import styled from 'styled-components';
import { AnimatePresence, motion, AnimateSharedLayout } from 'framer-motion';

function ItemProducto({ producto }) {
    const [mostrarSubproductos, setMostrarSubproductos] = useState(false);

    const handleShow = e => {
        setMostrarSubproductos(!mostrarSubproductos);
    };

    return (
        <AnimateSharedLayout>
            <LiProducto layout>
                {producto.productos ? (
                    <motion.ul layout>
                        <motion.label layout>
                            <input type="checkbox" name={producto.categoria} id={producto.categoria} onClick={e => handleShow(e)} />
                            <motion.div layout className="customCheck">
                                <BsCheck />
                            </motion.div>
                            <motion.div layout className="tituloSubproducto">
                                <span>{producto.categoria}</span>
                            </motion.div>
                        </motion.label>
                        <AnimatePresence>
                            {mostrarSubproductos && (
                                <motion.div layout>
                                    {producto.productos.map((subProducts, index) => (
                                        <motion.div
                                            layout
                                            key={index}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0, transition: { type: 'spring', bounce: 0, duration: 0.1 } }}
                                        >
                                            <li className="subLista" key={index}>
                                                <label>
                                                    <input type="checkbox" name={subProducts.nombre} id={subProducts.nombre} />
                                                    <div className="customCheck">
                                                        <BsCheck />
                                                    </div>
                                                    <span>{subProducts.nombre}</span>
                                                </label>
                                            </li>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.ul>
                ) : (
                    <motion.label layout>
                        <input type="checkbox" name={producto.categoria} id={producto.categoria} onClick={e => handleShow(e)} />
                        <div className="customCheck">
                            <BsCheck />
                        </div>
                        <span>{producto.categoria}</span>
                    </motion.label>
                )}
            </LiProducto>
        </AnimateSharedLayout>
    );
}

export default ItemProducto;

const LiProducto = styled(motion.li)`
    label {
        cursor: pointer;
    }

    .subproductos {
        transition: all 0.3s;
        height: 0;
        overflow: hidden;
    }

    .active {
        height: auto;
        overflow: visible;
    }

    .subLista {
        span {
            white-space: normal;
        }
    }
`;
