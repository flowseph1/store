import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import sas from '../../Assets/Images/sas.png';
import oneClick from '../../Assets/Images/onClick.png';
import huntress from '../../Assets/Images/huntress.png';
import gremlin from '../../Assets/Images/gremlin.png';
import bitninja from '../../Assets/Images/bitninja.png';
import ItemProduct from './ItemProduct';
import { useNavigate } from 'react-router-dom';

function CatalogoProductos() {
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

    /* Arreglo de lista de Favoritos */
    const [favoriteList, setFavoriteList] = useState([]);

    return (
        <CatalogoContainer>
            <CatalogoProductosContainer>
                {/* Funcion map para mostrar los productos */}
                {productos.map((producto, index) => (
                    <ItemProduct
                        producto={producto}
                        key={index}
                        setFavoriteList={setFavoriteList}
                        favoriteList={favoriteList}
                        codigo={producto.codigoVenta}
                    />
                ))}
            </CatalogoProductosContainer>
        </CatalogoContainer>
    );
}

export default CatalogoProductos;

const CatalogoContainer = styled.div`
    overflow-y: scroll;
    margin-top: 1em;
    padding: 0 2em;

    :hover {
        ::-webkit-scrollbar-thumb {
            background-color: #eeee;
        }
    }
`;

const CatalogoProductosContainer = styled.div`
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
