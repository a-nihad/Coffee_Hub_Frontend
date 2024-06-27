function Button({
  children,
  onClick,
  className,
  variation,
  disabled,
  ...props
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${
        variation === "primary"
          ? "bg-color_primary text-color_secondary hover:bg-color_primary_dark"
          : variation === "secondary"
            ? "bg-color_primary_dark hover:bg-color_secondary"
            : variation === "danger"
              ? "bg-color_danger hover:bg-color_danger_dark"
              : variation === "icon"
                ? "rounded-full border p-3 text-black hover:scale-105 hover:text-color_primary_dark"
                : "bg-color_primary_dark hover:bg-color_primary"
      } text-color_white ${disabled ? "cursor-not-allowed opacity-50" : ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
