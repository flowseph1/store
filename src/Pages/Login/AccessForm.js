import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HiOutlineMail } from 'react-icons/hi';
import { BiLockOpenAlt } from 'react-icons/bi';
import { BsEye } from 'react-icons/bs';
import { BsEyeSlash } from 'react-icons/bs';
import { useUserContext } from '../../Services/Context/UserContext';
import ReactLoading from 'react-loading';

function AccessForm({ onSubmitLogin, email, setEmail, showPass, setShowPass, password, setPassword }) {
    const [isValid, setIsValid] = useState(false);

    const { loading } = useUserContext();

    const validationToLogin = () => {
        RegExp('([\\w-]+)@([a-zA-Z\\d-]+)\\.([a-zA-Z]{2,8})(\\.[a-zA-Z]{2,8})?').test(email) && password.length > 7
            ? setIsValid(true)
            : setIsValid(false);
    };

    useEffect(() => {
        validationToLogin();
    }, [email, password]);

    return (
        <div>
            <form onSubmit={onSubmitLogin}>
                <div className="cajaTexto">
                    <HiOutlineMail />
                    <input
                        type="email"
                        placeholder="Email"
                        spellCheck="false"
                        autoCapitalize="none"
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
                <BotonContainer>
                    <input type="submit" value={!loading ? 'Entrar' : ' '} className={isValid ? '' : 'disabled'} disabled={!isValid ? true : false} />
                    {loading && <ReactLoading type="spin" height={20} width={20} />}
                </BotonContainer>
                <ForgetPass>
                    <span>¿Olvido su contraseña?</span>
                </ForgetPass>
            </form>
        </div>
    );
}

export default AccessForm;

const ForgetPass = styled.div`
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    span {
        cursor: pointer;

        :hover {
            text-decoration: underline;
        }
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
