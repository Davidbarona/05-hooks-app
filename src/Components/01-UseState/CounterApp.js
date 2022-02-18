import React, { useState } from 'react'
import './CounterApp.css'

export const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 10,
        counter2:20,
        counter3:30,
        counter4:40
    })
    // console.log(counter);
    const {counter1,counter2} = state
  return (
    <>
    <h1>Counter {counter1} </h1>
    <h1>Counter {counter2} </h1>

    <hr/>
    <button 
    className='btn btn-primary'
    onClick={()=>{
            setState({
                // extract all properties with the spread and mantain the previosluy stat, (setState create a copy about the previously states)
                ...state,
                counter1: counter1 + 1
            })   
    }}
    >
        +1
    </button>
    </>
  )
}
