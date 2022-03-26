import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReduces";

import "./styles.css";
import { UseForm } from "../../Hooks/UseForm";

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
          <ul className="list-gruop list-group-flush">
            {todos.map((todo, i) => (
              <li key={todos.id} className="list-group-item">
                <p
                  className={`${todo.done && "complete"}`}
                  onClick={() => handleToggle(todo.id)}
                >
                  {i + 1}. {todo.desc}
                </p>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(todo.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
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
