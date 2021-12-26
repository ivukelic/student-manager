import React from "react";

interface Props {
  placeholder?: string;
  className?: string;
  value?: string;
  name: string;
  onChange?: (...args: any[]) => any;
}

export const InputField: React.FC<Props> = ({
  placeholder,
  className,
  value,
  name,
  onChange,
}) => {
  //   const handleOnChange = (e: any) => {
  //     if (onChange) {
  //       onChange(e.target.vaule);
  //     }
  //     return null;
  //   };

  return (
    <div>
      <input
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default InputField;
