import React from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { CgRename } from 'react-icons/cg';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { BiLockOpenAlt } from 'react-icons/bi';
import { BsEye } from 'react-icons/bs';
import { BsEyeSlash } from 'react-icons/bs';
import { useUserContext } from '../../Services/Context/UserContext';
import ReactLoading from 'react-loading';

/* Pagina de registro recibe todos los parámetros de sus componentes padres */
function RegisterForm({
    onSubmit,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    showPass,
    setShowPass,
    validation,
    comfirmPassword,
    setComfirmPassword,
}) {
    /* Variables de carga y error importadas del contexto de usuario */
    const { loading, error } = useUserContext();
    return (
        <div>
            {/* Formulario de Registro */}
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
                        spellCheck="false"
                        autoCapitalize="none"
                    />
                    {/* Validación de entrada de correo */}
                    {email.length > 0 && (
                        <>
                            <Validation>
                                <AnimatePresence>
                                    <motion.div
                                        style={{ width: '100%' }}
                                        initial="enter"
                                        animate="in"
                                        exit="exit"
                                        variants={{
                                            enter: { opacity: 0 },
                                            in: { opacity: 1 },
                                            exit: { opacity: 0 },
                                        }}
                                    >
                                        {RegExp('([\\w-]+)@([a-zA-Z\\d-]+)\\.([a-zA-Z]{2,8})(\\.[a-zA-Z]{2,8})?').test(email) ? (
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
                                    </motion.div>
                                </AnimatePresence>
                            </Validation>
                        </>
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
                    {/* Icono de ocultar o mostrar contraseña */}
                    {!showPass ? (
                        <BsEye onClick={() => setShowPass(!showPass)} style={{ cursor: 'pointer' }} size={18} />
                    ) : (
                        <BsEyeSlash onClick={() => setShowPass(!showPass)} style={{ cursor: 'pointer' }} size={18} />
                    )}
                    {/* Validación de contraseña */}
                    {password.length > 0 && (
                        <Validation>
                            {/* Se agregar animación a pestaña de validaciones */}
                            <AnimatePresence>
                                <motion.div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'baseline',
                                    }}
                                    key="passvalidationKey"
                                    initial="enter"
                                    animate="in"
                                    exit="exit"
                                    variants={{
                                        enter: { opacity: 0 },
                                        in: { opacity: 1 },
                                        exit: { opacity: 0 },
                                    }}
                                >
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
                                </motion.div>
                            </AnimatePresence>
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
                    {/* Validación de confirmar contraseña */}
                    {comfirmPassword.length > 0 && (
                        <Validation>
                            <AnimatePresence>
                                <motion.div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'baseline',
                                    }}
                                    key="passvalidationKey"
                                    initial="enter"
                                    animate="in"
                                    exit="exit"
                                    variants={{
                                        enter: { opacity: 0 },
                                        in: { opacity: 1 },
                                        exit: { opacity: 0 },
                                    }}
                                >
                                    {/* Validación de coincidencia en contraseñas */}
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
                                </motion.div>
                            </AnimatePresence>
                        </Validation>
                    )}
                </div>
                <BotonContainer>
                    {/* Botón se habilita una vez se cumplan con las validaciones */}
                    <input
                        type="submit"
                        value={!loading ? 'Registrar' : ' '}
                        className={validation ? '' : 'disabled'}
                        disabled={!validation ? true : false}
                    />
                    {/* Circulo de carga en botón */}
                    {loading && <ReactLoading type="spin" height={20} width={20} />}
                </BotonContainer>
            </form>
        </div>
    );
}

export default RegisterForm;

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
    visibility: hidden;
    opacity: 0;
    transition: visibility 0.2s, opacity 0.3s linear;
    white-space: nowrap;

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

const BotonContainer = styled.div`
    position: relative;
    margin-top: 10px;
    margin-bottom: 5px;

    div {
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(50%, -50%);
    }
`;
