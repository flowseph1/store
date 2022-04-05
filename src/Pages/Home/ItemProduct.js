import React, { useEffect, useState } from 'react';
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoMdHeart } from 'react-icons/io';
import { RiShoppingBag3Line } from 'react-icons/ri';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function ItemProduct({ producto, favoriteList, setFavoriteList, codigo }) {
    const formater = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    });

    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavorite = () => {
        favoriteList.filter(favoritos => favoritos === codigo)[0] === codigo
            ? setFavoriteList(favoriteList.filter(favorite => favorite.id !== codigo))
            : setFavoriteList([...favoriteList, codigo]);

        setIsFavorite(!isFavorite);
    };

    /* Variable para navegación */
    const navigate = useNavigate();

    return (
        <ProductoContainer>
            <div className="image">
                <img src={producto.images} alt="" />
                <FavoriteButton onClick={() => handleFavorite()}>{isFavorite ? <IoMdHeart color="#e31b23 " /> : <IoMdHeartEmpty />}</FavoriteButton>
            </div>
            <div className="info">
                <span className="info__id">ID: {producto.id}</span>
                <h2 className="info__nombre">{producto.nombre}</h2>
                <div className="description">{producto.eslogan}</div>
                <div className="precio">
                    <div>
                        <label>Precio:</label>
                        <label className="infoPrice">
                            {formater.format(producto.precioMin)} - {formater.format(producto.precioMax)}
                        </label>
                    </div>
                    <BotonCompra onClick={() => navigate(`/producto/${producto.id}`)}>
                        <RiShoppingBag3Line size={20} />
                    </BotonCompra>
                </div>
            </div>
        </ProductoContainer>
    );
}

export default ItemProduct;

const ProductoContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    min-width: 25%;
    min-height: max-content;

    & > div {
        height: 50%;
        box-sizing: border-box;
    }

    .image {
        position: relative;
        border: 1px solid #eeee;
        padding: 3rem 0;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            object-fit: contain;
            width: 180px;
            height: 100px;
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

        .info__nombre {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .info__id {
            font-size: 0.65em;
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
        font-size: 0.7em;

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

const BotonCompra = styled.div`
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
