export interface InputProps {
    type: React.HTMLInputTypeAttribute;
    value: string | number;
    required?: boolean;
    placeholder?: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}