import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onEditAvatar }) {
  const avatarInput = React.useRef();

  function handleAvatarSubmit(e) {
    e.preventDefault();
    onEditAvatar({ avatar: avatarInput.current.value });
  }


  React.useEffect(()=>{
    
    avatarInput.current.value=''
  },[isOpen])


  return (
    <PopupWithForm
      name="edit-avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleAvatarSubmit}
      btnText="Сохранить"
    >
      <input
        id="link-avatar"
        type="url"
        name="link"
        ref={avatarInput}
        placeholder="Ссылка на аватар"
        className="popup__input popup__input_type_link-avatar"
        required
      />
      <span className="link-avatar-error popup__input-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
