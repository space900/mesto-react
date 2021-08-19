import React, { useState } from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";

const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
  React.useState(false);
const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

function App() {
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
    <div class="page">
      <Header />

      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
      />

      <template class="photo-grid__list-template" id="tmpl">
        <li class="photo-grid__card">
          <img
            src="<%=require('./images/tarasovka.jpg')%>"
            alt=""
            class="photo-grid__image"
          />
          <button
            class="photo-grid__delete-btn"
            aria-label="Удалить"
            type="button"
          ></button>
          <h3 class="photo-grid__title"></h3>
          <div class="photo-grid__like-container">
            <button
              class="photo-grid__like-btn"
              aria-label="Лайк"
              type="button"
            ></button>
            <h4 class="photo-grid__like-count">0</h4>
          </div>
        </li>
      </template>

      <Footer />
      <PopupWithForm
        title="Редактировать профиль"
        name="editProfile"
        buttonTitle="Сохранить"
        isOpen={isEditProfilePopupOpen}
      ></PopupWithForm>
      <PopupWithForm
        title="Новое место"
        name="addCard"
        buttonTitle="Создать"
        isOpen={isAddPlacePopupOpen}
      ></PopupWithForm>
      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        buttonTitle="Сохранить"
        isOpen={isEditAvatarPopupOpen}
      ></PopupWithForm>
      <PopupWithForm title="Вы уверены?" name="remove" buttonTitle="Да" />
      <div class="popup popup_texts">
        <div class="popup__container">
          <button
            class="popup__close popup__close_texts"
            aria-label="Закрыть"
            type="button"
          ></button>
          <h2 class="popup__title">Редактировать профиль</h2>
          <form
            action="#"
            class="popup__form"
            name="field"
            method="get"
            novalidate
          >
            <input
              id="popup__nickname"
              type="text"
              placeholder="Имя"
              value=""
              name="name"
              class="popup__text popup__text_field_nickname popup__text_input"
              minlength="2"
              maxlength="40"
              required
            />
            <span class="popup__nickname-error popup__text-input"></span>
            <input
              id="popup__job"
              type="text"
              placeholder="О себе"
              value=""
              name="job"
              class="popup__text popup__text_field_job popup__text_input"
              minlength="2"
              maxlength="200"
              required
            />
            <span class="popup__job-error popup__text-input"></span>
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
      <div class="popup popup_cards">
        <div class="popup__container">
          <button
            class="popup__close popup__close_cards"
            aria-label="Закрыть"
            type="button"
          ></button>
          <h2 class="popup__title">Новое место</h2>
          <form
            action="#"
            class="popup__form"
            name="field"
            method="get"
            novalidate
          >
            <input
              id="popup__photo-name"
              type="text"
              placeholder="Название"
              value=""
              name="photoName"
              class="popup__text popup__text_field_name popup__text_input"
              minlength="2"
              maxlength="30"
              required
            />
            <span class="popup__photo-name-error popup__text-input"></span>
            <input
              id="popup__link"
              type="url"
              placeholder="Ссылка на картинку"
              value=""
              name="link"
              class="popup__text_field_link popup__text popup__text_input"
              required
            />
            <span class="popup__link-error popup__text-input"></span>
            <button
              class="popup__submit popup__submit_create-btn popup__submit_save-btn"
              type="submit"
              disabled="true"
              aria-label="Создать"
            >
              Создать
            </button>
          </form>
        </div>
      </div>
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
            novalidate
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