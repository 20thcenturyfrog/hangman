import { useState } from "react";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";
import words from "./wordList.json";
import "./App.scss";

function App() {
  const [wordToGuess, setWordToGuess] = useState<string>(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  return (
    <div className="container">
      <div className="result-message"></div>
      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />
    </div>
  );
}

export default App;
