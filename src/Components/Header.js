import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Logo3 from '../Assets/Images/Logo3.png';
import logoFavIcon from '../Assets/Images/fabicon.png';
import { useUserContext } from '../Services/Context/UserContext';
import Avatar from 'react-avatar';
import { BsCart2 } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineMenu } from 'react-icons/ai';
import { useSpring, animated, Transition } from 'react-spring';
import { AnimatePresence, motion } from 'framer-motion';
import UserOptions from './UserOptions';

function Header({ setShowFilters, showFilters }) {
    /* Variables de usuario importadas desde el contexto de usuario */
    const { user, logOutUser } = useUserContext();
    /* Variables para mostrar modal del usuario con opciones disponibles */
    const [isShowPerfilModal, setIsShowPerfilModal] = useState(false);
    /* constante styles que es utilizada para dar animación a tarjeta de usuario con opciones */
    const styles = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        reset: true,
        config: { duration: 300 },
    });
    /* Variable para ver el ancho de la pantalla */
    const [windowWidth, setWidowWidth] = useState();

    /* Función para manejar el cambio de ancho de pantalla */
    const handleWindowWidth = () => {
        setWidowWidth(window.innerWidth);
    };

    /* EventListener para cambiar variable de windowWidth cuando el ancho de la pantalla cambie */
    useEffect(() => {
        window.addEventListener('resize', handleWindowWidth);
        return () => window.removeEventListener('resize', handleWindowWidth);
    }, [handleWindowWidth]);

    return (
        <HeaderContainer>
            <HeaderLeft>
                <AiOutlineMenu color="darkGray" size={25} onClick={() => setShowFilters(!showFilters)} />
                {windowWidth <= 745 ? <img src={logoFavIcon} alt="" className="favIcon" /> : <img src={Logo3} alt="" className="logoCompleto" />}
            </HeaderLeft>
            <HeaderRight>
                <HeaderNav>
                    <div className="cajaTexto">
                        <FiSearch />
                        <input type="text" placeholder="Buscar" />
                    </div>

                    <BsCart2 size={30} />
                </HeaderNav>
                {/* Avatar con opciones de usuario */}
                <AvatarContainer onMouseEnter={() => setIsShowPerfilModal(true)} onMouseLeave={() => setIsShowPerfilModal(false)}>
                    {/* Se utiliza la variable de usuario extraída de la variable de usuario de contexto */}
                    <Avatar name={user?.displayName} size={45} round={true} color={'#eeee'} fgColor={process.env.REACT_APP_PRIMARY_COLOR} />
                    <UserSaludo>
                        <span>¡Bienvenido!</span>
                        <h4>{user?.displayName}</h4>
                    </UserSaludo>

                    <AnimatePresence>
                        {/* Modal de tarjeta de Usuario con opciones */}
                        {isShowPerfilModal && <UserOptions logOutUser={logOutUser} />}
                    </AnimatePresence>
                </AvatarContainer>
            </HeaderRight>
        </HeaderContainer>
    );
}

export default Header;

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    border-bottom: 1px solid #eeee;
`;

const HeaderLeft = styled.div`
    flex: 0.2;
    display: flex;
    justify-content: center;
    align-items: center;

    & > svg {
        cursor: pointer;
        margin-left: 1em;
        margin-right: 2em;
        transition: color 0.3s;

        :hover {
            color: rgba(0, 0, 0, 0.5) !important;
        }
    }

    .logoCompleto {
        width: 150px;
    }

    .favIcon {
        width: 40px !important;
    }
`;
const HeaderCenter = styled.div`
    flex: 0.6;
`;
const HeaderRight = styled.div`
    flex: 0.8;
    display: flex;
    justify-content: flex-end;
`;

const AvatarContainer = styled.div`
    padding: 1rem 1rem 1rem 2rem;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 60px;
    height: 100%;
    min-width: 200px;
    border-left: 1px solid #eeee;

    @media (max-width: 920px) {
        min-width: 100px;
        justify-content: center;
    }

    @media (max-width: 800px) {
        margin-right: 1em;
    }

    :hover {
        cursor: default;
    }

    & > div:first-child {
        margin-right: 1em;

        @media (max-width: 920px) {
            margin-right: 0px;
        }
    }

    & > div:nth-child(2) {
        display: flex;
        align-items: baseline;
        justify-content: center;
        flex-direction: column;
        h4 {
            font-weight: 400;
            font-size: 12px;
            white-space: nowrap;
            margin: 0;
        }
        span {
            font-size: 10px;
            color: rgba(0, 0, 0, 0.5);
        }

        @media (max-width: 920px) {
            display: none;
        }
    }
`;

const HeaderNav = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: darkGray;
    margin-right: 2em;

    @media (max-width: 800px) {
        margin-right: 1em;
    }

    .cajaTexto {
        display: flex;
        align-items: center;
        position: relative;
        border-radius: 8px;
        outline: none;
        border: 1px solid rgba(0, 0, 0, 0.2);
        padding: 0.5em;
        margin-right: 1em;

        svg {
            color: rgba(0, 0, 0, 0.5);
        }
    }

    input[type='text'],
    input[type='password'],
    input[type='email'] {
        outline: none;
        border: none;
        margin-left: 1em;
        background-color: transparent;
    }

    & > svg {
        cursor: pointer;
        transition: all 0.2s;
        :hover {
            color: rgba(0, 0, 0, 0.5);
        }
    }
`;

const UserSaludo = styled.div``;
