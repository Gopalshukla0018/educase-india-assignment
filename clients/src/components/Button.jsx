export default function Button({ children, type = "button", className = "", ...props }) {
  return (
    <button
      type={type}
      className={`w-full py-2 rounded-md font-medium ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
