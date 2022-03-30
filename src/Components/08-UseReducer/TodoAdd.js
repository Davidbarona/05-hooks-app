import React from 'react'
import { UseForm } from '../../Hooks/UseForm';

export const TodoAdd = ({handleAddTodo}) => {

    const [{ description }, handleInputChange, reset] = UseForm({
        description: "",
      });

    const handleSubmit = (e) =>{
        e.preventDefault()

        if (description.trim().length <= 1) {
            return;
          }

          const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false,
          };
      
          handleAddTodo(newTodo);
      
          reset();
    }

  return (
   <>
    <h4>Add ToDo</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="description"
              placeholder="Learn..."
              autoComplete="off"
              className="form-control"
              onChange={handleInputChange}
              value={description}
            />
            <button
              className="btn btn-outline-primary mt-1 btn-block"
              type="subtmit"
            >
              Add
            </button>
          </form>
   </>
  )
}
