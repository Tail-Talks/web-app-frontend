import React, { ChangeEvent, FormEvent, useState } from 'react';
import './ProfileDescriptionForm.less';

const ProfileDescriptionForm = () => {
  const [description, setDescription] = useState<string>('');

  const handleChange = ( e:ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Profile description: ${description}`);
  };

  return (
    <div className="profileDescriptionContainer">
      <div className="profileButton">
      <button className="backButton"><img src="../../../public/logo/buttonBack.svg" alt="buttonBack"/></button>
      <button className="closeButton"><img src="../../../public/logo/buttonClose.svg" alt="buttonBack"/></button>
      </div>
        
      <form className="profileDescriptionForm" onSubmit={handleSubmit}>
      <label htmlFor='descriptionInput'>Описание профиля</label>
        <input
          className="descriptionInput"
          value={description}
          onChange={handleChange}
          placeholder="Описание профиля"
        ></input>
        <button type="submit" className="submitButton">Готово</button>
      </form>
    </div>
  );
};

export default ProfileDescriptionForm;
