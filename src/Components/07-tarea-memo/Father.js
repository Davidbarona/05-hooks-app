import React, { useCallback } from 'react'
import { Children } from './Children'
import { useState } from 'react';


import '../02-UseEffect/SimpleForm.css'

export const Father = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    // const increment = ( num ) => {
    //     setValor( valor + num )
    // }

    const incrementar = useCallback( (num) =>{
        setValor( c => c + num )
    },[setValor])


    return (
        <div>
            <h1>Padre</h1>
            <p> Total: {valor}  </p>

            <hr />

            {
                numeros.map( n => (
                    <Children 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
