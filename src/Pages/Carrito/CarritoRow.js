import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaRegTrashAlt } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';

function CarritoRow({ producto, index }) {
    return (
        <CarritoRowContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <LeftCarritoRow>
                <div className="carritoProductImg">
                    <img src={producto.img} alt="" />
                </div>
                <div className="carritoProductInfo">
                    <ul>
                        <li>
                            <span className="carritoProductoNombre">{producto.nombre}</span>
                        </li>
                        <li>
                            <span className="carritoProductoID">ID: {index}</span>
                        </li>
                    </ul>
                </div>
            </LeftCarritoRow>
            <RightCarritoRow>
                <div className="carritoProductPrice">
                    <ul>
                        <li>
                            <span className="carritoPrecioDolar">$1,200</span>
                        </li>
                        <li>
                            <span className="carritoPrecioLempira">L. 15,000.00</span>
                        </li>
                    </ul>
                </div>
                <div className="carritoProductButtons">
                    <FiEdit size={15} />
                    <FaRegTrashAlt size={15} />
                </div>
            </RightCarritoRow>
        </CarritoRowContainer>
    );
}

export default CarritoRow;

const CarritoRowContainer = styled(motion.div)`
    padding: 1em 3em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #eeee;
`;

const LeftCarritoRow = styled(motion.div)`
    display: flex;
    align-items: center;

    .carritoProductImg {
        margin-right: 2em;
        width: fit-content;
        img {
            object-fit: contain;
            width: 100px;
            height: 100px;
        }
    }

    .carritoProductInfo {
        ul {
            list-style: none;
            margin: 0;
            padding: 0;

            li {
                line-height: 1;
            }
        }
    }

    .carritoProductoID {
        color: darkGray;
        font-size: 0.7em;
    }

    .carritoProductoNombre {
        font-size: 1.5em;
        font-weight: bold;
    }
`;
const RightCarritoRow = styled(LeftCarritoRow)`
    ul {
        list-style: none;
        margin: 0;
        padding: 0;

        li {
            line-height: 1;
        }
    }
    .carritoProductPrice {
        margin-right: 3em;
        text-align: right;

        .carritoPrecioDolar {
            font-size: 1.1em;
            font-weight: 600;
        }

        .carritoPrecioLempira {
            color: darkGray;
            font-size: 0.6em;
        }
    }

    .carritoProductButtons {
        svg {
            :first-child {
                margin-right: 2em;
            }

            cursor: pointer;
            color: darkGray;
            transition: color 0.3s;

            :hover {
                color: rgba(0, 0, 0, 0.5);
            }
        }
    }
`;
