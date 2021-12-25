import React from "react";

interface Props {
  name: string;
  label: string;
  options: string[];
  value: string;
  onChange: (option: any) => void;
}

const Selector: React.FC<Props> = ({
  name,
  options,
  label,
  value,
  onChange,
}) => {
  return (
    <>
      <div>{label}</div>
      <select name={name} onChange={onChange} value={value}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

export default Selector;
