export default function Layout({ children }) {
  return (
    <div className="section">
      <div className="container flex">
        <div className="calculator flex rounded-lg">{children}</div>
      </div>
    </div>
  );
}
