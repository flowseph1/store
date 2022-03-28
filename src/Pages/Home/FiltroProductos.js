import React from 'react';
import ItemProducto from './ItemProducto';

function FiltroProductos({ productList }) {
    return (
        <ul>
            {productList.map((producto, index) => (
                <ItemProducto producto={producto} key={index} />
            ))}
        </ul>
    );
}

export default FiltroProductos;
