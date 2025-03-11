import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

const BulbContext = createContext();

function BulbProvider({ children }) {
  const [bulbOn, setBulbOn] = useState(true);
  return (
    <BulbContext.Provider
      value={{
        bulbOn,
        setBulbOn,
      }}
    >
      {children}
    </BulbContext.Provider>
  );
}

function App() {
  return (
    <>
      <div>
        <BulbProvider>
          <LightBulb />
        </BulbProvider>
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
