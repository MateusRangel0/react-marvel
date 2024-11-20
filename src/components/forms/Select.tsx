type SelectProps = {
  id: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  options: { value: string; label: string }[];
}

export default function Select({ id, value, onChange, className, options }: SelectProps) {
  return (
    <select
      id={id}
      value={value}
      onChange={onChange}
      className={`border border-gray-300 rounded px-4 py-2 ${className}`}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}