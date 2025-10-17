import "./App.css";
import { useRef, useState } from "react";
import DollarIcon from "./assets/icon-dollar.svg";
import PersonIcon from "./assets/icon-person.svg";

function handleChange(e, f) {
  let value = e.target.value;

  // remove any word that is not a number
  value = value.replace(/[^0-9.]/g, "");

  f(Number(value));
}

function App() {
  const [bill, setBill] = useState(0);
  const [no, setNo] = useState(1);
  const [tip, setTip] = useState(0);
  const [showInput, setInput] = useState(false);

  const [billNum, peopleNum, tipPercent] = [bill || 0, no || 0, tip || 0];

  const tipAmount =
    peopleNum > 0 ? ((tipPercent / 100) * billNum) / peopleNum : 0;

  const totalPerPerson = peopleNum > 0 ? billNum / peopleNum + tipAmount : 0;

  // handle bill change
  function handleBillChange(e) {
    handleChange(e, setBill);
  }

  // handle no of people change
  function handleNoChange(e) {
    handleChange(e, setNo);
  }

  // handle tip input
  function handleTipSelect(percent) {
    setTip(Number(percent));
    setInput(false);
  }

  function handleTipChange(e) {
    handleChange(e, setTip);
  }

  function handleReset() {
    setBill(0);
    setNo(1);
    setTip("");
    setInput(false);
  }

  function handleShowInput() {
    setInput((show) => !show);
  }

  return (
    <div className="section">
      <div className="container flex">
        <div className="calculator flex rounded-lg">
          <InputModal
            bill={bill}
            no={no}
            tip={tip}
            showInput={showInput}
            handleBillChange={handleBillChange}
            handleNoChange={handleNoChange}
            handleTipSelect={handleTipSelect}
            onTipChange={handleTipChange}
            onShowInput={handleShowInput}
          />
          <OutputModal
            tipAmount={tipAmount}
            totalBill={totalPerPerson}
            onReset={handleReset}
          />
        </div>
      </div>
    </div>
  );
}

function InputModal({
  bill,
  no,
  tip,
  showInput,
  handleBillChange,
  handleNoChange,
  handleTipSelect,
  onTipChange,
  onShowInput,
}) {
  return (
    <form>
      <Input
        label="Bill"
        isInput
        icon={DollarIcon}
        alt="Dollar icon"
        i={bill}
        onChange={handleBillChange}
      />

      <Input label="Select Tip %">
        <div class="tip_wrapper flex">
          <Tag percent={5} tip={tip} onClick={() => handleTipSelect(5)} />
          <Tag percent={10} tip={tip} onClick={() => handleTipSelect(10)} />
          <Tag percent={15} tip={tip} onClick={() => handleTipSelect(15)} />
          <Tag percent={25} tip={tip} onClick={() => handleTipSelect(25)} />
          <Tag percent={50} tip={tip} onClick={() => handleTipSelect(50)} />
          <CustomTag
            tip={tip}
            onTipChange={onTipChange}
            showInput={showInput}
            onShowInput={onShowInput}
          />
        </div>
      </Input>

      <Input
        label="Number of People"
        isInput
        icon={PersonIcon}
        alt="Person icon"
        i={no}
        onChange={handleNoChange}
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

function Tag({ percent, onClick, tip }) {
  const selected = percent === tip;
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
      {percent}%
    </span>
  );
}

function CustomTag({ showInput, onTipChange, onShowInput }) {
  const [inputTip, setInputTip] = useState("");

  function handleInputChange(e) {
    handleChange(e, setInputTip);
    onTipChange(e);
  }

  return (
    <>
      {showInput ? (
        <input
          className="tag tag-input flex rounded"
          type="text"
          inputMode="numeric"
          value={inputTip}
          onChange={handleInputChange}
          autoFocus
          onBlur={inputTip || onShowInput}
        />
      ) : (
        <span className="tag flex rounded custom-tag" onClick={onShowInput}>
          Custom
        </span>
      )}
    </>
  );
}

function OutputModal({ tipAmount, totalBill, onReset }) {
  return (
    <div className="output flex rounded">
      <TipAmount label="Tip Amount" amount={tipAmount} />
      <TipAmount label="Total" amount={totalBill} />

      <button className="rounded" onClick={onReset}>
        RESET
      </button>
    </div>
  );
}

function TipAmount({ label, amount }) {
  return (
    <div className="flex">
      <span>
        {label}
        <br />
        <em className="per">/ person</em>
      </span>
      <p className="amount">
        <strong className="dollar">$</strong>
        {amount.toFixed(2)}
      </p>
    </div>
  );
}

export default App;
