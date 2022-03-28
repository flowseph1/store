import React from 'react';
import Header from '../../Components/Header';
import styled from 'styled-components';
import LeftProductContent from './LeftProductContent';
import RitghtProductContent from './RitghtProductContent';
import BreadCumbs from '../../Components/BreadCumbs';

function Producto() {
    return (
        <ProductoContainer>
            <Header />
            <div className="BreadCumbsContainer">
                <h2>Detalle Producto</h2>
                <BreadCumbs />
            </div>
            <ProductoContent>
                <LeftProductContent />
                <RitghtProductContent />
            </ProductoContent>
        </ProductoContainer>
    );
}

export default Producto;

const ProductoContainer = styled.div`
    height: 100vh;
    overflow: hidden;

    .BreadCumbsContainer {
        width: 100%;
        padding: 2em 0;
        margin-left: 20%;
    }

    h2 {
        font-size: 1.5em;
        margin: 0;
    }
`;

const ProductoContent = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1em;
    overflow-y: scroll;

    :hover {
        ::-webkit-scrollbar-thumb {
            background-color: #eeee;
        }
    }
`;
