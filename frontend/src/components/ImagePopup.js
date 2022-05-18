function ImagePopup({ card, isOpen, onClose }) {
  return (
    <div className={`popup popup-of-places  ${isOpen && "popup_active"}`}>
      <div className="popup-of-places__container">
        <img className="popup-of-places__img" src={card.link} alt={card.name} />
        <p className="popup-of-places__name">{card.name}</p>
        <button className="popup__close" onClick={onClose}></button>
      </div>
    </div>
  );
}

export default ImagePopup;
