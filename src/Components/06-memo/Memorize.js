import React, { useState } from "react";
import { UseCounter } from "../../Hooks/UseCounter";

import { Small } from "./Small";

import "../02-UseEffect/SimpleForm.css";

export const Memorize = () => {
  const { counter, increment } = UseCounter(10);
  const [show, setShow] = useState(true);

  // for each change inside of our component react render again the state, for this I can use the useMemo because the memorize the function and 
  // with this not need Render againt this component, only start works if the properties are changed 



  return (
    <>
      <h1>
        Counter <Small value={counter} />
      </h1>
      <hr />

      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>

      <button
      className="btn btn-outline-primary ml-3"
      onClick={()=>{
          setShow(!show)
      }}

      >
          ShowHide {JSON.stringify(show)}
      </button>
    </>
  );
};
