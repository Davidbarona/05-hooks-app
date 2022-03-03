import React, { useEffect, useState } from 'react'
import { Message } from './Message'
import './SimpleForm.css'
export const SimpleForm = () => {
 
    const [formState, setformState] = useState({
        name:'',
        email:''
    })

    const {name,email} = formState
    
    useEffect(()=>{
        // console.log('hey');
    },[])

    useEffect(()=>{
        // console.log('formstate changed');
    },[formState])

    useEffect(()=>{
        // console.log('email changed');
    },[email])

    const handleInputChange = ({target}) => {
        
        setformState({
            ...formState,
            [target.name]:target.value

        })
    }
 
    return (
    <>
    <h1>Use Effect</h1>
    <hr/>

    <div className='form-group'>
        <input
        type='text'
        name='name'
        className='form-control'
        placeholder='your name'
        autoComplete='off'
        value={name}
        onChange={handleInputChange}/>

        <input
        type='text'
        name='email'
        className='form-control'
        placeholder='your Email'
        autoComplete='off'
        value={email}
        onChange={handleInputChange}/>
    </div>


    { (name === '123') && <Message/>}
    </>
  )
}
