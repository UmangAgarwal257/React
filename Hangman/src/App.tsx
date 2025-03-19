import { useCallback, useEffect, useState } from "react"
import words from "./wordList.json"
import HangmanDrawing from "./HangmanDrawing"
import HangmanWord from "./HangmanWord"
import KeyBoard from "./KeyBoard"

function getWord(){
  return words[Math.floor(Math.random() * words.length)]
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord)
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const inCorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )

  const isLoser = inCorrectLetters.length >= 6
  const isWinner = wordToGuess
                   .split("")
                   .every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter) || isLoser || isWinner) return

    setGuessedLetters(currentGuessedLetters => [...currentGuessedLetters, letter])
  }, [guessedLetters, isWinner, isLoser])

  const resetGame = () => {
    setGuessedLetters([])
    setWordToGuess(getWord())
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }
    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [addGuessedLetter])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (key !== "Enter") return

      e.preventDefault()
      resetGame()
    }
    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [])

  return (
    <>
      <div style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center"
      }}>
        <div style={{ fontSize: "2rem", textAlign: "center" }}>
          {isWinner && "Winner! - Press Enter or click 'Play Again' to try again"}
          {isLoser && "Nice try - Press Enter or click 'Play Again' to try again"}
        </div>
        <HangmanDrawing numberOfGuesses={inCorrectLetters.length} />
        <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
        <div style={{ alignSelf: "stretch" }}>
          <KeyBoard
            disabled={isWinner || isLoser}
            activeLetters={guessedLetters.filter(letter =>
              wordToGuess.includes(letter)
            )}
            inactiveLetters={inCorrectLetters}
            addGuessedLetter={addGuessedLetter}
          />
        </div>
        {(isWinner || isLoser) && (
          <button 
            onClick={resetGame} 
            style={{ 
              marginTop: "1rem", 
              alignSelf: "flex-start",
              fontSize: "1.5rem",
              padding: "0.5rem 1rem",
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Play Again
          </button>
        )}
      </div>
    </>
  )
}

export default App
