import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {

  const {user,setUser} = useContext(UserContext) // usercontext notify to all chlindrens an change the value in all components with this children

  const handleClick  = () =>{
      setUser({})
  }

    return (
        <>
          <h1>AboutScreen</h1>
          <hr />

          <pre>
            {JSON.stringify(user,null,3)}
          </pre>

          <button className='btn btn-danger'
                  onClick={handleClick}
          >
            logOut
          </button>
        </>
  )
}
