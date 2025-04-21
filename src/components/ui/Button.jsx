export default function Button({
    children,
    onClick,
    variant = "default",
    className = "",
}) {
    const baseStyle =
        variant === "outline"
            ? "border border-gray-800 text-gray-800 bg-white hover:bg-gray-50"
            : "bg-green-600 text-white hover:bg-green-700";

    return (
        <button
            onClick={onClick}
            className={`rounded-xl px-5 py-2 font-medium transition-colors duration-200 ${baseStyle} ${className}`}
        >
            {children}
        </button>
    );
}
