export interface InputProps {
  type: React.HTMLInputTypeAttribute;
  value: string | number;
  required?: boolean;
  placeholder?: string;
  error?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
