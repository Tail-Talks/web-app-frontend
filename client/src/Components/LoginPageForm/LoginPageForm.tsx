import React, { useState } from "react";
import "./LoginPageForm.less";

export default function LoginPageForm() {
  return (
    <>
      <div className="loginFormContainer">
        <form className="loginForm">
          <input
            type="text"
            placeholder="Телефон, имя пользователя или e-mail"
            className="loginInput"
          />

          <input placeholder="Пароль" className="loginInput" />
          <button type="submit" className="loginButton">
            Войти
          </button>
          <div className="separator">
            <span>или</span>
          </div>
          <button  className="web3Button">
            Войти через web3
          </button>
          <a href="#" className="forgotPassword">
            Забыли пароль?
          </a>
        </form>
      </div>

      <a href="#" className="createAccount">
        Создать новый аккаунт
      </a>

      <div className="appInfoBox">
      <p className="appInfo">
        Приложение TailTalks находится на стадии разработки. Присоединяйтесь к
        нашему <a href="#">Telegram-каналу</a>, чтобы быть в курсе всех
        актуальных новостей!
      </p>
      </div>
      
    </>
  );
}
