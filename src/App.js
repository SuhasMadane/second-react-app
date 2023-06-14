function App() {
  return (
    <>
      <Header />
      <World />
    </>
  );
}

function Header() {
  return (
    <div className="row bg-warning text-light p-3 fs-3 justify-content-evenly">
      <div className="col">Home</div>
      <div className="col">Project</div>
      <div className="col">About us</div>
    </div>
  );
}

function World() {
  return (
    <>
      <span style={{ backgroundColor: "skyblue", color: "orange" }}>Suhas</span>
    </>
  );
}
export default App;
