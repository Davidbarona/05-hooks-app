import React, { useMemo, useState } from "react";
import { hardProcess } from "../../helpers/hardProcess";
import { UseCounter } from "../../Hooks/UseCounter";

import "../02-UseEffect/SimpleForm.css";

export const MemoHook = () => {
  const { counter, increment } = UseCounter(300);
  const [show, setShow] = useState(true);



 const memoHardProcess = useMemo(() => hardProcess(counter), [counter])

  // for each change inside of our component react render again the state, for this I can use the useMemo because the memorize the function and
  // with this not need Render againt this component, only start works if the properties are changed

  return (
    <>
    <h1>MemoHook</h1>
      <h3>
        <small>{counter}</small>
      </h3>
      <hr />

      <p>{memoHardProcess}</p>

      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>

      <button
        className="btn btn-outline-primary ml-3"
        onClick={() => {
          setShow(!show);
        }}
      >
        ShowHide {JSON.stringify(show)}
      </button>
    </>
  );
};
