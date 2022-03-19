import React from 'react';
import logo from '../../Assets/Images/Logo3.png';
import styled from 'styled-components';

function Logo() {
    return (
        <LogoContainer>
            <img src={logo} alt="" width="400" />
            <div>store</div>
        </LogoContainer>
    );
}

export default Logo;

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    position: relative;

    div {
        position: absolute;
        bottom: -20px;
        right: 0px;
        color: ${process.env.REACT_APP_PRIMARY_COLOR};
        letter-spacing: 15px;
        text-align: center;
        font-size: 20px;
    }
`;
