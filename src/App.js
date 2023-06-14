function App() {
  return (
    <>
      <Header />
      <Footer />
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

function Footer() {
  return (
    <>
      <div className="bg-success-subtle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        eaque praesentium odio illum, eum, nisi commodi quia cum architecto
        molestiae repellendus similique consectetur voluptates velit? Laudantium
        quod repudiandae tempore cumque!
      </div>
    </>
  );
}
export default App;
