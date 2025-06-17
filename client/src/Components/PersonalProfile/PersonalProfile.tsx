import React from "react";
import "./PersonalProfile.less";
import PAimage from "../../assets/pa_image.jpeg";
import PAarrow from "../../assets/pa_arrow.svg";

const PersonalProfile = () => {
  return (
    <div className="personalProfileContainer">
      <button className="personalProfile__btn personalProfile__btn-back">
        <img src={PAarrow} alt="arrow" className="arrowIcon-left" />
      </button>

      <h3 className="personalProfile__title">Личный кабинет</h3>

      <ul className="personalProfile__tabs-list">
        <li className="personalProfile__tab">
          <span>Профиль</span>
        </li>
        <li className="personalProfile__tab">
          <span>Информация о питомце</span>
        </li>
        <li className="personalProfile__tab">
          <span>Информация об аккаунте</span>
        </li>
      </ul>

      <div className="personalProfile__avatarContainer">
        <div className="personalProfile__avatarWrapper">
          <img className="personalProfile__avatar" src={PAimage} alt="avatar" />
          <button className="personalProfile__removeAvatar">×</button>
        </div>
        <button className="personalProfile__addAvatar">＋</button>
      </div>

      <ul className="personalProfile__infoButtons-list">
        <li className="personalProfile__infoButton-li">
          <button className="personalProfile__infoButton">
            <span className="personalProfile__infoButton-text">Логин</span>
            <img src={PAarrow} alt="arrow" className="arrowIcon-right" />
          </button>
        </li>
        <li className="personalProfile__infoButton-li">
          <button className="personalProfile__infoButton">
            <span className="personalProfile__infoButton-text">
              Имя пользователя
            </span>
            <img src={PAarrow} alt="arrow" className="arrowIcon-right" />
          </button>
        </li>
        <li className="personalProfile__infoButton-li">
          <button className="personalProfile__infoButton">
            <span className="personalProfile__infoButton-text">
              Описание профиля
            </span>
            <img src={PAarrow} alt="arrow" className="arrowIcon-right" />
          </button>
        </li>
      </ul>

      <div className="personalProfile__footer">
        <a
          href="#"
          className="personalProfile__footer-links personalProfile__footer-links-policy"
        >
          Политика конфиденциальности
        </a>
        <div className="personalProfile__footer-comunityAndSupport-linksContainer">
          <a href="#" className="personalProfile__footer-links">
            Сообщество
          </a>
          <a href="#" className="personalProfile__footer-links">
            Помощь
          </a>
        </div>
        <p className="personalProfile__footer-text">
          © 2024 Tail Talks. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default PersonalProfile;
