import React from "react";


function Main({ onEditProfile, onEditAvatar, onAddPlace}) {
  return (
    <main className="content">
      <section className="profile">
        <img
            onClick={onEditAvatar}
          src="<%=require('./images/avatar-3.jpg')%>"
          alt="аватар пользователя"
          className="profile__picture"
        />
        <div className="info">
          <h1 className="info__title">Somebody</h1>
          <button
            onClick={onEditProfile}
            className="info__edit-btn"
            aria-label="Редактировать"
            type="button"
          ></button>
          <p className="info__subtitle">dreamer</p>
        </div>
        <button
          onClick={onAddPlace}
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
