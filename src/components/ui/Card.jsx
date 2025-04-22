export default function Card({ children, className = "" }) {
    return (
        <div
            className={`bg-[#161616] shadow-xl rounded-2xl border border-[#333333] backdrop-blur-sm hover:shadow-2xl hover:shadow-[#16A349]/10 transition-all duration-300 ${className}`}
        >
            {children}
        </div>
    );
}
