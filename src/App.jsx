import "./App.css";
import { useRef, useState } from "react";
import DollarIcon from "./assets/icon-dollar.svg";
import PersonIcon from "./assets/icon-person.svg";

function App() {
  return (
    <div className="section">
      <div className="container flex">
        <div className="calculator flex rounded-lg">
          <InputModal />
          <OutputModal />
        </div>
      </div>
    </div>
  );
}

function InputModal() {
  const [bill, setBill] = useState(0);
  const [no, setNo] = useState(1);
  const [tip, setTip] = useState(0);

  function handleChange(e, f) {
    let value = e.target.value;

    // remove any word that is not a number
    value = value.replace(/[^0-9.]/g, "");

    f(Number(value));
  }

  function handleTipSelect(percent) {
    setTip(Number(percent));
  }

  return (
    <form>
      <Input
        label="Bill"
        isInput
        icon={DollarIcon}
        alt="Dollar icon"
        i={bill}
        onChange={(e) => handleChange(e, setBill)}
      />

      <Input label="Select Tip %">
        <div class="tip_wrapper flex">
          <Tag
            percent="5%"
            selected={tip === 5}
            onClick={() => handleTipSelect(5)}
          />
          <Tag
            percent="10%"
            selected={tip === 10}
            onClick={() => handleTipSelect(10)}
          />
          <Tag
            percent="15%"
            selected={tip === 15}
            onClick={() => handleTipSelect(15)}
          />
          <Tag
            percent="25%"
            selected={tip === 25}
            onClick={() => handleTipSelect(25)}
          />
          <Tag
            percent="50%"
            selected={tip === 50}
            onClick={() => handleTipSelect(50)}
          />
          <CustomTag />
        </div>
      </Input>

      <Input
        label="Number of People"
        isInput
        icon={PersonIcon}
        alt="Person icon"
        i={no}
        onChange={(e) => handleChange(e, setNo)}
      />
    </form>
  );
}

function Input({ label, children, isInput, icon, alt, i, onChange }) {
  const inputRef = useRef();

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <div>
      <label className="flex">
        <span>{label}</span>
        {i < 1 && <span className="validity">value can't be zero</span>}
      </label>
      {isInput ? (
        <div
          class={`input flex rounded ${i < 1 && "error"}`}
          onClick={handleClick}
        >
          <img src={icon} alt={alt} />
          <input
            type="text"
            inputMode="numeric"
            value={i}
            onChange={onChange}
            ref={inputRef}
          />
        </div>
      ) : (
        children
      )}
    </div>
  );
}

function Tag({ percent, onClick, selected }) {
  return (
    <span
      className="tag flex rounded"
      onClick={onClick}
      style={
        selected
          ? {
              backgroundColor: "hsl(185, 42%, 84%)",
              color: "hsl(183, 100%, 15%)",
            }
          : {}
      }
    >
      {percent}
    </span>
  );
}

function CustomTag() {
  const [showInput, setInput] = useState(false);

  return (
    <div
      onClick={() => setInput(!showInput)}
      className={`${showInput && "input"}`}
    >
      {showInput ? (
        <input type="text" inputMode="numeric" />
      ) : (
        <span className="tag flex rounded custom-tag">Custom</span>
      )}
    </div>
  );
}

function OutputModal() {
  return (
    <div className="output flex rounded">
      <TipAmount label="Tip Amount" />
      <TipAmount label="Total" />

      <button className="rounded">RESET</button>
    </div>
  );
}

function TipAmount({ label }) {
  return (
    <div className="flex">
      <span>
        {label}
        <br />
        <em className="per">/ person</em>
      </span>
      <p className="amount">$0.00</p>
    </div>
  );
}

export default App;
