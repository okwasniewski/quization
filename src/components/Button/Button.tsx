import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  outline?: boolean;
  disabled?: boolean;
  large?: boolean;
}

function Button({
  label,
  onClick,
  outline = false,
  disabled = false,
  large = false,
}: ButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`px-10 m-2 py-1 rounded-full text-base border-2 border-transparent font-semibold transition-all transform hover:scale-110 disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed ${large ? 'text-xl' : ''
        } ${outline
          ? 'border-main border-2 text-main hover:bg-main hover:text-white disabled:bg-white disabled:text-main'
          : 'bg-main text-white'
        }`}
    >
      {label}
    </button>
  );
}

export default Button;
