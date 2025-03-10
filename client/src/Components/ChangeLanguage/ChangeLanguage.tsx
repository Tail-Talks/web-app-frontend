import React, { useState } from 'react';
import Select from 'react-select';
import './ChangeLanguage.less';

const ChangeLanguage = () => {
  const options = [
    { value: 'Русский', fullLabel: <div className="optionLabel"><img src="../../../public/logo/emojione_flag-for-russia.svg" alt="Русский" className="optionImg" />Русский</div>, shortLabel: 'Rus' },
    { value: 'English', fullLabel: <div className="optionLabel"><img src="../../../public/logo/emojione_flag-for-united-states.svg" alt="English" className="optionImg" />English</div>, shortLabel: 'Eng' },
    { value: '中國人', fullLabel: <div className="optionLabel"><img src="../../../public/logo/emojione_flag-for-china.svg" alt="中國人" className="optionImg" />中國人</div>, shortLabel: '中國人' },
    { value: 'Deutsch', fullLabel: <div className="optionLabel"><img src="../../../public/logo/emojione_flag-for-germany.svg" alt="Deutsch" className="optionImg" />Deutsch</div>, shortLabel: 'Deu' },
    { value: 'Françai', fullLabel: <div className="optionLabel"><img src="../../../public/logo/emojione_flag-for-france.svg" alt="Françai" className="optionImg" />Françai</div>, shortLabel: 'Fra' },
    { value: 'Español', fullLabel: <div className="optionLabel"><img src="../../../public/logo/emojione_flag-for-spain.svg" alt="Españол" className="optionImg" />Españол</div>, shortLabel: 'Spa' },
    { value: 'қазақ', fullLabel: <div className="optionLabel"><img src="../../../public/logo/emojione_flag-for-kazakhstan.svg" alt="қазақ" className="optionImg" />қазақ</div>, shortLabel: 'Kaz' }
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };


  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: 'none',
      boxShadow: 'none',
    }),
  };

  return (
    <div className="changeLanguageContainer" >
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        styles={customStyles}
        formatOptionLabel={(option, { context }) => (
          context === 'menu' ? option.fullLabel : option.shortLabel
        )}
       
      />
    </div>
  );
};

export default ChangeLanguage;
