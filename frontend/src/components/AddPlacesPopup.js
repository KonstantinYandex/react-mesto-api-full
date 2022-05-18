import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacesPopup({ isOpen, onClose, onAddPlace }) {
  const nameOfPlace = React.useRef();
  const linkToPlace = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: nameOfPlace.current.value,
      link: linkToPlace.current.value,
    });
  }

  React.useEffect(()=>{
    
    nameOfPlace.current.value= ''
    linkToPlace.current.value= ''
  },[isOpen])

  return (
    <PopupWithForm
      name="add-cards"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      btnText="Сохранить"
    >
      <input
        id="edit-form"
        type="text"
        name="name"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        className=" popup__input popup__input_type_name-card"
        required
        ref={nameOfPlace}
      />
      <span className=" edit-form-error popup__input-error"></span>
      <input
        id="link"
        type="url"
        name="link"
        placeholder="Ссылка на страницу"
        className="popup__input popup__input_type_link-card"
        required
        ref={linkToPlace}
      />
      <span className="link-error popup__input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacesPopup;
