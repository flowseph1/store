import React from 'react';
import styled from 'styled-components';
import { GrFormClose } from 'react-icons/gr';
import CatalogoProductos from './CatalogoProductos';
import BreadCumbs from '../../Components/BreadCumbs';

function RightContent() {
    return (
        <RightContainer>
            <CatalogoContainer>
                <CatalogoHeader>
                    <div>
                        <h1>Catalogo</h1>
                        <BreadCumbs />
                        <Tags>
                            <Tag>
                                <div>Analítica</div>
                                <div>
                                    <GrFormClose size={17} />
                                </div>
                            </Tag>
                            <Tag>
                                <div>Infraestructura</div>
                                <div>
                                    <GrFormClose size={17} />
                                </div>
                            </Tag>
                        </Tags>
                    </div>
                </CatalogoHeader>
                <CatalogoProductos />
            </CatalogoContainer>
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

const CatalogoContainer = styled.div`
    padding: 2rem 5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const CatalogoHeader = styled.div`
    h1 {
        font-size: 1.5rem;
        margin: 0;
    }
`;

const Tags = styled.div`
    width: 100%;
    margin-top: 1em;
    display: flex;
    flex-direction: row;
`;
const Tag = styled.div`
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
