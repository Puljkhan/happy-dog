import { ReactNode } from "react";

type InputProps = {
  disabled?: boolean;
  placeholder?: string;
  icon?: ReactNode;
  size?: "sm" | "md" | "lg";
  value: string;
  onChange: (value: string) => void;
};

const Input = ({
  disabled = false,
  placeholder = "",
  icon,
  size = "md",
  value,
  onChange,
}: InputProps) => {
  return (
    <div className="input__wrapper">
      <input
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        value={value}
        placeholder={placeholder}
        className={`input input--${size} ${icon && "input--hasIcon"}`}
        type="text"
      />
      <div className="input__icon">{icon}</div>
    </div>
  );
};
export default Input;
