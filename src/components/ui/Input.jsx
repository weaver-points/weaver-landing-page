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
            className={`border border-[#333333] rounded-xl px-4 py-3 w-full bg-[#222222] text-white placeholder:text-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#16A349] focus:border-transparent transition-all duration-200 ${className}`}
        />
    );
}
