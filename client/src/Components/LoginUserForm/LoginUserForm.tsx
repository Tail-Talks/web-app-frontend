import React, { ChangeEvent, FormEvent, useState } from 'react'
import "./LoginUserForm.less"

export default function LoginUserForm() {

const [loginUser, setloginUser] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setloginUser(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Profile description: ${loginUser}`);
  };
  return (
    <>
     <div className="loginUserContainer">
      <div className="loginUserButton">
        <button className="backButton"><img src="../../../public/logo/buttonBack.svg" alt="buttonBack"/></button>
        <button className="closeButton"><img src="../../../public/logo/buttonClose.svg" alt="buttonBack"/></button>
      </div>
        
      <form className="loginUserForm" onSubmit={handleSubmit}>
      <label htmlFor='loginUserInput'>Логин</label>
        <input
          className="loginUserInput"
          value={loginUser}
          onChange={handleChange}
          placeholder="elena65783"
        ></input>
        <button type="submit" className="submitButton">Готово</button>
      </form>
    </div>
    </>
  )
}
