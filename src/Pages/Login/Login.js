import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from '../../Assets/Images/Logo3.png';
import { Link } from 'react-router-dom';
import { BiLockOpenAlt } from 'react-icons/bi';
import { CgRename } from 'react-icons/cg';
import { HiOutlineMail } from 'react-icons/hi';
import { BsEye } from 'react-icons/bs';
import { BsEyeSlash } from 'react-icons/bs';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import OtrosAccesos from './OtrosAccesos';
import Tabs from './Tabs';
import { AnimatePresence, motion } from 'framer-motion';

function Login() {
    const onSubmit = event => {
        event.preventDefault();
    };
    const [selectedTab, setSelectedTab] = useState(0);
    const [showPass, setShowPass] = useState(true);

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [comfirmPassword, setComfirmPassword] = useState('');

    const [validation, setValidation] = useState(false);

    useEffect(() => {
        const validaciones = () => {
            const upperCase = new RegExp('(?=.*[A-Z])');
            const number = new RegExp('(?=.*[0-9])');
            const specialChar = new RegExp('(?=.*[!@#$%^&*])');
            const eightChar = new RegExp('(?=.{8,})');
            const emailCheck = new RegExp('(?=.*[@])');

            email.length !== 0 &&
            name.length !== 0 &&
            upperCase.test(password) &&
            number.test(password) &&
            specialChar.test(password) &&
            eightChar.test(password) &&
            emailCheck.test(email) &&
            password === comfirmPassword
                ? setValidation(true)
                : setValidation(false);
        };
        validaciones();
    }, [email, name, password, comfirmPassword]);

    return (
        <LoginContainer>
            <AnimatePresence>
                <motion.div key="tabAndLogo" initial="enter" animate="in" exit="exit" transition={{ delay: 0.2 }}>
                    <Logo>
                        <img src={logo} alt="" width="400" />
                        <div>store</div>
                    </Logo>
                    <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                </motion.div>
            </AnimatePresence>

            {selectedTab === 1 || selectedTab === 0 ? (
                <FormularioAcceso>
                    <form onSubmit={onSubmit}>
                        <AnimatePresence>
                            <motion.div
                                key="login"
                                initial="enter"
                                animate="in"
                                exit="exit"
                                variants={{
                                    enter: { opacity: 0, x: 300 },
                                    in: { opacity: 1, x: 0 },
                                    exit: { opacity: 0, y: -300 },
                                }}
                                transition={{ delay: 0.1 }}
                            >
                                <div className="cajaTexto">
                                    <HiOutlineMail />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        autoCorrect="off"
                                        autoCapitalize="off"
                                        spellCheck="false"
                                        onChange={e => setEmail(e.currentTarget.value)}
                                        value={email}
                                    />
                                </div>
                                <div className="cajaTexto">
                                    <BiLockOpenAlt />
                                    <input
                                        type={showPass ? 'password' : 'text'}
                                        placeholder="Contraseña"
                                        onChange={e => setPassword(e.currentTarget.value)}
                                        value={password}
                                    />
                                    {!showPass ? (
                                        <BsEye onClick={() => setShowPass(!showPass)} style={{ cursor: 'pointer' }} size={18} />
                                    ) : (
                                        <BsEyeSlash onClick={() => setShowPass(!showPass)} style={{ cursor: 'pointer' }} size={18} />
                                    )}
                                </div>
                                <Link to="/home">
                                    <input type="submit" value="Ingresar" />
                                </Link>
                            </motion.div>
                        </AnimatePresence>
                    </form>
                </FormularioAcceso>
            ) : (
                <FormularioAcceso>
                    <AnimatePresence>
                        <motion.div
                            key="register"
                            initial="enter"
                            animate="in"
                            exit="exit"
                            variants={{
                                enter: { opacity: 0, x: 300 },
                                in: { opacity: 1, x: 0 },
                                exit: { opacity: 0, x: -300 },
                            }}
                            transition={{ delay: 0.1 }}
                        >
                            <form onSubmit={onSubmit}>
                                <div className="cajaTexto">
                                    <CgRename />
                                    <input
                                        type="text"
                                        placeholder="Nombre Completo"
                                        autoCapitalize="words"
                                        onChange={e => setName(e.currentTarget.value)}
                                        value={name}
                                    />
                                </div>
                                <div className="cajaTexto">
                                    <HiOutlineMail />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        onChange={e => setEmail(e.currentTarget.value)}
                                        value={email}
                                        spellCheck={false}
                                    />
                                    {email.length > 0 && (
                                        <Validation>
                                            {RegExp('(?=.*[@])').test(email) ? (
                                                <>
                                                    <div>
                                                        Formato correcto <AiOutlineCheckCircle size={13} color="#076407" />
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <div>
                                                        Formato incorrecto <AiOutlineCloseCircle size={13} color="#ae0909" />
                                                    </div>
                                                </>
                                            )}
                                        </Validation>
                                    )}
                                </div>
                                <div className="cajaTexto">
                                    <BiLockOpenAlt />
                                    <input
                                        type={showPass ? 'password' : 'text'}
                                        placeholder="Contraseña"
                                        onChange={e => setPassword(e.currentTarget.value)}
                                        value={password}
                                    />
                                    {!showPass ? (
                                        <BsEye onClick={() => setShowPass(!showPass)} style={{ cursor: 'pointer' }} size={18} />
                                    ) : (
                                        <BsEyeSlash onClick={() => setShowPass(!showPass)} style={{ cursor: 'pointer' }} size={18} />
                                    )}
                                    {password.length > 0 && (
                                        <Validation>
                                            {RegExp('(?=.{8,})').test(password) ? (
                                                <>
                                                    <div>
                                                        8 caracteres <AiOutlineCheckCircle size={13} color="#076407" />
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <div>
                                                        8 caracteres <AiOutlineCloseCircle size={13} color="#ae0909" />
                                                    </div>
                                                </>
                                            )}
                                            {RegExp('(?=.*[A-Z])').test(password) ? (
                                                <>
                                                    <div>
                                                        1 letra mayúscula <AiOutlineCheckCircle size={13} color="#076407" />
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <div>
                                                        1 letra mayúscula <AiOutlineCloseCircle size={13} color="#ae0909" />
                                                    </div>
                                                </>
                                            )}
                                            {RegExp('(?=.*[!@#$%^&*])').test(password) ? (
                                                <>
                                                    <div>
                                                        1 letra especial <AiOutlineCheckCircle size={13} color="#076407" />
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <div>
                                                        1 letra especial <AiOutlineCloseCircle size={13} color="#ae0909" />
                                                    </div>
                                                </>
                                            )}
                                            {RegExp('(?=.*[0-9])').test(password) ? (
                                                <>
                                                    <div>
                                                        1 número <AiOutlineCheckCircle size={13} color="#076407" />
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <div>
                                                        1 número <AiOutlineCloseCircle size={13} color="#ae0909" />
                                                    </div>
                                                </>
                                            )}
                                        </Validation>
                                    )}
                                </div>
                                <div className="cajaTexto">
                                    <BiLockOpenAlt />
                                    <input
                                        type={showPass ? 'password' : 'text'}
                                        placeholder="Confirmar Contraseña"
                                        onChange={e => setComfirmPassword(e.currentTarget.value)}
                                        value={comfirmPassword}
                                    />
                                    {password.length > 7 && (
                                        <Validation>
                                            {password === comfirmPassword ? (
                                                <>
                                                    <div>
                                                        Contraseña coincide <AiOutlineCheckCircle size={13} color="#076407" />
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <div>
                                                        Contraseña no coincide <AiOutlineCloseCircle size={13} color="#ae0909" />
                                                    </div>
                                                </>
                                            )}
                                        </Validation>
                                    )}
                                </div>
                                <input type="submit" value="Registrar" className={validation ? '' : 'disabled'} {...(!validation && 'disabled')} />
                            </form>
                        </motion.div>
                    </AnimatePresence>
                </FormularioAcceso>
            )}

            <OtrosAccesos />
        </LoginContainer>
    );
}

