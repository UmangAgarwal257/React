import { useState, useEffect } from "react";
import Header from "./components/Header";
import WordleGrid from "./components/WordleGrid";
import { VALID_WORDS, getRandomWord } from "./data/words";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [keyboardInput, setKeyboardInput] = useState(true);
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [correctWord, setCorrectWord] = useState(getRandomWord());
  const [gameOver, setGameOver] = useState(false);

  const wordLength = 5;
  const maxGuesses = 6;

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (gameOver) return;
      if (guesses.length >= maxGuesses) return;

      if (event.key === "Enter" && currentGuess.length === wordLength) {
        if (VALID_WORDS.includes(currentGuess.toUpperCase())) {
          setGuesses([...guesses, currentGuess.toUpperCase()]);
          setCurrentGuess("");

          // Check for win condition
          if (currentGuess.toUpperCase() === correctWord) {
            setTimeout(() => {
              alert("Congratulations! You've won!");
              setGameOver(true);
            }, 500);
          } else if (guesses.length + 1 >= maxGuesses) {
            setTimeout(() => {
              alert(`Game Over! The word was ${correctWord}`);
              setGameOver(true);
            }, 500);
          }
        } else {
          alert("Not a valid word!");
        }
      } else if (event.key === "Backspace") {
        setCurrentGuess(currentGuess.slice(0, -1));
      } else if (
        /^[a-zA-Z]$/.test(event.key) &&
        currentGuess.length < wordLength
      ) {
        setCurrentGuess((prev) => prev + event.key.toUpperCase());
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentGuess, guesses, correctWord, gameOver]);

  const resetGame = () => {
    setGuesses([]);
    setCurrentGuess("");
    setCorrectWord(getRandomWord());
    setGameOver(false);
  };

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
      <main className="flex flex-col items-center justify-center h-[calc(100vh-64px)]">
        <WordleGrid
          guesses={guesses}
          currentGuess={currentGuess}
          correctWord={correctWord}
        />
        {gameOver && (
          <button
            onClick={resetGame}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            Play Again
          </button>
        )}
      </main>
    </div>
  );
}

export default App;
