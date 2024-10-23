import React, { createContext, useState } from 'react'


export const CreateCount = createContext();

function Countcontext({ children }) {

   const [count, setCount] = useState(0);

   const increment = () => {
      setCount(count + 1);
   };

   const decrement = () => {
      setCount((Count) => (Count > 0 ? Count - 1 : Count));
      ;
   };

   return (
      <CreateCount.Provider value={{ increment, decrement, count }}>
         {children}
      </CreateCount.Provider>
   )
};

export default Countcontext;