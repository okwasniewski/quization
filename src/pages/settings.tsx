import React, { useState } from 'react';
import AuthorizedTemplate from 'templates/AuthorizedTemplate';

function Settings() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <AuthorizedTemplate title="Ustawienia" description="Strona ustawień">
      <div className="p-6 card bordered max-w-sm m-auto">
        <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text text-xl font-normal">
              Powiadomienia
            </span>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleChange}
              className="toggle"
            />
          </label>
        </div>
      </div>
      <div className="text-center">
        <button type="button" className="btn btn-primary m-2">
          zresetuj postęp
        </button>
        <button type="button" className="btn m-2">
          usuń konto
        </button>
      </div>
    </AuthorizedTemplate>
  );
}

export default Settings;
