import "./App.css";
import { useState } from "react";
import { handleChange } from "./components/handleChange";

import Layout from "./components/Layout";
import InputModal from "./components/InputModal";

function App() {
  const [bill, setBill] = useState(0);
  const [no, setNo] = useState(1);
  const [tip, setTip] = useState(0);
  const [showInput, setShowInput] = useState(false);

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
    setShowInput(false);
  }

  function handleTipChange(e) {
    handleChange(e, setTip);
  }

  /*
  function handleReset() {
    setBill(0);
    setNo(1);
    setTip("");
    setInput(false);
  }
  */

  function handleShowInput() {
    setShowInput((show) => !show);
  }

  return (
    <Layout>
      <InputModal
        bill={bill}
        no={no}
        tip={tip}
        showInput={showInput}
        onBillChange={handleBillChange}
        onNoChange={handleNoChange}
        onTipSelect={handleTipSelect}
        onTipChange={handleTipChange}
        onShowInput={handleShowInput}
      />

      {/* 
      <OutputModal
        tipAmount={tipAmount}
        totalBill={totalPerPerson}
        onReset={handleReset}
      /> 
      */}
    </Layout>
  );
}

/*
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
*/
export default App;
