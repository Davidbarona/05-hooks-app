import { useLayoutEffect, useRef, useState } from "react";
import { UseCounter } from "../../Hooks/UseCounter";
import { UseFetch } from "../../Hooks/UseFetch";

import './layout.css'

export const Layout = () => {
  const { counter, increment } = UseCounter(1);
  const { data } = UseFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const pTag = useRef()
  
  const { quote } = !!data && data[0]; // if data exist, then extract the info of the 0 position of the data

  const [boxSize, setboxSize] = useState({})

  useLayoutEffect(() => {
    setboxSize(pTag.current.getBoundingClientRect() );
  }, [quote])



  return (
    <>
      <h1>Layout Effect</h1>
      <hr />

      <blockquote className="blockquote text-center">
        <p className="mb-0"
            ref={pTag}
        >{quote}
        </p>
        <hr />
        
      </blockquote>
      <pre>
        { JSON.stringify(boxSize,null,3)}
      </pre>

      <button className="btn btn-danger" onClick={increment}>
        Next Cuote
      </button>
    </>
  );
};
