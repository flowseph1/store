import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import sas from '../../Assets/Images/sas.png';
import oneClick from '../../Assets/Images/onClick.png';
import huntress from '../../Assets/Images/huntress.png';
import gremlin from '../../Assets/Images/gremlin.png';
import bitninja from '../../Assets/Images/bitninja.png';
import ItemProduct from './ItemProduct';
import { db } from '../../Services/Firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { async } from '@firebase/util';

function CatalogoProductos() {
    /* Arreglo de los productos */
    const [productos, setProductos] = useState([
        { codigoVenta: 1, nombre: 'SAS', description: 'Líder en analítica de datos desde hace 40 años.', img: sas, precioMin: 0, precioMax: 0 },
        { codigoVenta: 2, nombre: 'OneClick', description: 'Líder en Infraestructura', img: oneClick, precioMin: 0, precioMax: 0 },
        { codigoVenta: 3, nombre: 'Huntress', description: 'Plataforma de Seguridad', img: huntress, precioMin: 0, precioMax: 0 },
        {
            codigoVenta: 4,
            nombre: 'Gremlin',
            description: 'La plataforma de ingeniería del caos más completa',
            img: gremlin,
            precioMin: 0,
            precioMax: 0,
        },
        {
            codigoVenta: 5,
            nombre: 'Bitninja',
            description: 'La única plataforma de ciberseguridad que necesita',
            img: bitninja,
            precioMin: 0,
            precioMax: 0,
        },
        { codigoVenta: 6, nombre: 'Huntress', description: 'Plataforma de Seguridad', img: huntress, precioMin: 0, precioMax: 0 },
    ]);

    /* Arreglo de lista de Favoritos */
    const [favoriteList, setFavoriteList] = useState([]);

    const categoryCollectionRef = collection(db, 'Categorias');

    /* Obtener la categoría y los productos por cada categoría */
    useEffect(() => {
        const getProducts = async () => {
            const data = await getDocs(categoryCollectionRef);

            const CategoryAndProducts = data.docs.map(async doc => {
                let productRef = collection(db, `Categorias/${doc.id}/Productos`);
                let data2 = await getDocs(productRef);
                let Productos = data2.docs.map(doc2 => ({ ...doc2.data(), id: doc2.id }));
                let categoryAndProducts = { ...doc.data(), Productos };
                return categoryAndProducts;
            });

            const productos = (await Promise.all(CategoryAndProducts)).map(value => value);
            console.log(productos);
        };

        getProducts();
    }, []);

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
