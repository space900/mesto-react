import React from "react";

function handleEditAvatarClick() {
  document.querySelector(".popup_avatar").classList.add("popup_is-opened");
}

function handleEditProfileClick() {
  document.querySelector(".popup_texts").classList.add("popup_is-opened");
}

function handleAddPlaceClick() {
  document.querySelector(".popup_cards").classList.add("popup_is-opened");
}

function Main() {
  return (
    <main className="content">
      <section className="profile">
        <img
            onClick={handleEditAvatarClick}
          src="<%=require('./images/avatar-3.jpg')%>"
          alt="аватар пользователя"
          className="profile__picture"
        />
        <div className="info">
          <h1 className="info__title">Somebody</h1>
          <button
            onClick={handleEditProfileClick}
            className="info__edit-btn"
            aria-label="Редактировать"
            type="button"
          ></button>
          <p className="info__subtitle">dreamer</p>
        </div>
        <button
          onClick={handleAddPlaceClick}
          className="profile__btn"
          aria-label="Добавить"
          type="button"
        ></button>
      </section>

      <div className="photo-grid">
        <ul className="photo-grid__list"></ul>
      </div>
    </main>
  );
}

export default Main;
