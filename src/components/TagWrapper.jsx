export default function TagWrapper({ children }) {
  return (
    <div>
      <Heading />
      <div className="tip_wrapper flex">{children}</div>
    </div>
  );
}

function Heading() {
  return (
    <label className="flex">
      <span>Select Tip %</span>
    </label>
  );
}
