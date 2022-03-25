import React from 'react';
import styled from 'styled-components';
import { BsCheck } from 'react-icons/bs';

function LeftContent() {
    return (
        <LeftContainer>
            <FiltroContainer>
                <TipoProducto>
                    <h4>Producto</h4>
                    <div>
                        <ul>
                            <li>
                                <label>
                                    <input type="checkbox" name="Analítica" id="Analítica" />
                                    <div className="customCheck">
                                        <BsCheck />
                                    </div>
                                    <span>Analítica</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" name="ISaaS" id="ISaaS" />
                                    <div className="customCheck">
                                        <BsCheck />
                                    </div>
                                    <span>ISaaS</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" name="Infraestructura" id="Infraestructura" />
                                    <div className="customCheck">
                                        <BsCheck />
                                    </div>
                                    <span>Infraestructura</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" name="PYMES" id="PYMES" />
                                    <div className="customCheck">
                                        <BsCheck />
                                    </div>
                                    <span>PYMES</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" name="Gobierno" id="Gobierno" />
                                    <div className="customCheck">
                                        <BsCheck />
                                    </div>
                                    <span>Gobierno</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" name="Soluciones_Administrativas" id="Soluciones_Administrativas" />
                                    <div className="customCheck">
                                        <BsCheck />
                                    </div>
                                    <span>Soluciones Administrativas</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" name="Banca_y_Finanzas" id="Banca_y_Finanzas" />
                                    <div className="customCheck">
                                        <BsCheck />
                                    </div>
                                    <span>Banca y Finanzas</span>
                                </label>
                            </li>
                        </ul>
                    </div>
                </TipoProducto>
            </FiltroContainer>
        </LeftContainer>
    );
}

export default LeftContent;

const LeftContainer = styled.div`
    flex: 0.2;
    border-right: 1px solid #eeee;
    display: flex;
    justify-content: center;
`;

const FiltroContainer = styled.div`
    width: 100%;
    padding: 3em 5em;
`;

const TipoProducto = styled.div`
    padding-bottom: 1em;
    border-bottom: 1px solid #eeee;

    h4 {
        margin: 0;
        font-size: 1em;
    }

    & > div {
        ul {
            list-style: none;
            margin: 0;
            padding: 0;
            color: darkGray;
            font-size: 0.9em;
            white-space: nowrap;

            li {
                margin: 0.8em 0;
                cursor: default;
                user-select: none;

                label {
                    display: flex;
                    align-items: center;

                    :hover .customCheck {
                        background-color: rgba(0, 0, 0, 0.1);
                    }

                    :hover {
                        color: rgba(0, 0, 0, 0.6);
                    }

                    .customCheck {
                        height: 1em;
                        width: 1em;
                        background-color: #eeee;
                        border-radius: 2px;
                        margin-right: 1em;
                        transition: all 0.3s;

                        svg {
                            visibility: hidden;
                        }
                    }

                    input[type='checkbox'] {
                        display: none;

                        :checked ~ div {
                            background-color: ${process.env.REACT_APP_SECONDARY_COLOR};
                        }

                        :checked ~ div > svg {
                            color: white;
                            visibility: visible;
                        }

                        :checked ~ span {
                            color: rgba(0, 0, 0, 1);
                        }
                    }
                }
            }
        }
    }
`;
