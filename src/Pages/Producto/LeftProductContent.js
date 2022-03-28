import React from 'react';
import styled from 'styled-components';
import sas from '../../Assets/Images/sas.png';

function LeftProductContent() {
    return (
        <LeftProductContainer>
            <div className="imagenPrincipal">
                <img src={sas} alt="" />
            </div>
            <Especificaciones>
                <h4>Especificaciones</h4>
                <div className="especificacionesProducto">
                    <div className="tituloEspecificacion">Usuarios</div>
                    <div className="inputContainer">
                        <div className="cajaTexto">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="tituloEspecificacion">Almacenamiento</div>
                    <div className="inputContainer">
                        <div className="cajaTexto">
                            <select name="Almacenamiento" id="">
                                <option value="">10 Gb</option>
                                <option value="">15 Gb</option>
                            </select>
                        </div>
                    </div>
                </div>
            </Especificaciones>
        </LeftProductContainer>
    );
}

export default LeftProductContent;

const LeftProductContainer = styled.div`
    margin-right: 3em;
    flex: 1;
    max-width: 500px;
    min-height: 1000px;

    .imagenPrincipal {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #eee;
        height: 30%;

        img {
            width: 20em;
            object-fit: contain;
        }
    }
`;

const Especificaciones = styled.div`
    h4 {
        margin: 1em 0;
        font-size: 0.9em;
    }

    .tituloEspecificacion {
        color: rgba(0, 0, 0, 0.7);
    }

    .especificacionesProducto {
        display: grid;
        grid-template-columns: 1fr 1fr;

        div {
            font-size: 0.8em;
            padding-block: 1em;
            border-bottom: 1px solid #eeee;
            display: flex;
            align-items: center;
        }

        input,
        select {
            background-color: transparent;
            border: none;
            outline: none;
            width: 130px;
            font-size: 1.2em;
        }

        .cajaTexto {
            border-radius: 4px;
            outline: none;
            border: 1px solid rgba(0, 0, 0, 0.2);
            padding: 0.5em;
            width: fit-content;
        }

        .inputContainer {
            display: flex;
            justify-content: flex-end;
        }
    }
`;
