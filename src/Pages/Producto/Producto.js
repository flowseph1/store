import React, { useState } from 'react';
import Header from '../../Components/Header';
import styled from 'styled-components';
import LeftProductContent from './LeftProductContent';
import RitghtProductContent from './RitghtProductContent';
import BreadCumbs from '../../Components/BreadCumbs';
import { motion } from 'framer-motion';

function Producto() {
    return (
        <ProductoContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Header />
            <ProductDetailContainer>
                <BreadCumbs titulo="Producto" />
                <ProductoContent>
                    <LeftProductContent />
                    <RitghtProductContent />
                </ProductoContent>
            </ProductDetailContainer>
        </ProductoContainer>
    );
}

export default Producto;

const ProductoContainer = styled(motion.div)`
    height: 100vh;
    position: relative;
    overflow: hidden;

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

const ProductDetailContainer = styled(motion.div)`
    margin-left: 20%;
    margin-right: 20%;
`;
