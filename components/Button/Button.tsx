import React from "react";

interface Props {
  children?: React.ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({
  children,
  onClick,
  className,
  disabled,
}) => {
  return (
    <button type="button" disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
