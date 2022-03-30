import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Header from '../../Components/Header';
import BreadCumbs from '../../Components/BreadCumbs';
import CarritoRow from './CarritoRow';
import sas from '../../Assets/Images/sas.png';
import oneClick from '../../Assets/Images/onClick.png';
import huntress from '../../Assets/Images/huntress.png';
import gremlin from '../../Assets/Images/gremlin.png';
import bitninja from '../../Assets/Images/bitninja.png';
import SubTotal from './SubTotal';
import CarritoButtons from './CarritoButtons';

function Carrito() {
    /* Arreglo de los productos */
    const [productos, setProductos] = useState([
        { codigoVenta: 1, nombre: 'SAS', description: 'Líder en analítica de datos desde hace 40 años.', img: sas, precioMin: 2300, precioMax: 3000 },
        { codigoVenta: 2, nombre: 'OneClick', description: 'Líder en Infraestructura', img: oneClick, precioMin: 500, precioMax: 1200 },
        { codigoVenta: 3, nombre: 'Huntress', description: 'Plataforma de Seguridad', img: huntress, precioMin: 600, precioMax: 800 },
        {
            codigoVenta: 4,
            nombre: 'Gremlin',
            description: 'La plataforma de ingeniería del caos más completa',
            img: gremlin,
            precioMin: 1200,
            precioMax: 5400,
        },
        {
            codigoVenta: 5,
            nombre: 'Bitninja',
            description: 'La única plataforma de ciberseguridad que necesita',
            img: bitninja,
            precioMin: 2000,
            precioMax: 2200,
        },
        { codigoVenta: 6, nombre: 'Huntress', description: 'Plataforma de Seguridad', img: huntress, precioMin: 2600, precioMax: 3000 },
    ]);
    return (
        <CarritoContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Header />
            <CarritoContent>
                <BreadCumbs titulo="Carro de compra" />
                <BoxContainer>
                    <GridContainer>
                        <CarritoGrid>
                            {productos.map((producto, index) => (
                                <CarritoRow producto={producto} key={index} index={index} />
                            ))}
                        </CarritoGrid>
                    </GridContainer>
                    <SubtotalAndButtons>
                        <SubTotal />
                        <CarritoButtons />
                    </SubtotalAndButtons>
                </BoxContainer>
            </CarritoContent>
        </CarritoContainer>
    );
}

export default Carrito;

const CarritoContainer = styled(motion.div)`
    overflow: hidden;
`;

const CarritoContent = styled(motion.div)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 20%;
    margin-right: 20%;
`;

const GridContainer = styled(motion.div)`
    max-height: 400px;
    min-height: 400px;
    overflow-y: scroll;
    margin-bottom: 2em;

    :hover {
        ::-webkit-scrollbar-thumb {
            background-color: #eeee;
        }
    }
`;

const CarritoGrid = styled(motion.div)`
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 10px;
    padding: 0 1em;
`;

const BoxContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
`;

const SubtotalAndButtons = styled(motion.div)`
    display: flex;
    flex-direction: column;
    margin-bottom: 3em;
    margin-right: 2em;
`;
