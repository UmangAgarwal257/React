import { useState } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  const [dice, setDice] = useState(() => generateAllNewDice());

  const gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  function hold(id) {
    setDice((oldDice) =>
      oldDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  }

  function rollDice() {
    setDice(
      gameWon
        ? generateAllNewDice()
        : (oldDice) =>
            oldDice.map((die) =>
              die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }
            )
    );
  }

  const diceElements = dice.map((diceObj) => (
    <Die
      key={diceObj.id}
      value={diceObj.value}
      isHeld={diceObj.isHeld}
      hold={hold}
      id={diceObj.id}
    />
  ));

  return (
    <main>
      {gameWon && <Confetti />}
      <div aria-live="polite" className="sr-only">
        {gameWon && (
          <p>Congratulations! You won! Press New Game to start again.</p>
        )}
      </div>
      <h1 className="title">Tenzies</h1>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        {gameWon ? "New Game" : "Roll Dice"}
      </button>
      <Analytics />
      <footer className="footer">Made with ❤️ by Umang</footer>
    </main>
  );
}
