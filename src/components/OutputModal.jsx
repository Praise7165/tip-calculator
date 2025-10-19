import TipAmount from "./TipAmount";

export default function OutputModal({ tipAmount, totalBill, onReset }) {
  return (
    <div className="output flex rounded">
      <TipAmount label="Tip Amount">{tipAmount.toFixed(2)}</TipAmount>
      <TipAmount label="Total">{totalBill.toFixed(2)}</TipAmount>

      <Button onReset={onReset} />
    </div>
  );
}

function Button({ onReset }) {
  return (
    <button className="rounded" onClick={onReset}>
      RESET
    </button>
  );
}
