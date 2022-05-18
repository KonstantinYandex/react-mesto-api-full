function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_${props.name} ${props.isOpen && "popup_active"}`}
    >
      <div className="popup__container">
        <button
          type="button"
          className="popup__close"
          onClick={props.onClose}
        ></button>
        <h2 className="popup__title">{props.title}</h2>
        <form name={props.name} className={`popup__form popup__${props.name}`} onSubmit={props.onSubmit}>
          {props.children}
          <button
            type="submit"
            className="popup__button-save popup__button-save-edit-avatar"
          >
            {props.btnText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
