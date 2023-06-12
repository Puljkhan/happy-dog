import { ReactNode } from "react";
import IconDownload from "../assets/icons/download";

type InputProps = {
  placeholder?: string;
  icon?: ReactNode;
  size?: "sm" | "md" | "lg";
};

const Input = ({ placeholder = "", icon, size }: InputProps) => {
  return (
    <div className="input__wrapper">
      <div className="input__icon">{icon}</div>
      <input
        placeholder={placeholder}
        className={`input input--${size} ${icon && "input--hasIcon"} `}
        type="text"
      />
    </div>
  );
};

export default Input;
