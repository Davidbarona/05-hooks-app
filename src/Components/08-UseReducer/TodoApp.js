import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReduces";

import "./styles.css";
import { UseForm } from "../../Hooks/UseForm";
import { TodoList } from "./TodoList";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init); // reducer, initialState, init

  const [{ description }, handleInputChange, reset] = UseForm({
    description: "",
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  
  const handleDelete = (todoId) => {
    const deleteTodo = {
      type: "delete",
      payload: todoId,
    };

    dispatch(deleteTodo);
  };

  const handleToggle = (todoId) => {
    dispatch({
      type: "toggle",
      payload: todoId,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    const action = {
      type: "add",
      payload: newTodo,
    };

    dispatch(action);

    reset();
  };

  return (
    <>
      <h1>TodoApp ({todos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList 
          todos={ todos }
          handleDelete ={ handleDelete }
          handleToggle ={ handleToggle }
          />
        </div>
        <div className="col-5">
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
        </div>
      </div>
    </>
  );
};
