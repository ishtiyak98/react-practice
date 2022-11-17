import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(10);

  const increase = () => {
    setCount(count + 1);
    console.log("increased");
  };

  const decrease = () => {
    setCount(count - 1);
    setValue(value + 1);
    console.log("decrease");
  };

  const calculation = useMemo(() => {
    console.log("extra call here");
    for (let i = 1; i < 2000000000; i++) {
      i++;
    }
    return value;
  }, [value]);

  return (
    <div>
      <div>{count}</div>
      <button onClick={increase}>increase</button>{" "}
      <button onClick={decrease}>decrease</button> <br />
      {calculation}
    </div>
  );
};

export default UseMemo;
