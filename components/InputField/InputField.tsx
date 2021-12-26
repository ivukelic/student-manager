import React from "react";

interface Props {
  placeholder?: string;
  className?: string;
  value?: string;
  name: string;
  type: string;
  onBlur?: () => void;
  onChange?: (...args: any[]) => any;
  onClick?: () => void;
}

export const InputField: React.FC<Props> = ({
  placeholder,
  className,
  value,
  name,
  type,
  onBlur,
  onChange,
  onClick,
}) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onClick={onClick}
        onBlur={onBlur}
        autoComplete="off"
      />
    </div>
  );
};

export default InputField;
