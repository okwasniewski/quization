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
            className="p-2 px-5 py-1 m-2 text-lg font-semibold text-gray-500 bg-white border-2 rounded-full border-main"
        />
    );
}

export default Input;