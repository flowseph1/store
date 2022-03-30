import React from 'react';
import styled from 'styled-components';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineHistory } from 'react-icons/ai';
import { IoExitOutline } from 'react-icons/io5';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';

import { motion } from 'framer-motion';

function UserOptions({ logOutUser }) {
    return (
        <UserOptionContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ul>
                <li>
                    <div>
                        <AiOutlineUser size={20} />
                        <span>Perfil</span>
                    </div>
                </li>
                <li>
                    <div>
                        <BsCart2 size={20} />
                        <span>Carrito</span>
                    </div>
                </li>
                <li>
                    <div>
                        <AiOutlineHeart size={20} />
                        <span>Favoritos</span>
                    </div>
                </li>
                <li>
                    <div>
                        <AiOutlineHistory size={20} />
                        <span>Historial</span>
                    </div>
                </li>
                <li>
                    <div onClick={() => logOutUser()}>
                        <IoExitOutline size={20} />
                        <span>Cerrar sesión</span>
                    </div>
                </li>
            </ul>
        </UserOptionContainer>
    );
}

export default UserOptions;

const UserOptionContainer = styled(motion.div)`
    position: absolute;
    bottom: 5px;
    left: -20%;
    right: 0;
    transform: translate(0%, 100%);
    padding: 1rem;
    border-radius: 8px;
    background-color: white;
    display: flex;
    border: 1px solid #eeee;
    z-index: 99999;

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        font-size: 12px;
        width: 100%;

        li {
            width: 100%;
            cursor: pointer;
            border-radius: 8px;
            transition: all 0.2s;

            :hover {
                background-color: #eeee;
            }

            div {
                display: flex;
                align-items: center;
                padding: 1em;

                svg {
                    margin-right: 1em;

                    @media (max-width: 920px) {
                        display: none;
                    }
                }
            }
        }
    }
`;