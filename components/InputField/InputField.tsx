import React from "react";

interface Props {
  placeholder?: string;
  className?: string;
  value?: string;
  name: string;
  type: string;
  onChange?: (...args: any[]) => any;
}

export const InputField: React.FC<Props> = ({
  placeholder,
  className,
  value,
  name,
  type,
  onChange,
}) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default InputField;
