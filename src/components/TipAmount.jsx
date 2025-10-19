export default function TipAmount({ label, children }) {
  return (
    <div className="flex">
      <span>
        {label}
        <br />
        <em className="per">/ person</em>
      </span>
      <Amount children={children} />
    </div>
  );
}

function Amount({ children }) {
  return (
    <p className="amount">
      <strong className="dollar">$</strong>
      {children}
    </p>
  );
}
