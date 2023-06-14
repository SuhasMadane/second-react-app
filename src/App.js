function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Header />
      <World />
    </>
  );
}

function Header() {
  return (
    <>
      <h5>Good Morning</h5>
    </>
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
