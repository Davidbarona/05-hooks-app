import React, { useReducer } from "react";
import { todoReducer } from "./todoReduces";

import './styles.css'

const initialState =[{
    id: new Date().getTime(),
    desc: 'Learn React',
    done:false

}]

export const TodoApp = () => {

    const [todo] = useReducer(todoReducer,initialState); // reducer, initialState, init 
    console.log(todo);
  return (
    <>
      <h1>TodoApp</h1>
      <hr/>

      <ul>
          <li>Hello</li>
          <li>World</li>
          <li>Again</li>
      </ul>
    </>
  );
};
