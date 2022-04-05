import React, { useEffect, useState } from 'react';
import { BsCheck } from 'react-icons/bs';
import styled from 'styled-components';
import { AnimatePresence, motion, AnimateSharedLayout } from 'framer-motion';

function ListaProducto({ categoria, filtrosProductos, setfiltrosProductos }) {
    const [mostrarSubproductos, setMostrarSubproductos] = useState(false);

    const handleShow = e => {
        setMostrarSubproductos(!mostrarSubproductos);

        /* Toogle para cambiar propiedad de 'active' cuando el checkBox esta marcado */
        let id = e.currentTarget.id;
        const listaModificada = filtrosProductos.map(productos => {
            let idProduct = productos.id === id ? !productos.active : productos.active; // Valida si el checkBox es el marcado y luego cambia propiedad de active si no se cumple la condición deja el valor de active que tenia.
            return { ...productos, active: idProduct }; // Devuelve un objeto con la propiedad checkBox modificada.
        });

        setfiltrosProductos(listaModificada);
    };

    return (
        <AnimateSharedLayout>
            <LiProducto layout>
                {categoria.Productos ? (
                    <motion.ul layout>
                        <motion.label layout>
                            <input type="checkbox" name={categoria.nombre} id={categoria.categoryId} onClick={e => handleShow(e)} />
                            <motion.div layout className="customCheck">
                                <BsCheck />
                            </motion.div>
                            <motion.div layout className="tituloSubproducto">
                                <span>{categoria.nombre}</span>
                            </motion.div>
                        </motion.label>
                        <AnimatePresence>
                            {mostrarSubproductos && (
                                <motion.div layout>
                                    {categoria.Productos.map(subProducts => (
                                        <motion.div
                                            layout
                                            key={subProducts.id}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0, transition: { type: 'spring', bounce: 0, duration: 0.1 } }}
                                        >
                                            <li className="subLista" key={subProducts.id}>
                                                <div>
                                                    <span>{subProducts.nombre}</span>
                                                </div>
                                                <div className="listLine"></div>
                                            </li>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.ul>
                ) : (
                    <motion.label layout>
                        <input type="checkbox" name={categoria.nombre} id={categoria.categoryId} onClick={e => handleShow(e)} />
                        <div className="customCheck">
                            <BsCheck />
                        </div>
                        <span>{categoria.categoria}</span>
                    </motion.label>
                )}
            </LiProducto>
        </AnimateSharedLayout>
    );
}

export default ListaProducto;

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
        position: relative;
        line-height: 1;

        span {
            white-space: normal;
        }

        div {
            margin-left: 1.5em;
        }

        .listLine {
            position: absolute;
            height: 20px;
            width: 10px;
            border-left: 1px solid rgba(0, 0, 0, 0.1);
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            top: 50%;
            left: -12px;
            transform: translateY(-90%);
        }
    }
`;
