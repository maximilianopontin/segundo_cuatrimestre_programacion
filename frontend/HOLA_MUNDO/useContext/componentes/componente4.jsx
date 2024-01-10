import React from 'react';
import { useContext } from 'react';
import { NumContext } from "../context/context";

function Componente4() {
    const { num, setNum } = useContext(NumContext);

    return (
        <div className='hotPink'>
            <h4>Componente4</h4>
            <button onClick={() => setNum(num + 1)}>plus 1</button>
            <p> Valor de num: <span className='bold'>{num}</span></p>
            <button onClick={() => setNum(num - 1)}>minus 1</button>


        </div>
    );
}

export default Componente4;