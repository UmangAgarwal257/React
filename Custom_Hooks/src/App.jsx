import { useRef } from "react";

function App() {
  const inputRef = useRef();

  function focusOnInput() {
    inputRef.current.focus();
  }

  return (
    <>
      <div>
        <h1>Sign Up</h1>
        <input ref={inputRef} type="text" />
        <input type="text" />
        <button onClick={focusOnInput}>Submit</button>
      </div>
    </>
  );
}

export default App;
