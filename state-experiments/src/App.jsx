import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

const BulbContext = createContext();

function App() {
  const [bulbOn, setBulbOn] = useState(true);

  return (
    <>
      <div>
        <BulbContext.Provider
          value={{
            bulbOn,
            setBulbOn,
          }}
        >
          <LightBulb />
        </BulbContext.Provider>
      </div>
    </>
  );
}

function LightBulb() {
  return (
    <>
      <div>
        <BulbState />
        <ToggleBulbState />
      </div>
    </>
  );
}

function BulbState() {
  const { bulbOn } = useContext(BulbContext);
  return (
    <>
      <div>{bulbOn ? "Bulb on" : "Bulb off"}</div>
    </>
  );
}

function ToggleBulbState() {
  const { setBulbOn } = useContext(BulbContext);

  function toggleBulb() {
    setBulbOn((prev) => !prev);
  }

  return (
    <>
      <div>
        <button onClick={toggleBulb}>Toggle the bulb</button>
      </div>
    </>
  );
}

export default App;
