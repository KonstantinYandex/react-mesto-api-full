import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick,onCardLike,onCardRemove }) {
  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick(){
    onCardLike(card)
  }

  function handleCardRemove(){
    onCardRemove(card)
  }

  const user = React.useContext(CurrentUserContext);
  const isOwn = card.owner === user._id;
  const isLiked = card.likes.some((i) => i._id === user._id);

  return (
    <div className="places__item">
      <img
        className="places__item-img"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <button
        className={
          isOwn
            ? "places__item-delete-button"
            : "places__item-delete-button_hidden"
        }
        onClick={handleCardRemove}
      ></button>
      <div className="places__item-group">
        <h2 className="places__item-name">{card.name}</h2>
        <div className="places__like-container">
          <button type="button" className={`places__like-button ${isLiked ? 'places__like-button_active': ''}`} onClick={handleLikeClick}></button>
          <p className="places__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
