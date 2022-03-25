import React from 'react';
import styled from 'styled-components';
import { BsHouseDoor } from 'react-icons/bs';
import { AiOutlineShopping } from 'react-icons/ai';
import { GrFormClose } from 'react-icons/gr';
import CatalogoProductos from './CatalogoProductos';

function RightContent() {
    return (
        <RightContainer>
            <CatalogoContainer>
                <CatalogoHeader>
                    <div>
                        <h1>Catalogo</h1>
                        <Navegador>
                            <Padre>
                                <BsHouseDoor />
                                <div>Principal</div>
                            </Padre>
                            <div>{'>'}</div>
                            <Hijo>
                                <AiOutlineShopping />
                                <div>Productos</div>
                            </Hijo>
                        </Navegador>
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
    flex: 0.8;
`;

const CatalogoContainer = styled.div`
    padding: 2em 5em;
`;

const CatalogoHeader = styled.div`
    h1 {
        margin: 0;
    }
`;

const Navegador = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Padre = styled.div`
    display: flex;
    align-items: center;
    margin-right: 0.5em;

    :hover {
        cursor: pointer;
        text-decoration: underline;
    }

    svg {
        margin-right: 0.5rem;
    }
`;

const Hijo = styled(Padre)`
    margin-left: 0.5em;
    color: darkGray;
`;

const Tags = styled.div`
    width: 100%;
    margin-top: 2em;
    display: flex;
    flex-direction: row;
`;
const Tag = styled.div`
    padding: 0.5rem;
    border-radius: 2px;
    background-color: #eee;
    font-size: 0.7em;
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
