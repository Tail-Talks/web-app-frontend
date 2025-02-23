import "../InfoPage/InfoAccount.css"
import '../PersonalAccount/PersonalAccount.css'
import CancelButton from "../../Components/Buttons/CancelButton/CancelButton";
import SaveButton from "../../Components/Buttons/SaveButton/SaveButton";

export default function InfoAccount() {
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

      <ul className="list list-detailsNavList">
        <li className="list-detailsNavList-item">
          <button className="list-detailsNavList-item-btn">
            <span className="list-detailsNavList-item-text">
              Язык: Русский
            </span>
            <span className="list-detailsNavList-item-arrow">
              <svg
                width="19"
                height="6"
                viewBox="0 0 19 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L9.68085 5L18 1"
                  stroke="black"
                  stroke-opacity="0.8"
                  stroke-linecap="round"
                />
              </svg>
            </span>
          </button>
        </li>{" "}
        <li className="pa__ulist-detailsNavList-item">
          <button className="pa__ulist-detailsNavList-item-btn">
            <span className="pa__ulist-detailsNavList-item-text">
              Регион: Беларусь
            </span>
            <span className="pa__ulist-detailsNavList-item-arrow">
              <svg
                width="19"
                height="6"
                viewBox="0 0 19 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L9.68085 5L18 1"
                  stroke="black"
                  stroke-opacity="0.8"
                  stroke-linecap="round"
                />
              </svg>
            </span>
          </button>
        </li>{" "}
        <li className="pa__ulist-detailsNavList-item">
          <button className="pa__ulist-detailsNavList-item-btn">
            <span className="pa__ulist-detailsNavList-item-text">
              Привязанный e-mail
            </span>
            <span className="pa__ulist-detailsNavList-item-arrow">
              <svg
                width="6"
                height="19"
                viewBox="0 0 6 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 18L4.5 9.31915L0.5 1"
                  stroke="black"
                  stroke-opacity="0.8"
                  stroke-linecap="round"
                />
              </svg>
            </span>
          </button>
        </li>
        <li className="pa__ulist-detailsNavList-item">
          <button className="pa__ulist-detailsNavList-item-btn">
            <span className="pa__ulist-detailsNavList-item-text">
              Кошелек Web3
            </span>
            <span className="pa__ulist-detailsNavList-item-arrow">
              <svg
                width="6"
                height="19"
                viewBox="0 0 6 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 18L4.5 9.31915L0.5 1"
                  stroke="black"
                  stroke-opacity="0.8"
                  stroke-linecap="round"
                />
              </svg>
            </span>
          </button>
        </li>
      </ul>
      <SaveButton />
      <CancelButton />
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
