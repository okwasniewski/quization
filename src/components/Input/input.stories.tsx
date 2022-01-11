import Input from './Input';
import { InputProps } from './Input.model';

export default {
  title: 'Components/Input',
  component: Input,
};

export const InputStory = ({
  type = 'Text',
  value = 'Value',
  required = false,
  placeholder = 'Placeholder',
}: InputProps) => (
  <Input
    type={type}
    value={value}
    required={required}
    placeholder={placeholder}
    onChange={() => {}}
  />
);
