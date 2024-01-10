import React from 'react';
import Componente4 from './componente4';
import { useContext } from 'react';
import { NumContext } from "../context/context";

function Componente3() {
    const { setMsg } = useContext(NumContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        setMsg(e.target.name.value);
    };
        return (
            <div className='orange'>
                <h3>Componente3</h3>
                <form className="form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="new name..." name="name" />
                    <input type="submit" value="change" />
                </form>
                <Componente4 />
            </div>
        );
    }

export default Componente3;