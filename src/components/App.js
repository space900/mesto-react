import React from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});

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

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page">
      <Header />

      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddCardClick}
        onCardClick={handleCardClick}
      />

      <Footer />
      <PopupWithForm
        title="Редактировать профиль"
        name="editProfile"
        buttonTitle="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="popup__form">
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
        </fieldset>
      </PopupWithForm>
      <PopupWithForm
        title="Новое место"
        name="addCard"
        buttonTitle="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="popup__form" name="field" method="get">
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
        </fieldset>
      </PopupWithForm>
      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        buttonTitle="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="popup__form" method="get">
          <input
            id="popup__avatar-name"
            type="url"
            placeholder="Ссылка на аватар"
            name="avatar"
            className="popup__text popup__text_field_name popup__text_input"
            required
          />
          <span className="popup__avatar-name-error popup__text-input"></span>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm title="Вы уверены?" name="remove" buttonTitle="Да" />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
