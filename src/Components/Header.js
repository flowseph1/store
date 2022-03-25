import React, { useState } from 'react';
import styled from 'styled-components';
import Logo3 from '../Assets/Images/Logo3.png';
import { useUserContext } from '../Services/Context/UserContext';
import Avatar from 'react-avatar';
import { BsCart2 } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineHistory } from 'react-icons/ai';
import { IoExitOutline } from 'react-icons/io5';
import { AiOutlineHeart } from 'react-icons/ai';
import { useSpring, animated, Transition } from 'react-spring';

function Header() {
    const { user, logOutUser } = useUserContext();
    const [isShowPerfilModal, setIsShowPerfilModal] = useState(false);

    const styles = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        reset: true,
        config: { duration: 300 },
    });

    return (
        <HeaderContainer>
            <HeaderLeft>
                <img src={Logo3} alt="" />
            </HeaderLeft>
            <HeaderRight>
                <HeaderNav>
                    <div className="cajaTexto">
                        <FiSearch />
                        <input type="text" placeholder="Buscar" />
                    </div>

                    <BsCart2 size={30} />
                </HeaderNav>
                <AvatarContainer onMouseEnter={() => setIsShowPerfilModal(true)} onMouseLeave={() => setIsShowPerfilModal(false)}>
                    <Avatar name={user?.displayName} size={45} round={true} color={'#eeee'} fgColor={process.env.REACT_APP_PRIMARY_COLOR} />
                    <UserSaludo>
                        <span>¡Bienvenido!</span>
                        <h4>{user?.displayName}</h4>
                    </UserSaludo>

                    {isShowPerfilModal && (
                        <Card style={styles}>
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
                        </Card>
                    )}
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
    img {
        width: 150px;
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
    padding: 1rem;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 60px;
    height: 100%;
    min-width: 200px;

    :hover {
        cursor: default;
    }

    & > div:first-child {
        margin-right: 1em;
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
    }
`;

const Card = styled(animated.div)`
    position: absolute;
    bottom: 5px;
    left: 0;
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
                }
            }
        }
    }
`;

const HeaderNav = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: darkGray;
    margin-right: 3em;

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
