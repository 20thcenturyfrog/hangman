const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled?: boolean;
};

export default function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) {
  return (
    <div className="keyboard">
      {KEYS.map((key) => {
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`key ${activeLetters.includes(key) ? "active" : ""} ${
              inactiveLetters.includes(key) ? "inactive" : ""
            }`}
            key={key}
            disabled={inactiveLetters.includes(key) || disabled}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
