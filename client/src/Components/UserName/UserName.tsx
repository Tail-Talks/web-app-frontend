import React, { ChangeEvent, FormEvent, useState } from "react";
import "./UserName.less";

export default function UserName() {

  const [userName, setuserName] = useState<string>('');

  const handleChange = ( e:ChangeEvent<HTMLInputElement>) => {
    setuserName(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Profile description: ${userName}`);
  };


  return (
    <>
     <div className="userNameContainer">
      <div className="userNameButton">
      <button className="backButton"><img src="../../../public/logo/buttonBack.svg" alt="buttonBack"/></button>
      <button className="closeButton"><img src="../../../public/logo/buttonClose.svg" alt="buttonBack"/></button>
      </div>
        
      <form className="userNameForm" onSubmit={handleSubmit}>
      <label htmlFor='userNameInput'>Имя пользователя</label>
        <input
          className="userNameInput"
          value={userName}
          onChange={handleChange}
          placeholder="Elena Ivanova"
        ></input>
        <button type="submit" className="submitButton">Готово</button>
      </form>
    </div>
    </>
  )
}
