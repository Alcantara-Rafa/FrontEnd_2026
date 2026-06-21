import Card from "./Card.jsx";

export default function Board({ cards, onCardClick }) {
  return (
    <div className="board">
      {cards.map((card) => (
        <Card key={card.id} card={card} onCardClick={onCardClick} />
      ))}
    </div>
  );
}
