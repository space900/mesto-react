import React from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  return (
    <div className="page">
      <Header />

      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
      />

      

      <Footer />
      <PopupWithForm
        title="Редактировать профиль"
        name="editProfile"
        buttonTitle="Сохранить"
        isOpen={isEditProfilePopupOpen}
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
        >
        <fieldset className="popup__form" name="field"
            method="get">

            
          
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
      />
      <PopupWithForm title="Вы уверены?" name="remove" buttonTitle="Да" />
      
      
      <div class="popup popup_avatar">
        <div class="popup__container">
          <button
            class="popup__close popup__close_cards"
            aria-label="Закрыть"
            type="button"
          ></button>
          <h2 class="popup__title">Обновить аватар</h2>
          <form
            action="#"
            class="popup__form"
            name="field"
            method="get"
            
          >
            <input
              id="popup__avatar-name"
              type="url"
              placeholder="Ссылка на аватар"
              value=""
              name="avatar"
              class="popup__text popup__text_field_name popup__text_input"
              required
            />
            <span class="popup__avatar-name-error popup__text-input"></span>
            <button
              class="popup__submit popup__submit_save-btn"
              type="submit"
              aria-label="Сохранить"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div class="popup popup_delete">
        <div class="popup__container popup__container_delete-form">
          <button
            class="popup__close popup__close_delete-form"
            aria-label="Закрыть"
            type="button"
          ></button>
          <form class="popup__form">
            <h2 class="popup__title popup__title_delete-form">Вы уверены?</h2>
            <button class="popup__submit popup__submit_delete-btn popup__submit_save-btn">
              Да
            </button>
          </form>
        </div>
      </div>
      <div class="popup popup_background popup_photo">
        <figure class="popup__position">
          <button
            class="popup__close popup__close_photo popup__close_image"
            aria-label="Закрыть"
            type="button"
          ></button>
          <img
            src="<%=require('./images/tarasovka.jpg')%>"
            alt="рабочий с мороженым"
            class="popup__image"
          />
          <p class="popup__caption"></p>
        </figure>
      </div>
    </div>
  );
}

export default App;
