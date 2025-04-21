export default function Input({
    type = "text",
    placeholder,
    value,
    onChange,
    className = "",
}) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`border border-gray-300 rounded-xl px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500 ${className}`}
        />
    );
}
