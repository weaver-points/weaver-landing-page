export default function Card({ children, className = "" }) {
    return (
        <div
            className={`bg-white shadow-lg rounded-2xl border border-gray-200 ${className}`}
        >
            {children}
        </div>
    );
}
