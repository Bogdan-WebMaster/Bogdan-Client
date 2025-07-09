import styles from "./Button.module.css";
import React from "react";

interface IButton{
  children: React.ReactNode;
  onClick: () => void;
  disabled: boolean;
  type: string;
  variant: string;
  size: string;
  className: string;
}
const Button: React.FC<IButton>  = ({
  children,
  onClick,
  disabled = false,
  type = "button",
  variant = "primary",
  size = "medium",
  className = "",
  ...props
}) => {

  const buttonClasses = `
    ${styles.button} 
    ${styles[variant]} 
    ${styles[size]} 
    ${disabled ? styles.disabled : ""} 
    ${className}
  `;
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses.trim()}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;