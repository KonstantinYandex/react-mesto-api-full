import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Card from "./Card.js";

function Main(props) {
  const user = React.useContext(CurrentUserContext);

  return (
    <>
      <section className="profile">
        <div className="profile__info">
          <div className="profile__info-container">
            <img
              src={user.avatar}
              className="profile__avatar"
              alt="Аватарка автора"
            />
            <button
              className="profile__info-avatar-button"
              onClick={props.onEditAvatar}
            ></button>
          </div>
          <div className="profile__author">
            <div className="profile__author-add">
              <h1 name="title" className="profile__title">
                {user.name}
              </h1>
              <button
                type="button"
                className="profile__edit-button"
                onClick={props.onEditProfile}
              ></button>
            </div>
            <p name="subtitle" className="profile__subtitle">
              {user.about}
            </p>
          </div>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className="places">
        {props.cards.map((card) => (
          <Card
            card={card}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            key={card._id}
            onCardRemove={props.onCardDelete}
          />
        ))}
      </section>
    </>
  );
}

export default Main;
