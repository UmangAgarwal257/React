import { useRef } from "react";
import { useState } from "react";

function App() {
  const [currentCount, setCurrentCount] = useState(0);
  const timer = useRef();

  function startCount() {
    let value = setInterval(() => {
      setCurrentCount((prev) => prev + 1);
    }, 1000);
    timer.current = value;
  }

  function stopCount() {
    clearInterval(timer.current);
  }

  return (
    <>
      <div>
        {currentCount}
        <br />
        <button onClick={startCount}>Start</button>
        <button onClick={stopCount}>Stop</button>
      </div>
    </>
  );
}

export default App;
