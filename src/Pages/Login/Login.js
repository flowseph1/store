import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import OtrosAccesos from './OtrosAccesos';
import Tabs from './Tabs';
import Logo from './Logo';
import RegisterForm from './RegisterForm';
import AccessForm from './AccessForm';
import { useUserContext } from '../../Services/Context/UserContext';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import Alertas from './Alertas';

function Login() {
    const { registerUser, signInUser, forgetPassword, error, user, success, setSuccess, setError } = useUserContext();

    const [selectedTab, setSelectedTab] = useState(true);
    const [showPass, setShowPass] = useState(true);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [comfirmPassword, setComfirmPassword] = useState('');
    const [validation, setValidation] = useState(false);

    /* Función para el manejo del Registro */

    const onSubmitRegister = event => {
        event.preventDefault();
        registerUser(email, name, password);
    };

    /* Función para el manejo de Ingreso */

    const onSubmitLogin = event => {
        event.preventDefault();
        email && password ? signInUser(email, password) : console.log(error);
    };

    /* Validaciones de Formulario de registro */

    useEffect(() => {
        const validaciones = () => {
            const upperCase = new RegExp('(?=.*[A-Z])');
            const number = new RegExp('(?=.*[0-9])');
            const specialChar = new RegExp('(?=.*[!@#$%^&*])');
            const eightChar = new RegExp('(?=.{8,})');
            const emailCheck = new RegExp('([\\w-]+)@([a-zA-Z\\d-]+)\\.([a-zA-Z]{2,8})(\\.[a-zA-Z]{2,8})?');

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

    /* Manejo de mensajes de error */

    const [errorMessage, setErrorMessage] = useState('');

    const handleError = () => {
        switch (error) {
            case 'auth/email-already-in-use':
                setErrorMessage('Correo ya en uso');
                break;
            case 'Firebase: Error (auth/user-not-found).':
                setErrorMessage('Usuario no encontrado');
                break;
            case 'Firebase: Error (auth/wrong-password).':
                setErrorMessage('Contraseña Incorrecta');
                break;
            default:
                setErrorMessage(error);
                break;
        }
    };

    useEffect(() => {
        handleError();
    });

    return (
        <LoginContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <AnimatePresence>
                {success && <Alertas message={success} type="success" exitOn={setSuccess} />}
                {error && <Alertas message={errorMessage} type="error" exitOn={setError} />}
            </AnimatePresence>

            <LoginHeader layout transition={{ duration: 0.3 }}>
                <Logo />
                <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            </LoginHeader>

            {selectedTab ? (
                <AnimatePresence>
                    <FormularioAcceso
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ bounce: 0.2 }}
                    >
                        <AccessForm
                            onSubmitLogin={onSubmitLogin}
                            email={email}
                            setEmail={setEmail}
                            showPass={showPass}
                            setShowPass={setShowPass}
                            password={password}
                            setPassword={setPassword}
                        />
                    </FormularioAcceso>
                </AnimatePresence>
            ) : (
                <FormularioAcceso
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ bounce: 0.2 }}
                >
                    <RegisterForm
                        onSubmit={onSubmitRegister}
                        name={name}
                        setName={setName}
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        showPass={showPass}
                        setShowPass={setShowPass}
                        validation={validation}
                        comfirmPassword={comfirmPassword}
                        setComfirmPassword={setComfirmPassword}
                    />
                </FormularioAcceso>
            )}

            <LoginFooter layout transition={{ duration: 0.3 }}>
                <OtrosAccesos />
            </LoginFooter>
        </LoginContainer>
    );
}

export default Login;

const LoginContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    overflow-y: hidden;
`;

const LoginHeader = styled(motion.div)``;
const LoginBody = styled.div`
    width: 100%;
`;
const LoginFooter = styled(motion.div)``;

const FormularioAcceso = styled(motion.div)`
    display: flex;
    flex-direction: row;
    width: 90%;
    min-width: fit-content;
    justify-content: center;
    position: relative;

    .cajaTexto {
        display: flex;
        align-items: center;
        position: relative;
        border-radius: 8px;
        outline: none;
        border: 1px solid rgba(0, 0, 0, 0.2);
        padding: 0.9em;
        margin-bottom: 0.5em;

        svg {
            color: rgba(0, 0, 0, 0.5);
        }

        input {
            flex: 1;

            :focus ~ div {
                opacity: 1;
                visibility: visible;
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
        flex: 0.4;
        overflow: visible;
        max-width: 400px;
    }

    form {
        display: flex;
        flex-direction: column;
        flex: 0.2;

        input[type='text'],
        input[type='password'],
        input[type='email'] {
            outline: none;
            border: none;
            margin-left: 1em;
            background-color: transparent;
        }

        input[type='submit'] {
            padding: 1.2em;
            border-radius: 8px;
            outline: none;
            border: none;
            background-color: ${process.env.REACT_APP_SECONDARY_COLOR};
            cursor: pointer;
            color: white;

            width: 100%;

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
