import { useEffect, useState, useCallback } from "react";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";
import words from "./wordList.json";
import "./App.scss";

function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function App() {
  const [wordToGuess, setWordToGuess] = useState<string>(getWord());

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;

  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isWinner || isLoser) return;
      setGuessedLetters((currentGuessedLetters) => [
        ...currentGuessedLetters,
        letter,
      ]);
    },
    [guessedLetters, isWinner, isLoser]
  );

  useEffect(() => {
    const keyPressHandler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-zA-Z]$/)) return;
      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keydown", keyPressHandler);

    return () => {
      document.removeEventListener("keydown", keyPressHandler);
    };
  }, [guessedLetters]);

  useEffect(() => {
    const keyPressHandler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;
      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    };

    document.addEventListener("keydown", keyPressHandler);

    return () => {
      document.removeEventListener("keydown", keyPressHandler);
    };
  }, []);

  return (
    <div className="container">
      <div className="result-message">
        {isWinner && "🎉 You won! Refresh or hit Enter to try again."}
        {isLoser && "😞 Uh oh! Refresh or hit Enter to try again."}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord
        wordToGuess={wordToGuess}
        guessedLetters={guessedLetters}
        reveal={isLoser}
      />
      <Keyboard
        activeLetters={guessedLetters.filter((letter) =>
          wordToGuess.includes(letter)
        )}
        inactiveLetters={incorrectLetters}
        addGuessedLetter={addGuessedLetter}
        disabled={isWinner || isLoser}
      />
    </div>
  );
}

export default App;
