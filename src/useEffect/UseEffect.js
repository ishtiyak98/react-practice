import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [countRender, setCountRender] = useState(0);
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setTimeout(() => {
      setCountRender(countRender + 1);
    }, 1000);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
      console.log("clock is working");
    }, 1000);
    
    return () => {
      console.log("useEffect Cleanup");
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <center>
        <h2>I have rendered {countRender} times</h2>
        <h3>Time: {time.toLocaleTimeString()}</h3>
      </center>
    </div>
  );
};

export default UseEffect;
