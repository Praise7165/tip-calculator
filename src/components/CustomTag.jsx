import { useState } from "react";
import { handleChange } from "./handleChange";

export default function CustomTag({ showInput, onShowInput, onTipChange }) {
  const [inputTip, setInputTip] = useState("");

  return (
    <>
      {showInput ? (
        <input
          className="tag tag-input flex rounded"
          type="text"
          inputMode="numeric"
          value={inputTip}
          onChange={(e) => {
            handleChange(e, setInputTip);
            onTipChange(e);
          }}
          autoFocus
          onBlur={inputTip || onShowInput}
        />
      ) : (
        <CustomButton onShowInput={onShowInput} />
      )}
    </>
  );
}

function CustomButton({ onShowInput }) {
  return (
    <span className="tag flex rounded custom-tag" onClick={onShowInput}>
      Custom
    </span>
  );
}
