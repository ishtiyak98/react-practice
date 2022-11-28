import { useState } from "react";
import "./App.css";
import Form from "./examples/Form";
import UseEffect from "./useEffect/UseEffect";
import UseMemo from "./useMemo/UseMemo";
import UseReducer from "./useReducer/UseReducer";

function App() {
  const [show, setShow] = useState(true);
  return (
    <>
      {/* <UseMemo></UseMemo> */}
      {/* {show && <UseEffect></UseEffect>}
      <center>
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? "Hide useEffect" : "Show useEffect"}
        </button>
      </center> */}
      {/* <UseReducer></UseReducer> */}
      <Form></Form>
    </>
  );
}

export default App;
