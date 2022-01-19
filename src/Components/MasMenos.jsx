import React, { useState } from 'react';


const MasMenos = ({ tope }) => {


    const [cantidad, setCantidad] = useState(0);

    function Sumar() {
        if (cantidad < tope) setCantidad(cantidad + 1)
    }

    function Restar() {
        if (cantidad < tope) setCantidad(cantidad - 1)
    }





    return (
        <>

            <div className="Contenedor-Boton-1">
                <button onClick={() => Restar()} id='decrement'>-</button>
                <input type="number" max='100' step='10' value={cantidad} />
                <button onClick={() => Sumar()} id='increment'>+</button>


            </div>

        </>
    )
}
export default MasMenos
