import React from 'react';
import { InputProps } from './Input.model';

function Input({
  type,
  value,
  placeholder,
  required,
  onChange,
  error,
}: InputProps) {
  return (
    <>
      <input
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
        className="p-2 px-5 py-2 m-2 text-md font-semibold text-gray-500 bg-white border-2 rounded-full border-main"
      />
      <p className="text-red-300 self-center max-w-sm text-center">{error}</p>
    </>
  );
}

export default Input;
