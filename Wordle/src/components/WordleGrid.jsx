const getLetterStatus = (letter, index, correctWord) => {
  if (correctWord[index] === letter) return "bg-green-500";
  if (correctWord.includes(letter)) return "bg-yellow-500";
  return "bg-gray-500";
};

const WordleGrid = ({ guesses, currentGuess, correctWord }) => {
  return (
    <div className="grid grid-rows-6 gap-2 p-4">
      {Array.from({ length: 6 }).map((_, rowIndex) => {
        const word =
          guesses[rowIndex] ||
          (rowIndex === guesses.length ? currentGuess : "");
        return (
          <div key={rowIndex} className="grid grid-cols-5 gap-2">
            {Array.from({ length: 5 }).map((_, colIndex) => {
              const letter = word[colIndex] || "";
              const bgColor = guesses[rowIndex]
                ? getLetterStatus(letter, colIndex, correctWord)
                : "bg-white";

              return (
                <div
                  key={colIndex}
                  className={`w-14 h-14 flex items-center justify-center border-2 text-2xl font-bold uppercase ${bgColor} text-white`}
                >
                  {letter}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default WordleGrid;
