export default function Button({
    children,
    onClick,
    variant = "default",
    className = "",
}) {
    const baseStyle =
        variant === "outline"
            ? "border border-[#16A349] text-white bg-transparent hover:bg-[#16A349]/10 backdrop-blur-sm"
            : "bg-gradient-to-r from-[#16A349] to-[#19c655] text-white hover:shadow-lg hover:shadow-[#16A349]/20";

    return (
        <button
            onClick={onClick}
            className={`rounded-xl px-6 py-3 font-medium transition-all duration-200 ${baseStyle} ${className}`}
        >
            {children}
        </button>
    );
}
