import "./App.css";
import { useRef } from "react";
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
  return (
    <form>
      <Input label="Bill" isInput icon={DollarIcon} alt="Dollar icon" />

      <Input label="Select Tip %">
        <div class="tip_wrapper flex">
          <Tag percent="5%" />
          <Tag percent="10%" />
          <Tag percent="15%" />
          <Tag percent="25%" />
          <Tag percent="50%" />
          <Tag percent="Custom" />
        </div>
      </Input>

      <Input
        label="Number of People"
        isInput
        icon={PersonIcon}
        alt="Person icon"
      />
    </form>
  );
}

function Input({ label, children, isInput, icon, alt }) {
  const inputRef = useRef();

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <div>
      <label>{label}</label>
      <br />
      {isInput ? (
        <div class="input flex rounded" onClick={handleClick}>
          <img src={icon} alt={alt} />
          <input type="text" inputMode="numeric" dir="rtl" ref={inputRef} />
        </div>
      ) : (
        children
      )}
    </div>
  );
}

function Tag({ percent }) {
  return (
    <span
      className={`tag flex rounded ${percent === "Custom" ? "custom-tag" : ""}`}
    >
      {percent}
    </span>
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
