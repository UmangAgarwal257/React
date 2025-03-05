export const VALID_WORDS = [
  "REACT",
  "VITES",
  "WORLD",
  "CODES",
  "BUILD",
  "AUDIO",
  "BREAK",
  "CLOUD",
  "DANCE",
  "EAGLE",
  "FLAME",
  "GHOST",
  "HEART",
  "IMAGE",
  "JUICE",
];

export const getRandomWord = () => {
  return VALID_WORDS[Math.floor(Math.random() * VALID_WORDS.length)];
};
