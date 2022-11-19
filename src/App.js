import { useState } from "react";
import "./App.css";
import UseEffect from "./useEffect/UseEffect";
import UseMemo from "./useMemo/UseMemo";

function App() {
  const [show, setShow] = useState(true);
  return (
    <>
      {/* <UseMemo></UseMemo> */}
      {show && <UseEffect></UseEffect>}
      <center>
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? "Hide useEffect" : "Show useEffect"}
        </button>
      </center>
    </>
  );
}

export default App;
