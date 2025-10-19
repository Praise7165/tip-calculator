export default function InputWrapper({ label, input, children }) {
  const emptyInput = input < 1;
  return (
    <div>
      <Heading label={label} emptyInput={emptyInput} />
      {children}
    </div>
  );
}

function Heading({ label, emptyInput }) {
  return (
    <label className="flex">
      <span>{label}</span>
      {emptyInput && <span className="validity">value can't be zero</span>}
    </label>
  );
}
