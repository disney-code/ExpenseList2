import React, { useState } from 'react';

const MyComponent = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <div>
      <div className="input-container">
        <input
          type="text"
          value={selectedOption}
          onChange={(event) => setSelectedOption(event.target.value)}
          onClick={toggleDropdown}
        />
        {isDropdownOpen && (
          <div className="dropdown">
            <ul>
              <li onClick={() => handleOptionChange('Option 1')}>Option 1</li>
              <li onClick={() => handleOptionChange('Option 2')}>Option 2</li>
              <li onClick={() => handleOptionChange('Option 3')}>Option 3</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyComponent;
