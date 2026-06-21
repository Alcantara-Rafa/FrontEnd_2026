export default function Card({ card, onCardClick }) {
  const className =
    "card" +
    (card.isFlipped ? " flipped" : "") +
    (card.isMatched ? " matched" : "");

  return (
    <button
      className={className}
      onClick={() => onCardClick(card.id)}
      disabled={card.isFlipped || card.isMatched}
    >
      {card.isFlipped || card.isMatched ? card.symbol : ""}
    </button>
  );
}
