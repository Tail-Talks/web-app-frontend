import React, { useState } from "react";
import "../Header/Header.less";
import Select from "react-select";
import ChangeLanguage from "../ChangeLanguage/ChangeLanguage";

export default function Header() {

  return (
    <>
      <div className="headerBox">
        <div className="headerBoxLeft">
          <div className="headerLogo">
            <img
              className="headerLogoImg"
              src="../../../public/logo/logoGroupHeader.svg"
              alt=""
            />
            <p className="headerMotto">
              Здесь каждый питомец достоин стать звездой
            </p>
          </div>
        </div>
        <div className="headerBoxRight">
          <div className="headerWallet">
            <button className="headerWalletButton">Подключить кошелек</button>
          </div>
          <div className="headerLanguage">
           <ChangeLanguage/>
          </div>
        </div>
      </div>
    </>
  );
}
