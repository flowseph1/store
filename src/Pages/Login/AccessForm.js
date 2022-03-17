import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HiOutlineMail } from 'react-icons/hi';
import { BiLockOpenAlt } from 'react-icons/bi';
import { BsEye } from 'react-icons/bs';
import { BsEyeSlash } from 'react-icons/bs';

function AccessForm({ onSubmit, email, setEmail, showPass, setShowPass, password, setPassword }) {
    return (
        <div>
            <form onSubmit={onSubmit}>
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
                <Link to="/home">
                    <input type="submit" value="Ingresar" />
                </Link>
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
