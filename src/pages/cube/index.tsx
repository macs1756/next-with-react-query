

import React, { useEffect, useRef, useState } from "react";
import autoAnimate from "@formkit/auto-animate";


const Cube = () => {

  const [numbers, setNumbers] = useState(
    Array.from({ length: 50 }, (_, i) => i)
  );

    const parent = useRef(null);

   useEffect(() => {
     parent.current &&
       autoAnimate(parent.current, {
        
         duration: 800
       });
   }, [parent]);

  const randomize = () => {
    setNumbers([...numbers].sort(() => (Math.random() > 0.5 ? 1 : -1)));
  };

  return (
    <div className="example boxes-example">
      <div ref={parent} className="boxes">
        {numbers.map((number) => (
          <div key={number} className="box">
            {number}
          </div>
        ))}
      </div>
      <button className="button button--alt" onClick={randomize}>
        Randomize
      </button>
    </div>
  );
};

export default Cube;