export default Login;

const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
`;

const Logo = styled.div`
    position: relative;
    margin-bottom: 50px;

    div {
        position: absolute;
        bottom: -20px;
        right: 10px;
        color: ${process.env.REACT_APP_PRIMARY_COLOR};
        letter-spacing: 15px;
        text-align: center;
        font-size: 20px;
    }
`;

const FormularioAcceso = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    min-width: fit-content;
    position: relative;

    .cajaTexto {
        display: flex;
        align-items: center;
        position: relative;

        svg {
            color: rgba(0, 0, 0, 0.5);
        }

        input {
            flex: 1;

            :focus ~ div {
                display: block;
            }
        }
    }

    .registro {
        a {
            color: ${process.env.REACT_APP_PRIMARY_COLOR};
            font-weight: bold;
            cursor: pointer;
            text-decoration: none;
            :hover {
                text-decoration: underline;
            }
        }
    }

    div {
        flex-direction: row;
    }

    form {
        display: flex;
        flex-direction: column;

        input[type='text'],
        input[type='password'],
        input[type='email'] {
            outline: none;
            border: none;
            margin-left: 1em;
        }

        .cajaTexto {
            border-radius: 8px;
            outline: none;
            border: 1px solid rgba(0, 0, 0, 0.2);
            padding: 0.9em;
            margin-bottom: 0.5em;
        }

        input[type='submit'] {
            padding: 1.2em;
            border-radius: 8px;
            outline: none;
            border: none;
            background-color: ${process.env.REACT_APP_SECONDARY_COLOR};
            cursor: pointer;
            color: white;
            margin-top: 10px;
            width: 100%;
            margin-bottom: 35px;

            :hover {
                background-color: ${process.env.REACT_APP_SECONDARY_COLOR_HOVER};
            }
        }

        p {
            text-align: center;
            font-size: 12px;
            margin: 40px 0;
        }

        .disabled {
            background-color: rgba(0, 0, 0, 0.5) !important;
            cursor: default !important;
        }
    }
`;

const Validation = styled.div`
    position: absolute;
    right: -20px;
    transform: translateX(100%);
    background-color: rgba(0, 0, 0, 0.04);
    padding: 12px;
    border-radius: 8px;
    border-left: none;
    color: rgba(0, 0, 0, 0.7);
    z-index: 999;
    font-size: 10px;
    display: none;

    div {
        display: flex;
        align-items: center;

        & > svg {
            margin-left: 5px;
        }
    }

    ::before {
        content: '';
        top: 50%;
        left: 0px;
        transform: translate(-100%, -50%);
        position: absolute;
        border-color: transparent rgba(0, 0, 0, 0.04) transparent transparent;
        border-style: solid;
        border-width: 14px 14px 14px 0;
        z-index: -99;
    }
`;
