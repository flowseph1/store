import React from 'react';
import styled from 'styled-components';
import { BsHouseDoor } from 'react-icons/bs';
import { AiOutlineShopping } from 'react-icons/ai';

function BreadCumbs() {
    return (
        <BreadCumbContainer>
            <Padre>
                <BsHouseDoor />
                <div>Principal</div>
            </Padre>
            <div>{'>'}</div>
            <Hijo>
                <AiOutlineShopping />
                <div>Productos</div>
            </Hijo>
        </BreadCumbContainer>
    );
}

export default BreadCumbs;

const BreadCumbContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 0.8rem;
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
