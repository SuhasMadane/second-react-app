import { useState } from "react";

function App() {
  return (
    <>
      <h3>Counter App</h3>
      <CounterApp />
      <CounterApp />
    </>
  );
}

function CounterApp() {
  //let counter = 1;   stateless variable
  let [counter, setCounter] = useState(1); //stateless variable converted to stateful
  let likeAction = () => {
    counter = counter + 1;
    setCounter(counter);
    //console.log(counter);
  };
  return (
    <>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum iusto
        consequuntur soluta, error, distinctio doloribus libero dignissimos
        nisi, esse autem totam tempore dolor sapiente ullam! Placeat numquam
        delectus sunt suscipit.
      </p>
      <h1>{counter}</h1>
      <input type="button" value="Like" onClick={likeAction} />
    </>
  );
}

export default App;
