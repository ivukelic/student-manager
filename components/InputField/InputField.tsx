import classNames from "classnames";
import React, { useEffect, useRef } from "react";
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

export const InputField = ({
  placeholder,
  className,
  value,
  name,
  type,
  label,
  onBlur,
  onChange,
  onClick,
}: Props): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

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
        ref={inputRef}
      />
    </div>
  );
};

export default InputField;
