import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import OtrosAccesos from './OtrosAccesos';
import Tabs from './Tabs';
import Logo from './Logo';
import RegisterForm from './RegisterForm';
import AccessForm from './AccessForm';
import { useTransition, animated, useSpring, Spring } from 'react-spring';

function Login() {
    const onSubmit = event => {
        event.preventDefault();
    };

    const [selectedTab, setSelectedTab] = useState(true);
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

    return (
        <LoginContainer>
            <LoginHeader>
                <Logo />
                <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            </LoginHeader>

            {selectedTab ? (
                <FormularioAcceso style={style}>
                    <AccessForm
                        onSubmit={onSubmit}
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
                        onSubmit={onSubmit}
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

const FormularioAcceso = animated(styled.div`
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
            margin-bottom: 5px;

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
`);
