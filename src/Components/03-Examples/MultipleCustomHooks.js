import { UseCounter } from "../../Hooks/UseCounter";
import { UseFetch } from "../../Hooks/UseFetch";

import "../02-UseEffect/SimpleForm.css";

export const MultipleCustomHooks = () => {
  const { counter, increment } = UseCounter(1);
  const { loading, data } = UseFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0]; // if data exist, then extract the info of the 0 position of the data

 

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-center">
          <p className="mb-0">{quote}</p>
          <hr />
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}
      <button className="btn btn-danger" onClick={increment}>
        Next Cuote
      </button>
    </>
  );
};
