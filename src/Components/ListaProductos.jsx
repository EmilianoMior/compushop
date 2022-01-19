import React, { useState } from 'react';
import Producto from './Producto'

const ListaDeProductos = () => {

    const [arrayDeProductos, setArrayDeProductos] = useState([
        { nombre: 'Monitor', Modelo: 'Samsung 24" Full HD', stock: 5 },
        { nombre: 'CPU', Modelo: 'AMD RYZEN 7', stock: 4 }])



    return (
        <>

            {arrayDeProductos.map(item => <Producto item={item} />)}

        </>

    )


}

export default ListaDeProductos
