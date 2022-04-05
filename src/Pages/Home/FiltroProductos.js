import React, { useEffect } from 'react';
import ListaProducto from './ListaProducto';

function FiltroProductos({ categorias, filtrosProductos, setfiltrosProductos }) {
    return (
        <ul>
            {categorias.map((categoria, index) => (
                <ListaProducto
                    categoria={categoria}
                    key={categoria.categoryId}
                    filtrosProductos={filtrosProductos}
                    setfiltrosProductos={setfiltrosProductos}
                />
            ))}
        </ul>
    );
}

export default FiltroProductos;
