import React from 'react';
import styled from 'styled-components';
import { BsGoogle } from 'react-icons/bs';
import { FaUserPlus } from 'react-icons/fa';

function OtrosAccesos() {
    return (
        <OtrosAccesosContainer>
            <Lineas>
                <Linea />
                <Texto>otras opciones</Texto>
                <Linea />
            </Lineas>

            <Botones>
                <Boton1>
                    <BsGoogle color="rgba(0,0,0,0.4)" size="15" />
                    Google
                </Boton1>
                <Boton2>
                    <FaUserPlus color="rgba(0,0,0,0.4)" size="15" />
                    Invitado
                </Boton2>
            </Botones>
        </OtrosAccesosContainer>
    );
}

export default OtrosAccesos;

const OtrosAccesosContainer = styled.div`
    min-width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 40px;
`;

const Lineas = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 30em;
`;

const Texto = styled.div`
    width: fit-content;
    white-space: nowrap;
    font-size: 10px;
    text-align: center;
    color: rgba(0, 0, 0, 0.7);
`;

const Linea = styled.div`
    background-color: rgba(0, 0, 0, 0.2);
    width: 100%;
    display: flex;
    flex-direction: row;
    height: 0.3px;
    margin: 0 20px;
`;

const Botones = styled.div`
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Boton1 = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 15px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-right: 2px;
    cursor: pointer;
    width: 10em;
    font-weight: bold;
    transition: box-shadow 0.3s, color 0.3s;
    color: rgba(0, 0, 0, 0.4);

    :hover {
        box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.7);
        color: rgba(0, 0, 0, 0.5);
        svg {
            color: rgba(0, 0, 0, 0.5) !important;
        }
    }

    svg {
        transition: color 0.3s;
        margin-right: 10px;
    }
`;

const Boton2 = styled(Boton1)`
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
`;
