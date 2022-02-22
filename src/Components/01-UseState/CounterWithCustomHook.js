import React from 'react'
import { UseCounter } from '../../Hooks/UseCounter'
import './CounterApp.css'

export const CounterWithCustomHook = () => {
    
   const {state,increment,decrement,reset} = UseCounter();
  
    return (
    <>
    <h1>Counter With Hook: {state}</h1>
    <hr/>
    <button onClick={()=>increment(2)} className='btn-primary'>+1</button>
    <button onClick={reset} className='btn'>Reset</button>
    <button onClick={()=>decrement(2)} className='btn-danger'>-1</button>
    </>
    
  )
}
