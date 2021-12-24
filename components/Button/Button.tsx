import React from "react";

interface Props {
  children?: React.ReactNode;
  onClick: () => void;
  className?: string;
  variant: "icon" | "text";
  disabled?: boolean;
}

const Button: React.FC<Props> = ({
  children,
  onClick,
  className,
  variant,
  disabled,
}) => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
