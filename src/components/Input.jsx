import "./Input.css";

export default function Input({
  label,
  name,
  type,
  placeholder,
  required,
  className,
}) {
  return (
    <div className="input-group">
      {label && (
        <label htmlFor={name} className="input-label">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className={`${className || "input"}`}
      />
    </div>
  );
}
