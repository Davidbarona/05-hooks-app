import React, { useRef } from 'react'
import '../02-UseEffect/SimpleForm.css'

export const FocusScreen = () => {

    const inputRef = useRef()
    

    const handleClick = () =>{

        inputRef.current.select()
        console.log(inputRef);
    }

  return (
      <>
    <h1>Focus Screen</h1>
    <hr/>

    <input
    ref={inputRef}
    className='form-control'
    placeholder='Your Name'
    />
   <button className='btn btn-outline-primary mt-5'
            onClick={handleClick}
    >
       Focus
   </button>

    </>
  )
}
