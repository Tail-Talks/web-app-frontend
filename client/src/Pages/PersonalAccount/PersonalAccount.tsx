import React from 'react';
import './PersonalAccount.css';
import PaBtn from './CloseBtn/PaBtn';

export default function PersonalAccount() {
  return (
    <div className="pa__container">
      <button className="pa__btn pa__btn-back">
        <svg
          width="8"
          height="17"
          viewBox="0 0 8 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 16L1 8.34043L7 1"
            stroke="black"
            strokeOpacity="0.8"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <h2 className="pa__header">Личный кабинет</h2>

      <ul className="pa__ulist pa__ulist-mainNavList">
        <li className="pa__list-item">
          <button className="pa__btn pa__list-itemBtn">Профиль</button>
        </li>
        <li className="pa__list-item">
          <button className="pa__btn pa__list-itemBtn">
            Информация о питомце
          </button>
        </li>
        <li className="pa__list-item">
          <button className="pa__btn pa__list-itemBtn">
            Информация об аккаунте
          </button>
        </li>
      </ul>

      <div className="pa__photos-container">
        <PaBtn />
        <button className="pa__btn pa__photos-btn">
          <svg
            width="70"
            height="70"
            viewBox="0 0 70 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="35"
              cy="35"
              r="33.5"
              stroke="url(#paint0_linear_413_86)"
              strokeWidth="3"
            />
            <path
              d="M44 36.3481C44 36.6356 43.8862 36.9112 43.6837 37.1145C43.4811 37.3177 43.2064 37.4319 42.92 37.4319H36.08V44.296C36.08 44.5834 35.9662 44.8591 35.7637 45.0624C35.5611 45.2656 35.2864 45.3798 35 45.3798C34.7136 45.3798 34.4389 45.2656 34.2363 45.0624C34.0338 44.8591 33.92 44.5834 33.92 44.296V37.4319H27.08C26.7936 37.4319 26.5189 37.3177 26.3163 37.1145C26.1138 36.9112 26 36.6356 26 36.3481C26 36.0607 26.1138 35.785 26.3163 35.5817C26.5189 35.3785 26.7936 35.2643 27.08 35.2643H33.92V28.4002C33.92 28.1128 34.0338 27.8371 34.2363 27.6338C34.4389 27.4306 34.7136 27.3164 35 27.3164C35.2864 27.3164 35.5611 27.4306 35.7637 27.6338C35.9662 27.8371 36.08 28.1128 36.08 28.4002V35.2643H42.92C43.2064 35.2643 43.4811 35.3785 43.6837 35.5817C43.8862 35.785 44 36.0607 44 36.3481Z"
              fill="url(#paint1_linear_413_86)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_413_86"
                x1="70"
                y1="0"
                x2="0.767039"
                y2="70.004"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.277505" stopColor="#83B6FF" />
                <stop offset="0.859185" stopColor="#F47AFF" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_413_86"
                x1="44"
                y1="27.3164"
                x2="26.1339"
                y2="45.318"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.277505" stopColor="#83B6FF" />
                <stop offset="0.859185" stopColor="#F47AFF" />
              </linearGradient>
            </defs>
          </svg>
        </button>
      </div>

      <ul className="pa__ulist pa__ulist-detailsNavList">
        <li className="pa__ulist-detailsNavList-item">
          <button className="pa__ulist-detailsNavList-item-btn">
            <span className="pa__ulist-detailsNavList-item-text">Логин</span>
            <span className="pa__ulist-detailsNavList-item-arrow">
              <svg
                width="6"
                height="14"
                viewBox="0 0 6 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 13L5 6.87234L0.999999 1"
                  stroke="black"
                  strokeOpacity="0.8"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </button>
        </li>
        <li className="pa__ulist-detailsNavList-item">
          <button className="pa__ulist-detailsNavList-item-btn">
            <span className="pa__ulist-detailsNavList-item-text">
              Имя пользователя
            </span>
            <span className="pa__ulist-detailsNavList-item-arrow">
              <svg
                width="6"
                height="14"
                viewBox="0 0 6 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 13L5 6.87234L0.999999 1"
                  stroke="black"
                  strokeOpacity="0.8"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </button>
        </li>
        <li className="pa__ulist-detailsNavList-item">
          <button className="pa__ulist-detailsNavList-item-btn">
            <span className="pa__ulist-detailsNavList-item-text">
              Описание профиля
            </span>
            <span className="pa__ulist-detailsNavList-item-arrow">
              <svg
                width="6"
                height="14"
                viewBox="0 0 6 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 13L5 6.87234L0.999999 1"
                  stroke="black"
                  strokeOpacity="0.8"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </button>
        </li>
      </ul>

      <div className="pa__footer">
        <div>
          <a href="#" className="pa__footer-link">
            Политика конфиденциальности
          </a>
        </div>
        <div className="pa__footer-text-wrap-socHelp">
          <a href="#" className="pa__footer-link pa__footer-link-society">
            Сообщество
          </a>
          <a href="#" className="pa__footer-link">
            Помощь
          </a>
        </div>
        <div>
          <span className="pa__footer-text">
            © 2024 Tail Talks. All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
}
