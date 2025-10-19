import { useRef } from "react";

export default function Input({ icon, alt, input, onChange }) {
  const inputRef = useRef();
  const emptyInput = input < 1;

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <div
      className={`input flex rounded ${emptyInput && "error"}`}
      onClick={handleClick}
    >
      <img src={icon} alt={alt} />
      <input
        type="text"
        inputMode="numeric"
        value={input}
        onChange={onChange}
        ref={inputRef}
      />
    </div>
  );
}
