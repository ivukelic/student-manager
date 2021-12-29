import React from "react";
import classNames from "classnames";

interface Props {
  name: string;
  label?: string;
  options: string[];
  value: string;
  size?: number;
  className?: string;
  hasHint?: boolean;
  onChange: (option: any) => void;
}

const Selector = ({
  name,
  options,
  label,
  value,
  size,
  className,
  hasHint,
  onChange,
}: Props): JSX.Element => {
  return (
    <div>
      <div>{label}</div>
      <select
        className={classNames(className)}
        name={name}
        onChange={onChange}
        value={value}
        size={size}
      >
        {hasHint && (
          <option selected disabled value="">
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
