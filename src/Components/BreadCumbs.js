import React from 'react';
import styled from 'styled-components';
import { BsHouseDoor } from 'react-icons/bs';
import { AiOutlineShopping } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';

function BreadCumbs({ titulo, padre, hijo }) {
    const location = useLocation();
    return (
        <BreadCumbContainer location={location.pathname}>
            <h1>{titulo}</h1>
            <div className="breadCumb">
                <Padre>
                    <BsHouseDoor />
                    <div>Principal</div>
                </Padre>
                <div>{'>'}</div>
                <Hijo>
                    <AiOutlineShopping />
                    <div>Productos</div>
                </Hijo>
            </div>
        </BreadCumbContainer>
    );
}

export default BreadCumbs;

const BreadCumbContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
    width: 100%;
    padding: ${props => (props.location === '/home' ? '0' : '2em')} 0;
    margin-left: ${props => (props.location === '/home' ? '0%' : '0%')};

    .breadCumb {
        display: flex;
    }

    h1 {
        font-size: 1.5rem;
        margin: 0;
    }
`;

const Padre = styled.div`
    display: flex;
    align-items: center;
    margin-right: 0.5em;

    :hover {
        cursor: pointer;
        text-decoration: underline;
    }

    svg {
        margin-right: 0.5rem;
    }
`;

const Hijo = styled(Padre)`
    margin-left: 0.5em;
    color: darkGray;
`;
