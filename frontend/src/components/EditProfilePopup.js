import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onChangeUserInfo }) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const user = React.useContext(CurrentUserContext);

  function updateName(e) {
    setName(e.target.value);
  }

  function updateDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmitUserInfo(e) {
    e.preventDefault();
    onChangeUserInfo({ name: name, about: description });
  }

  React.useEffect(() => {
    setName(user.name);
    setDescription(user.about);
  }, [user,isOpen]);

  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      btnText="Сохранить"
      onSubmit={handleSubmitUserInfo}
    >
      <input
        id="name-author"
        type="text"
        name="name"
        minLength="2"
        maxLength="40"
        placeholder="Имя"
        className=" popup__input popup__input_type_name "
        onChange={updateName}
        value={name || " "}
        required
      />
      <span className=" name-author-error popup__input-error"> </span>
      <input
        id="job-author"
        value={description || " "}
        type="text"
        name="about"
        minLength="2"
        maxLength="200"
        placeholder="Призвание"
        className=" popup__input popup__input_type_job"
        onChange={updateDescription}
        required
      />
      <span className=" job-author-error popup__input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
