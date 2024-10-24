import React from 'react'
import "./LoginPage.less"
import LoginPageForm from '../../Components/LoginPageForm/LoginPageForm'

export default function LoginPage() {
  return (
   <>
   <div className="loginPageBox">
    <div className="loginPageLeftSide">
        <img className="loginPageLeftSideLogo" src="../../../public/images/dogMainEntrance.svg" alt="logoTailTalk" />
    </div>
    <div className="loginPageRightSide">
        <LoginPageForm/>
        
    </div>
   </div>
   </>
  )
}
