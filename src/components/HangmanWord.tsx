export default function HangmanWord() {
  const word = "test";
  const guessedLetters = ["t"];

  return (
    <div className="word">
      {word.split("").map((letter, index) => (
        <span className="letter" key={index}>
          <span
            className={
              guessedLetters.includes(letter)
                ? "letter-visible"
                : "letter-hidden"
            }
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
