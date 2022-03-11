import React, { useCallback, useEffect, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

import '../02-UseEffect/SimpleForm.css'


// the useCallback have two main functions, the first is send información the father component to child component 

export const CallbackHook = () => {
  
    const [counter, setCounter] = useState(10)

    // const increment = () =>{
    //     setCounter(counter + 1)
    // }
   

   const increment = useCallback( (num) =>{
        setCounter(c => c + num)
    },[ setCounter ])

    useEffect ( () =>{
        // ???????????
    },[increment])
    
    return (
      <>
    <h1>Use Callback Hook: {counter}</h1>
    <hr />
    <ShowIncrement increment={increment} />
    </>
  )
}
