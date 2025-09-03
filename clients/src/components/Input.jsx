export default function Input({ type = "text", placeholder, required = false }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
  );
}
