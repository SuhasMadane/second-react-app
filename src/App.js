import Footer from "./pages/footer";
import Header from "./pages/header";

function App() {
  return (
    <>
      <h1>Counter App</h1>
      <CountLikes />
    </>
  );
}

function CountLikes() {
  let counter = 1;
  let likecount = () => {
    alert();
    console.log("I am Like button");
  };
  return (
    <>
      <h1>{counter}</h1>
      <input type="button" value="Like" onClick={likecount} />
    </>
  );
}
export default App;
