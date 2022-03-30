import React, { useState } from 'react';
import styled from 'styled-components';
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoMdHeart } from 'react-icons/io';
import { RiShoppingBag3Line } from 'react-icons/ri';
import { useNavigate } from 'react-router';

function RitghtProductContent() {
    const [isFavorite, setIsFavorite] = useState(false);
    const navigate = useNavigate();

    return (
        <RightProductContainer>
            <Info>
                <div className="caracteristicasContainer">
                    <div className="caracteristicas">Analítica</div>
                    <div className="caracteristicas">Análisis</div>
                    <div className="caracteristicas">Datos</div>
                </div>
                <div className="tituloNombre">
                    <h1>SAS</h1>
                    <FavoriteButton onClick={() => setIsFavorite(!isFavorite)}>
                        {isFavorite ? <IoMdHeart color="#e31b23 " size={20} /> : <IoMdHeartEmpty size={20} />}
                    </FavoriteButton>
                </div>
                <span className="secondaryText">ID: 1</span>
                <h5>Líder en analítica de datos desde hace 40 años.</h5>
                <p className="description">
                    SAS brinda soluciones capaces de extraer, administrar y recuperar datos de una gran variedad de fuentes y realizar análisis
                    estadísticos sobre ellos, dando la capacidad a su empresa de realizar toma de decisiones oportunas, adaptables y eficientes a sus
                    necesidades.
                </p>
            </Info>
            <ProductoBotones>
                <div className="precioContainer">
                    <div className="estiloPrecio">
                        <div className="label">Precio</div>
                        <div className="dolares">$0&nbsp;</div>
                        <div className="lempira">/ L.0</div>
                    </div>
                </div>
                <div className="btnCarrito" onClick={() => navigate('/carrito')}>
                    <RiShoppingBag3Line size={20} />
                    Agregar al Carro
                </div>
            </ProductoBotones>
        </RightProductContainer>
    );
}

export default RitghtProductContent;

const RightProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    max-width: 500px;

    h1 {
        margin: 0em;
    }

    h5 {
        margin-block: 1em;
        font-weight: normal;
        color: rgba(0, 0, 0, 0.7);
    }

    .description {
        margin: 0.5em 0 2em 0;
        color: rgba(0, 0, 0, 0.7);
        font-size: 0.9em;
    }

    .caracteristicasContainer {
        display: flex;
    }

    .caracteristicas {
        padding: 0.5em 0.8em;
        background-color: #eeee;
        border-radius: 3px;
        font-size: 0.7em;
        margin-right: 1em;
        width: fit-content;
    }

    .secondaryText {
        color: darkGray;
        font-size: 0.8em;
    }
`;

const Info = styled.div`
    .tituloNombre {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1em;
    }
`;

const FavoriteButton = styled.div`
    border-radius: 50%;
    padding: 0.7em;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #eeee;
    cursor: pointer;
    transition: all 0.3s;

    svg {
        transition: all 0.3s;
    }

    :hover {
        box-shadow: rgba(0, 0, 0, 0.7) 0 0 1px;

        svg {
            transform: scale(1.1);
        }
    }
`;

const ProductoBotones = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    font-size: 1em;

    .btnFavorito {
        cursor: pointer;
        border: 1px solid #eee;
        margin-right: 1em;
        display: flex;
        justify-content: center;
        border-radius: 3px;
        transition: box-shadow 0.3s;

        :hover {
            box-shadow: 0 0 1px black;
        }
    }

    .btnCarrito {
        cursor: pointer;
        background-color: ${process.env.REACT_APP_SECONDARY_COLOR};
        border-radius: 8px;
        color: white;
        border: 1px solid #eee;
        padding: 0.8em;
        flex: 0.7;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: background-color 0.3s;

        svg {
            margin-right: 1em;
        }

        :hover {
            background-color: ${process.env.REACT_APP_SECONDARY_COLOR_HOVER};
        }
    }

    .precioContainer {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-direction: row;
        margin-right: 1em;

        span {
            color: darkGray;
            font-size: 0.8em;
        }

        .estiloPrecio {
            display: flex;
            flex-direction: row;
            align-items: center;
            font-size: 1.5em;
            text-align: right;
            position: relative;

            .label {
                top: -15px;
                position: absolute;
                color: darkGray;
                font-size: 0.5em;
            }

            .lempira {
                color: darkGray;
                font-size: 0.5em;
            }
        }
    }
`;
