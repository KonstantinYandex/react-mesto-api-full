import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacesPopup from "./AddPlacesPopup";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import registrationOk from "../images/authorization-ok.svg";
import registrationWrong from "../images/authorization-bad.svg";
import Login from "./Login";
import Register from "./Register";
import ProtectedRoute from "./ProtectedRoute";
import InfoTooltip from "./InfoTooltip";
import * as auth from "../utils/auth";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

  const [isPlacesPopupOpen, setIsPlacesPopupOpen] = React.useState(false);

  const [isTooltipOpen, setIsTooltipOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});

  const [currentUser, setCurrentUser] = React.useState({});

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [message, setMessage] = React.useState({ iconPath: "", text: "" });
  const [email, setEmail] = React.useState("");
  const history = useHistory();

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    if (loggedIn) {
      api
        .getOriginsCards()

        .then((cards) => {
          setCards(cards);
        })
        .catch((er) => {
          console.log(er);
        });
    }
  }, [loggedIn]);

  React.useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth
        .getContent(jwt)
        .then((res) => {
          setLoggedIn(true);
          setEmail(res.email);
          history.push("/");
        })
        .catch((err) => console.log(err));
    }
  }, [history]);

  React.useEffect(() => {
    if (loggedIn) {
      api
        .getUserInfo()
        .then((userInfo) => {
          setCurrentUser(userInfo);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i === currentUser._id);
    console.log(isLiked);
    api
      .changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((er) => {
        console.log(er);
      });
    api.getUserInfo().then((user) => {
      console.log(user);
    });
  }

  function updateUserInfo({ name, about }) {
    api
      .postUserInfo(name, about)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((er) => {
        console.log(er);
      });
  }

  function updateUserAvatar({ avatar }) {
    api
      .editUserAvatar(avatar)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((er) => {
        console.log(er);
      });
  }

  function handleCardDelete(card) {
    api
      .removeCard(card._id)
      .then(() => {
        const newCards = cards.filter((el) => el !== card);
        setCards(newCards);
      })
      .catch((er) => {
        console.log(er);
      });
  }

  function handleAddPlaceSubmit({ name, link }) {
    api
      .addNewCard(name, link)
      .then((data) => {
        setCards([data, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsPlacesPopupOpen(false);
    setSelectedCard({});
    setIsTooltipOpen(false);
  }

  function handleInfoTooltipOpen() {
    setIsTooltipOpen(true);
  }

  function handleInfoTooltipContent({ iconPath, text }) {
    setMessage({ iconPath: iconPath, text: text });
  }

  function handleSignOut() {
    setLoggedIn(false);
    localStorage.removeItem("jwt");
    setEmail("");
    history.push("/sign-in");
  }

  function registration({ email, password }) {
    auth
      .register(email, password)
      .then((res) => {
        if (res.status === 201 || res.status === 200) {
          console.log("111111111");
          handleInfoTooltipContent({
            iconPath: registrationOk,
            text: "Вы успешно зарегестрировались!",
          });
          handleInfoTooltipOpen();
          setTimeout(history.push, 3000, "/sign-in");
          setTimeout(closeAllPopups, 2500);
        }
        if (res.status === 409) {
          console.log("Введеный email уже зарегестрирован!");
          handleInfoTooltipContent({
            iconPath: registrationWrong,
            text: "Введеный email уже зарегестрирован!",
          });
          handleInfoTooltipOpen();
          setTimeout(closeAllPopups, 2500);
        }
      })
      .catch((err) => {
        handleInfoTooltipContent({
          iconPath: registrationWrong,
          text: "Что-то пошло не так! Попробуйте еще раз!",
        });
        handleInfoTooltipOpen();
        setTimeout(closeAllPopups, 2500);
        console.log(err);
      });
  }

  function authorization({ email, password }) {
    auth
      .authorize({ email, password })
      .then((data) => {
        if (!data) {
          throw new Error("Произошла ошибка");
        }
        console.log(1111111)
        setEmail(email);
        setLoggedIn(true);
        handleInfoTooltipContent({
          iconPath: registrationOk,
          text: "Вы успешны авторизованы!",
        });
        handleInfoTooltipOpen();
        setTimeout(history.push, 3000, "/");
        setTimeout(closeAllPopups, 2500);
      })
      .catch((err) => {
        handleInfoTooltipContent({
          iconPath: registrationWrong,
          text: "Что-то пошло не так! Попробуйте еще раз!",
        });
        handleInfoTooltipOpen();
        setTimeout(closeAllPopups, 2500);
        console.log(err);
      });
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsPlacesPopupOpen(true);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header loggedIn={loggedIn} email={email} handleSignOut={handleSignOut} />
      <Switch>
        <Route path="/sign-in">
          <Login authorization={authorization} />
        </Route>
        <Route path="/sign-up">
          <Register registration={registration} />
        </Route>
        <ProtectedRoute
          exact
          path="/"
          component={Main}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          cards={cards}
          onCardDelete={handleCardDelete}
          loggedIn={loggedIn}
        ></ProtectedRoute>

        <Route path="/">
          {loggedIn ? <Redirect to="/main" /> : <Redirect to="/sign-in" />}
        </Route>
      </Switch>
      <Footer />
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onChangeUserInfo={updateUserInfo}
      />
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onEditAvatar={updateUserAvatar}
      />

      <AddPlacesPopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlaceSubmit}
      />
      {/* на потом))) */}
      {/* <PopupWithForm name="confirm-delete" title="Вы уверены?" btnText="Да" /> */}

      <ImagePopup
        card={selectedCard}
        isOpen={isPlacesPopupOpen}
        onClose={closeAllPopups}
      />
      <InfoTooltip
        isOpen={isTooltipOpen}
        onClose={closeAllPopups}
        message={message}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
