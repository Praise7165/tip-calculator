export default function Layout({ children }) {
  return (
    <div className="section">
      <div className="container flex">
        <div style={{ width: "100%", justifyItems: "center" }}>
          <h1 style={{ fontSize: "32px", marginBottom: "1.5rem" }}>
            Bill Splitter
          </h1>
          <div className="calculator flex rounded-lg">{children}</div>
        </div>
      </div>
    </div>
  );
}
