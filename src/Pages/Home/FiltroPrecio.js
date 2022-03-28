import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Slider from '@material-ui/core/Slider';

function FiltroPrecio() {
    const [precioMinMax, setPrecioMinMax] = useState([0, 10000]);
    const formater = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    });

    return (
        <FiltroPrecioContainer>
            <PrecioTop>
                <div className="cuadroPrecio">
                    <div>
                        <span>de $</span>
                        <input
                            type="number"
                            value={precioMinMax[0]}
                            onChange={e => setPrecioMinMax([parseInt(e.currentTarget.value), precioMinMax[1]])}
                        />
                    </div>
                    <div>
                        <span>hasta $</span>
                        <input
                            type="number"
                            value={precioMinMax[1]}
                            onChange={e => setPrecioMinMax([precioMinMax[0], parseInt(e.currentTarget.value)])}
                        />
                    </div>
                </div>
                <div className="rangoPrecio">
                    <Slider
                        min={0}
                        max={10000}
                        step={100}
                        value={precioMinMax}
                        onChange={(evento, value) => setPrecioMinMax(value)}
                        valueLabelDisplay="off"
                        style={{ color: process.env.REACT_APP_SECONDARY_COLOR }}
                    />
                </div>
            </PrecioTop>
        </FiltroPrecioContainer>
    );
}

export default FiltroPrecio;

const FiltroPrecioContainer = styled(motion.div)`
    display: flex;
    padding-top: 1em;
`;

const PrecioTop = styled(motion.div)`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;

    .cuadroPrecio {
        display: flex;

        div:first-child {
            margin-right: 1em;
        }

        div {
            flex: 1;
            padding: 0.5em;
            color: darkGray;
            background-color: #eeee;
            border-radius: 3px;
            font-size: 0.8em;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;

            span {
                font-size: 1em;
                white-space: nowrap;
                color: rgba(0, 0, 0, 0.7);
            }

            input {
                width: 100%;
                border: none;
                background-color: transparent;
                outline: none;
            }
        }
    }

    .rangoPrecio {
        margin-top: 1em;
    }
`;
