import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const ButtonStory = ({
  label = 'Test',
  outline,
  disabled,
  large,
}: {
  label: string;
  outline: boolean;
  disabled: boolean;
  large: boolean;
}) => (
  <Button
    label={label}
    outline={outline}
    disabled={disabled}
    large={large}
    onClick={() => {}}
  />
);
