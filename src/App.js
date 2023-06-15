import { useState } from "react";

function App() {
  return (
    <>
      <h3>Counter App</h3>
      <CounterApp />
    </>
  );
}

function CounterApp() {
  //let counter = 1;   stateless variable
  let [str, updateStr] = useState("HELLO WORLD"); //stateless variable converted to stateful
  let lowerCaseAction = () => {
    str = str.toLowerCase();
    updateStr(str);
  };
  let upperCaseAction = () => {
    str = str.toUpperCase();
    updateStr(str);
  };
  return (
    <>
      <h1>{str}</h1>
      <input type="button" value="LowerCase" onClick={lowerCaseAction} />
      <input
        type="button"
        value="UpperCase"
        onClick={upperCaseAction}
        className="m-2"
      />
    </>
  );
}

export default App;
