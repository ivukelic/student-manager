import React from "react";
import classNames from "classnames";
import styles from "./Selector.module.scss";

interface Props {
  name: string;
  label?: string;
  options: string[];
  value: string;
  size?: number;
  className?: string;
  hasHint?: boolean;
  onChange: (option: any) => void;
  onBlur?: () => void;
  onClick?: () => void;
}

const Selector = ({
  name,
  options,
  label,
  value,
  size,
  className,
  hasHint,
  onBlur,
  onChange,
  onClick,
}: Props): JSX.Element => {
  return (
    <div>
      <div>{label}</div>
      <select
        onBlur={onBlur}
        className={classNames(className)}
        name={name}
        onChange={onChange}
        onClick={onClick}
        value={value}
        size={size}
      >
        {hasHint && (
          <option className={styles.hint} selected disabled value="">
            -or filter by class-
          </option>
        )}
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
