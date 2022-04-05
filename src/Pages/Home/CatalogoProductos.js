import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import sas from '../../Assets/Images/sas.png';
import oneClick from '../../Assets/Images/onClick.png';
import huntress from '../../Assets/Images/huntress.png';
import gremlin from '../../Assets/Images/gremlin.png';
import bitninja from '../../Assets/Images/bitninja.png';
import ItemProduct from './ItemProduct';
import { motion } from 'framer-motion';

function CatalogoProductos({ categorias }) {
    /* Arreglo de lista de Favoritos */
    const [favoriteList, setFavoriteList] = useState([]);

    return (
        <CatalogoContainer layout>
            <CatalogoProductosContainer layout>
                {categorias.map(categoria => {
                    return categoria.Productos.map(productos => (
                        <ItemProduct
                            producto={productos}
                            favoriteList={favoriteList}
                            setFavoriteList={setFavoriteList}
                            codigo={productos.id}
                            key={productos.id}
                        />
                    ));
                })}
            </CatalogoProductosContainer>
        </CatalogoContainer>
    );
}

export default CatalogoProductos;

const CatalogoContainer = styled(motion.div)`
    overflow-y: scroll;
    margin-top: 1em;
    padding: 0 2em;

    :hover {
        ::-webkit-scrollbar-thumb {
            background-color: #eeee;
        }
    }
`;

const CatalogoProductosContainer = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(0, 1fr);
    grid-gap: 2em;

    @media (max-width: 1600px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1100px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 800px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
