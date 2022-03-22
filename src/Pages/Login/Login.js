import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import OtrosAccesos from './OtrosAccesos';
import Tabs from './Tabs';
import Logo from './Logo';
import RegisterForm from './RegisterForm';
import AccessForm from './AccessForm';
import { animated, useSpring, useTransition } from 'react-spring';
import { useUserContext } from '../../Services/Context/UserContext';
import { BiError } from 'react-icons/bi';
import { AiFillCheckCircle } from 'react-icons/ai';

function Login() {
    const { registerUser, signInUser, forgetPassword, error, user, success, setSuccess } = useUserContext();

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
        console.log(event);
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

    /* Estilos de Animaciones */

    const style = useSpring({
        opacity: selectedTab ? 1 : 0,
        transform: selectedTab ? 'translate3d(0, 0, 0)' : 'translate3d(30px, 0, 0)',
        from: { opacity: 0, transform: 'translate3d(30px, 0, 0)' },
    });

    const style2 = useSpring({
        opacity: selectedTab ? 0 : 1,
        transform: selectedTab ? 'translate3d(30px, 0, 0)' : 'translate3d(0, 0, 0)',
        from: { opacity: 0, transform: 'translate3d(30px, 0, 0)' },
    });

    const alertStyle = useSpring({
        opacity: error || user ? 1 : 0,
        config: { duration: 500 },
        reset: true,
        onRest: () => setSuccess(false),
    });

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
        <LoginContainer>
            {success || error ? (
                <Card style={alertStyle} error={error}>
                    {error ? <BiError size={15} /> : <AiFillCheckCircle size={15} error={error} />}
                    <div>{error ? errorMessage : success}</div>
                </Card>
            ) : (
                ''
            )}

            <LoginHeader>
                <Logo />
                <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            </LoginHeader>

            {selectedTab ? (
                <FormularioAcceso style={style}>
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
            ) : (
                <FormularioAcceso style={style2}>
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

            <LoginFooter>
                <OtrosAccesos />
            </LoginFooter>
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
    overflow-y: hidden;
`;

const LoginHeader = styled.div``;
const LoginBody = styled.div`
    width: 100%;
`;
const LoginFooter = styled.div``;

const FormularioAcceso = styled(animated.div)`
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

const Card = styled(animated.div)`
    position: absolute;
    top: 70px;
    padding: 0.8rem 0.9rem;
    border-radius: 8px;
    background-color: ${props => (props.error ? process.env.REACT_APP_ERROR_COLOR : process.env.REACT_APP_SUCCESS_COLOR)};
    color: ${props => (props.error ? process.env.REACT_APP_ERROR_FONT_COLOR : process.env.REACT_APP_SUCCES_FONT_COLOR)};
    width: 390px;
    font-size: 13px;
    font-weight: 600;
    display: flex;
    align-items: center;

    svg {
        margin-right: 5px;
    }
`;
