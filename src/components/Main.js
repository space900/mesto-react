import React, {useRef} from "react";

import api from "../utils/Api";
import Card from "./Card";

function Main({ onEditProfile, onEditAvatar, onAddPlace, onCardClick }) {
  


const [userInfo, setUserInfo] = React.useState({
  userName: "",
  userDescription: "",
  userAvatar: "",
});

const [cards, setCards] = React.useState([]);

React.useEffect(() => {
  
  Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([userData, cards]) => {
      setUserInfo({
        userName: userData.name,
        userDescription: userData.about,
        userAvatar: userData.avatar,
      });
      setCards(cards);
  
    })
    .catch((e) => console.log(`Ошибка при получении данных: ${e}`));
}, []);

  return (
    <main className="content">
      <section className="profile">
        <img
          onClick={onEditAvatar}
          src={userInfo.userAvatar}
          alt="аватар пользователя"
          className="profile__picture"
        />
        <div className="info">
          <h1 className="info__title">{userInfo.userName}</h1>
          <button
            onClick={onEditProfile}
            className="info__edit-btn"
            aria-label="Редактировать"
            type="button"
            onClick={onEditProfile}
          ></button>
          <p className="info__subtitle">{userInfo.userDescription}</p>
        </div>
        <button
          onClick={onAddPlace}
          className="profile__btn"
          aria-label="Добавить"
          type="button"
        ></button>
      </section>

      <section className="photo-grid">
      <ul className="photo-grid__list">
        {cards.map((card) => {
            return <Card key={card._id} card={card} onCardClick={onCardClick} />;
          })}
      </ul>
      </section>
    </main>
  );
}



export default Main;
