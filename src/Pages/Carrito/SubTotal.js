import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

function SubTotal() {
    return (
        <SubTotalContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <SubTotalRight>
                <div className="tituloSubtotal">Subtotal ({6} productos):</div>
                <div className="subtotalPrecio">
                    <span className="subtotalDolares"> $3,500</span>
                    <span className="subtotalLempiras">L. 15,000.00</span>
                </div>
            </SubTotalRight>
        </SubTotalContainer>
    );
}

export default SubTotal;

const SubTotalContainer = styled(motion.div)`
    display: flex;
    justify-content: flex-end;
`;

const SubTotalRight = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1em;

    .tituloSubtotal {
        font-size: 1em;
        margin-right: 1em;
    }

    .subtotalPrecio {
        display: flex;
        justify-content: center;
        flex-direction: column;
        line-height: 1.2;
        text-align: right;

        .subtotalDolares {
            font-size: 1.5em;
            font-weight: 600;
        }
        .subtotalLempiras {
            font-size: 0.6em;
            color: darkGray;
        }
    }
`;
