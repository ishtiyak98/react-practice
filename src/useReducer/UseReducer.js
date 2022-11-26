import React, { useReducer } from "react";

const UseReducer = () => {
  const initial = 0;

  const reducer = (prevState, action) => {
    if (action.type === "INCREASE") {
      return prevState + 1;
    } else if (action.type === "DECREASE") {
      return prevState - 1;
    }
  };

  const [state, dispatch] = useReducer(reducer, initial);

  return (
    <div className="h-screen w-full bg-blue-900 flex justify-center items-center">
      <div className="bg-white shadow-xl p-10 rounded-lg space-y-8">
        <p className="text-2xl text-center">{state}</p>
        <div className="space-x-8">
          <button className="button" onClick={()=> dispatch({type:"INCREASE"})}>increase</button>
          <button className="button" onClick={()=> dispatch({type:"DECREASE"})}>decrease</button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
