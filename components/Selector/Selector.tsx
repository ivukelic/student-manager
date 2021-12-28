import React from "react";
import classNames from "classnames";

interface Props {
  name: string;
  label?: string;
  options: string[];
  value: string;
  size?: number;
  className?: string;
  onChange: (option: any) => void;
}

const Selector: React.FC<Props> = ({
  name,
  options,
  label,
  value,
  size,
  className,
  onChange,
}) => {
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
