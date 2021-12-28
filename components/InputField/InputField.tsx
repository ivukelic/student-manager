import classNames from "classnames";
import React from "react";
import styles from "./InputField.module.scss";

interface Props {
  placeholder?: string;
  className?: string;
  value?: string;
  name: string;
  type: string;
  label?: string;
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
  label,
  onBlur,
  onChange,
  onClick,
}) => {
  return (
    <div>
      <div>{label}</div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onClick={onClick}
        onBlur={onBlur}
        autoComplete="off"
        className={classNames(className, styles.input)}
      />
    </div>
  );
};

export default InputField;
