import { useState } from "react";

function useCounter() {
  const [count, setcount] = useState(0);

  function increaseCount() {
    setcount((prevCount) => prevCount + 1);
  }
  return {
    count: count,
    increaseCount: increaseCount,
  };
}

function App() {
  const { count, increaseCount } = useCounter();

  // function decreaseCount() {
  //   setcount((prevCount) => prevCount - 1);
  // }

  return (
    <>
      <div>
        {count}
        <br />
        <button onClick={increaseCount}>increase</button>
        {/* <button onClick={decreaseCount}>decrease</button> */}
      </div>
    </>
  );
}

export default App;
