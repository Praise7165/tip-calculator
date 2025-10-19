export default function Tag({ percent, tip, onClick }) {
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
