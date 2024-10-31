import React from "react";
import Logo from "../../components/Logo/Logo";

const SignUp = () => {
  return (
    <div>
      <header className="header-auth">
        <div className="logo-container">
          <Logo />
          <p className="logo-description">
            Здесь каждый питомец достоин стать звездой
          </p>
        </div>
      </header>
    </div>
  );
};

export default SignUp;
