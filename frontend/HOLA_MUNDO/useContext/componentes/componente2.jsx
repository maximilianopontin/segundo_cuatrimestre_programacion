import React from 'react';
import Componente3 from "./componente3";
import { useContext } from 'react';
import { NumContext } from "../context/context";

function Componente2() {
    const { msg } = useContext(NumContext);
    return (
        <div className='salmon'>
            <h2> Componente2</h2>
            <p>programado por: </p>
            <p className='bold'>{msg}</p>

            <Componente3 />
        </div>
    );

}

export default Componente2;