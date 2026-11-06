function Button({ children, variant = "primary" }) {
    let buttonClass = "dark-effect";

    if (variant === "primary") {
        buttonClass = "dark-effect";
    } else if (variant === "outline") {
        buttonClass = "transparent-effect";
    } else if (variant === "danger") {
        buttonClass = "red-accent";
    }

    return (
        <button className={buttonClass}>
            {children}
        </button>
    );
}

export default Button;
