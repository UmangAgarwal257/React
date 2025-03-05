import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [keyboardInput, setKeyboardInput] = useState(true);
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      } min-h-screen`}
    >
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        keyboardInput={keyboardInput}
        setKeyboardInput={setKeyboardInput}
      />
      <main className="flex justify-center items-center h-[calc(100vh-64px)]">
        <WordleGrid guesses={guesses} currentGuess={currentGuess} />
      </main>
    </div>
  );
}

export default App;
