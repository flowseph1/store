import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import sas from '../../Assets/Images/sas.png';
import oneClick from '../../Assets/Images/onClick.png';
import huntress from '../../Assets/Images/huntress.png';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { RiShoppingBag3Line } from 'react-icons/ri';
function CatalogoProductos() {
    /* Arreglo de los productos */
    const [productos, setProductos] = useState([
        { codigoVenta: 1, nombre: 'SAS', description: 'Líder en analítica de datos desde hace 40 años.', img: sas, precioMin: 2300, precioMax: 3000 },
        { codigoVenta: 2, nombre: 'OneClick', description: 'Líder en Infraestructura', img: oneClick, precioMin: 500, precioMax: 1200 },
        { codigoVenta: 3, nombre: 'Huntress', description: 'Plataforma de Seguridad', img: huntress, precioMin: 600, precioMax: 800 },
        { codigoVenta: 4, nombre: 'Huntress', description: 'Plataforma de Seguridad', img: huntress, precioMin: 1200, precioMax: 5400 },
        { codigoVenta: 5, nombre: 'Huntress', description: 'Plataforma de Seguridad', img: huntress, precioMin: 2000, precioMax: 2200 },
        { codigoVenta: 6, nombre: 'Huntress', description: 'Plataforma de Seguridad', img: huntress, precioMin: 2600, precioMax: 3000 },
    ]);

    /* Arreglo de lista de favoritos */
    const [favoritesList, setFavoriteList] = useState([]);

    /* Función para agregar producto a Favoritos */
    const handleFavorite = codigo => {
        if (favoritesList.length === 0) {
            setFavoriteList(() => [...favoritesList, codigo]);
        } else {
            const contain = favoritesList.filter(favorite => favorite === codigo);
            if (contain[0] === codigo) {
                setFavoriteList(favoritesList.filter(favorite => favorite !== codigo));
            } else {
                setFavoriteList(() => [...favoritesList, codigo].sort((a, b) => a - b));
            }
        }
    };

    const formater = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    });

    /* Muestra en consola */
    useEffect(() => {
        console.log(favoritesList);
    }, [favoritesList]);

    return (
        <CatalogoProductosContainer>
            {/* Funcion map para mostrar los productos */}
            {productos.map((producto, index) => (
                <Productos key={producto.codigoVenta}>
                    <div className="image">
                        <img src={producto.img} alt="" />

                        <FavoriteButton onClick={() => handleFavorite(producto.codigoVenta)}>
                            {favoritesList.filter(favorite => favorite === producto.codigoVenta)[0] === producto.codigoVenta ? (
                                <AiFillHeart color="#e31b23 " />
                            ) : (
                                <AiOutlineHeart />
                            )}
                        </FavoriteButton>
                    </div>
                    <div className="info">
                        <span>Código: {producto.codigoVenta}</span>
                        <h2>{producto.nombre}</h2>
                        <div className="description">{producto.description}</div>
                        <div className="precio">
                            <div>
                                <label>Precio:</label>
                                <label className="infoPrice">
                                    {formater.format(producto.precioMin)} - {formater.format(producto.precioMax)}
                                </label>
                            </div>
                            <BotonCompra>
                                <RiShoppingBag3Line size={20} />
                            </BotonCompra>
                        </div>
                    </div>
                </Productos>
            ))}
        </CatalogoProductosContainer>
    );
}

export default CatalogoProductos;

const CatalogoProductosContainer = styled.div`
    margin-top: 3em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const Productos = styled.div`
    margin-right: 3em;
    margin-bottom: 3em;

    flex-basis: 200px;
    display: flex;
    flex-direction: column;
    max-width: 280px;
    min-width: 280px;

    & > div {
        height: 100%;
    }

    .image {
        position: relative;
        border: 1px solid #eeee;
        padding: 3rem 2rem;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            object-fit: contain;
            width: 13rem;
        }
    }

    .info {
        border: 1px solid #eeee;
        border-top: 0px;
        padding: 1rem 2rem;

        span {
            color: darkGray;
            font-size: 0.8em;
        }

        h2 {
            margin: 0;
        }
    }

    .description {
        font-size: 1em;
        color: darkGray;
        font-size: 0.8em;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .precio {
        margin: 1em 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        color: darkGray;
        font-size: 0.8em;

        & > div {
            display: flex;
            flex-direction: column;
        }

        .infoPrice {
            color: rgba(0, 0, 0, 0.8);
            font-size: 1.5em;
        }
    }
`;

const FavoriteButton = styled.div`
    position: absolute;
    border-radius: 50%;
    right: 1em;
    top: 1em;
    padding: 0.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #eeee;
    cursor: pointer;
    transition: all 0.3s;

    :hover {
        box-shadow: rgba(0, 0, 0, 0.7) 0 0 1px;
    }
`;

const BotonCompra = styled.div`
    margin-top: 1em;
    padding: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    background-color: ${process.env.REACT_APP_SECONDARY_COLOR};
    border-radius: 50%;
    color: white;
    cursor: pointer;
    transition: all 0.3s;

    svg {
        transition: all 0.3s;
    }

    :hover {
        background-color: ${process.env.REACT_APP_SECONDARY_COLOR_HOVER};

        svg {
            transform: scale(1.1);
        }
    }
`;
