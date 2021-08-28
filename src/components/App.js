import React from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import api from "../utils/Api";

function App() {

  const [currentUser, setCurrentUser] = React.useState(CurrentUserContext);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cards]) => {
        setCurrentUser(userData);
        setCards(cards)
      })
      .catch((e) => console.log(`Ошибка при получении данных: ${e}`));
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddCardClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  // function handleDeleteClick(card) {
    
  // }


  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.setLike(card._id, !isLiked)
      .then(newCard => {
        setCards(state => state.map(c => c._id === card._id ? newCard : c));
    })
    .catch(err => console.log(`Ошибка при попытке поставить лайк: ${err}`))
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        setCards(cards.filter(c => c._id !== card._id));
        closeAllPopups();
      })
      .catch(err => console.log(`Ошибка при удалении карточки: ${err}`))
  }


  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    
    <div className="page">
     <CurrentUserContext.Provider value={currentUser}>
      <Header />

      <Main cards={cards}
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddCardClick}
        onCardClick={handleCardClick}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
      />

      <Footer />
      <PopupWithForm
        title="Редактировать профиль"
        name="editProfile"
        buttonTitle="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id="popup__nickname"
          type="text"
          placeholder="Имя"
          name="name"
          className="popup__text popup__text_field_nickname popup__text_input"
          minLength="2"
          maxLength="40"
        />
        <span className="popup__nickname-error popup__text-input"></span>
        <input
          id="popup__job"
          type="text"
          placeholder="О себе"
          name="job"
          className="popup__text popup__text_field_job popup__text_input"
          minLength="2"
          maxLength="200"
        />
        <span className="popup__job-error popup__text-input"></span>
      </PopupWithForm>
      <PopupWithForm
        title="Новое место"
        name="addCard"
        buttonTitle="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id="popup__photo-name"
          type="text"
          placeholder="Название"
          name="photoName"
          className="popup__text popup__text_field_name popup__text_input"
          minLength="2"
          maxLength="30"
        />
        <span className="popup__photo-name-error popup__text-input"></span>
        <input
          id="popup__link"
          type="url"
          placeholder="Ссылка на картинку"
          name="link"
          className="popup__text_field_link popup__text popup__text_input"
        />
        <span className="popup__link-error popup__text-input"></span>
      </PopupWithForm>
      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        buttonTitle="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id="popup__avatar-name"
          type="url"
          placeholder="Ссылка на аватар"
          name="avatar"
          className="popup__text popup__text_field_name popup__text_input"
          required
        />
        <span className="popup__avatar-name-error popup__text-input"></span>
      </PopupWithForm>
      <PopupWithForm title="Вы уверены?" name="remove" buttonTitle="Да" />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </div>
    
  );
}

export default App;
