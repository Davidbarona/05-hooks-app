import React, { useEffect } from "react";
import { UseForm } from "../../Hooks/UseForm";

import "./SimpleForm.css";
export const FormWidthCustomHook = () => {
  const [formValues, handleInputChange] = UseForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formValues;

  useEffect(() => {
    console.log("email change");
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Use Effect</h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="your name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="your Email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />

        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="*****"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        save
      </button>
    </form>
  );
};
