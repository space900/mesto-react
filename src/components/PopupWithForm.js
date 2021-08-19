import React, { Children } from "react";

function PopupWithForm({name, title, isOpen, onclose, buttonTitle, children}) {
  return (
    <div
      className={`popup popup_type_${name} ${isOpen ? "popup_is-opened" : ""
      }`}
    >
      <div className="popup__container">
        <button
          type="button"
          className="popup__close"
          aria-label="Закрыть"
          onClick={onclose}
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" name={`${name}_form`}>
            {children}
            <button className="popup__submit-btn" type="submit" aria-label="Сохранить">{buttonTitle}</button>
        </form>
        
      </div>
    </div>
  );
}

export default PopupWithForm;
