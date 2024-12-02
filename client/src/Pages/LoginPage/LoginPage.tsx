import React from 'react'
import "./LoginPage.less"
import LoginPageForm from '../../Components/LoginPageForm/LoginPageForm'
import ChangeLanguage from '../../Components/ChangeLanguage/ChangeLanguage'

export default function LoginPage() {
  return (
  <div className="pageWrapper">
    <header className="headerBox">
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
    </header>
    <div className="loginPageBox">
      <div className="loginPageLeftSide">
          <img className="loginPageLeftSideLogo" src="../../../public/images/dogMainEntrance.svg" alt="logoTailTalk" />
      </div>
      <div className="loginPageRightSide">
          <LoginPageForm/>
          
      </div>
    </div>
   </div>
  )
}
