import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GrFormClose } from 'react-icons/gr';
import CatalogoProductos from './CatalogoProductos';
import BreadCumbs from '../../Components/BreadCumbs';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';

function RightContent({ categorias, filtrosProductos, setfiltrosProductos }) {
    const [filtroProducto, setFiltroProducto] = useState([]);

    /* Filtro para mostrar solo los productos chequeados. */
    useEffect(() => {
        const filters = filtrosProductos.filter(producto => {
            return producto.active == true;
        });
        setFiltroProducto(filters);
    }, [filtrosProductos]);

    return (
        <RightContainer>
            <AnimateSharedLayout>
                <CatalogoContainer layout>
                    <CatalogoHeader>
                        <div>
                            <BreadCumbs titulo="Catalogo" />
                            <Tags layout>
                                <AnimatePresence>
                                    {filtroProducto.map(filtros => {
                                        return (
                                            <Tag key={filtros.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                                <div>{filtros.nombre}</div>
                                                <div>
                                                    <GrFormClose size={17} />
                                                </div>
                                            </Tag>
                                        );
                                    })}
                                </AnimatePresence>
                            </Tags>
                        </div>
                    </CatalogoHeader>
                    <CatalogoProductos categorias={categorias} layout />
                </CatalogoContainer>
            </AnimateSharedLayout>
        </RightContainer>
    );
}

export default RightContent;

const RightContainer = styled.div`
    flex: ${props => (props.showFilters ? '0.8' : '1')};
    display: flex;
    @media (max-width: 1335px) {
        flex: 1;
    }
`;

const CatalogoContainer = styled(motion.div)`
    padding: 2rem 5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const CatalogoHeader = styled(motion.div)``;

const Tags = styled(motion.div)`
    width: 100%;
    margin-top: 1em;
    display: flex;
    flex-direction: row;
`;
const Tag = styled(motion.div)`
    padding: 0.3rem;
    border-radius: 2px;
    background-color: #eee;
    font-size: 0.6em;
    margin-right: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div:first-child {
        margin-right: 1em;
    }

    & > div:nth-child(2) {
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        :hover {
            background-color: rgba(0, 0, 0, 0.1);
        }
    }

    svg {
        cursor: pointer;
    }
`;
