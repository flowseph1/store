import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import LeftContent from './LeftContent';
import RightContent from './RightContent';
import { db } from '../../Services/Firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';

function HomeContent({ showFilters }) {
    /* Variable para mostrar alerta */
    const [mostrarAlerta, setMostrarAlerta] = useState();

    /* Lista de categorías y productos */
    const [categorias, setCategorias] = useState([]);

    /* Referencia de colección de categorías de la base de datos */
    const categoryCollectionRef = collection(db, 'Categorias');

    /* Obtener la categoría y los productos por cada categoría */
    useEffect(() => {
        const getProducts = async () => {
            const data = await getDocs(categoryCollectionRef);

            const CategoryAndProducts = data.docs.map(async doc => {
                let productRef = collection(db, `Categorias/${doc.id}/Productos`);
                let data2 = await getDocs(productRef);
                let Productos = data2.docs.map(doc2 => ({ ...doc2.data(), id: doc2.id }));
                let categoryAndProducts = { ...doc.data(), categoryId: doc.id, Productos };
                return categoryAndProducts;
            });

            let products = (await Promise.all(CategoryAndProducts)).map(value => value);
            setCategorias(products);
        };

        getProducts();
    }, []);

    /* objecto de filtros de productos */
    const [filtrosProductos, setfiltrosProductos] = useState([]);

    useEffect(() => {
        const lista = categorias.map(categoria => ({ id: categoria.categoryId, active: false, nombre: categoria.nombre }));
        setfiltrosProductos(lista);
    }, [categorias]);

    return (
        /* Contener de pagina Home */
        <HomeContentContainer>
            {/* Componente Izquierdo de pagina Home */}
            <LeftContent
                showFilters={showFilters}
                categorias={categorias}
                filtrosProductos={filtrosProductos}
                setfiltrosProductos={setfiltrosProductos}
            />
            {/* Componenete Derecho de pagina Home, recibe parametro para poder cambiar variable mostrarAlerta*/}
            <RightContent
                setMostrarAlerta={setMostrarAlerta}
                categorias={categorias}
                filtrosProductos={filtrosProductos}
                setfiltrosProductos={setfiltrosProductos}
            />
        </HomeContentContainer>
    );
}

export default HomeContent;

const HomeContentContainer = styled.div`
    flex: 1;
    display: flex;
    position: relative;
    overflow: hidden;
`;
