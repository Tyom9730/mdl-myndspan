import styles from "./Button.module.scss";

const Button = ({
  className,
  children,
  onClick,
  variant,
  size,
  icon,
  disabled,
}) => {
  return (
    <div className={`${styles["button-wrapper"]} ${className || ""}`}>
      <button
        type="button"
        onClick={onClick}
        className={`${styles[variant]} ${styles[size]} ${
          !children ? styles["only-icon"] : ""
        }`}
        disabled={disabled}
      >
        {icon}
        {children}
      </button>
    </div>
  );
};

export default Button;
