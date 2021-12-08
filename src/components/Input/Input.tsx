import React from 'react';

interface InputProps {
  type: React.HTMLInputTypeAttribute;
  value: string | number;
  required?: boolean;
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

function Input({ type, value, placeholder, required, onChange }: InputProps) {
  return (
    <input
      type={type}
      value={value}
      required={required}
      placeholder={placeholder}
      onChange={onChange}
      className="font-semibold rounded-full text-gray-500 text-lg m-2 p-2 border-main border-2 bg-white px-5 py-1"
    />
  );
}

export default Input;

//   className={`px-10 m-2 py-1 rounded-full text-lg  font-semibold transition-all transform hover:scale-110 disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed ${
