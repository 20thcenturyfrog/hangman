type HangmanWordProps = {
  wordToGuess: string;
  guessedLetters: string[];
  reveal?: boolean;
};

export default function HangmanWord({
  wordToGuess,
  guessedLetters,
  reveal = false,
}: HangmanWordProps) {
  return (
    <div className="word">
      {wordToGuess.split("").map((letter, index) => (
        <span className="letter" key={index}>
          <span
            className={`${
              guessedLetters.includes(letter) || reveal
                ? "letter-visible"
                : "letter-hidden"
            } ${
              !guessedLetters.includes(letter) && reveal && "letter-revealed"
            }`}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
