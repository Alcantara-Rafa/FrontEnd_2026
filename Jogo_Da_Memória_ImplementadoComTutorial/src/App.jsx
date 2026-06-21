import { useState, useEffect } from "react";
import Board from "./components/Board.jsx";
import "./App.css";

const SYMBOLS = ["🍎", "🍌", "🍇", "🍉", "🍓", "🍒", "🥝", "🍍"];

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function createDeck() {
  const pairs = [...SYMBOLS, ...SYMBOLS];
  return shuffle(pairs).map((symbol, index) => ({
    id: index,
    symbol,
    isFlipped: false,
    isMatched: false,
  }));
}

export default function App() {
  const [cards, setCards] = useState(createDeck);
  const [selected, setSelected] = useState([]);
  const [moves, setMoves] = useState(0);
  const [locked, setLocked] = useState(false);

  const totalPairs = SYMBOLS.length;
  const matchedCount = cards.filter((card) => card.isMatched).length / 2;
  const won = matchedCount === totalPairs;

  function handleCardClick(id) {
    if (locked || selected.length >= 2) return;

    const card = cards.find((c) => c.id === id);
    if (!card || card.isFlipped || card.isMatched) return;

    setCards((prevCards) =>
      prevCards.map((c) => (c.id === id ? { ...c, isFlipped: true } : c))
    );
    setSelected((prevSelected) => [...prevSelected, id]);
  }

  useEffect(() => {
    if (selected.length !== 2) return;

    setLocked(true);
    setMoves((prevMoves) => prevMoves + 1);

    const [firstId, secondId] = selected;
    const firstCard = cards.find((card) => card.id === firstId);
    const secondCard = cards.find((card) => card.id === secondId);

    if (firstCard.symbol === secondCard.symbol) {
      setCards((prevCards) =>
        prevCards.map((card) =>
          card.id === firstId || card.id === secondId
            ? { ...card, isMatched: true }
            : card
        )
      );
      setSelected([]);
      setLocked(false);
    } else {
      const timer = setTimeout(() => {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.id === firstId || card.id === secondId
              ? { ...card, isFlipped: false }
              : card
          )
        );
        setSelected([]);
        setLocked(false);
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [selected]);

  function handleRestart() {
    setCards(createDeck());
    setSelected([]);
    setMoves(0);
    setLocked(false);
  }

  return (
    <div className="app">
      <h1>Jogo da Memória</h1>
      <p className="subtitle">Construído com React seguindo o modelo do tutorial do Jogo da Velha</p>

      <div className="status-bar">
        <span>Jogadas: {moves}</span>
        <span>Pares: {matchedCount} / {totalPairs}</span>
      </div>

      <Board cards={cards} onCardClick={handleCardClick} />

      {won && <p className="win-message">Você venceu em {moves} jogadas! 🎉</p>}

      <button className="restart-button" onClick={handleRestart}>
        Reiniciar jogo
      </button>
    </div>
  );
}
