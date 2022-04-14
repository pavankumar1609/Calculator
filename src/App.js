import "./App.css";
import { useState } from "react";

function App() {
  const [result, setResult] = useState("");

  const ops = ["+", "-", "/", "*", "%", "."];

  const updateResult = (value) => {
    if (
      (ops.includes(value) && result === "") ||
      (ops.includes(value) && ops.includes(result.slice(-1)))
    )
      return null;

    setResult(result + value);
  };

  const showResult = () => {
    if (result === "") return;
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult(error.message);
    }
  };

  const clearResult = () => setResult("");

  const deleteLast = () => {
    setResult(result.slice(0, -1));
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <span>{result ? result : "0"}</span>
        </div>
        <div className="symbols">
          <button onClick={() => updateResult("+")}>+</button>
          <button onClick={() => updateResult("-")}>-</button>
          <button onClick={() => updateResult("/")}>÷</button>
          <button onClick={() => updateResult("*")}>x</button>
          <button onClick={() => updateResult("%")}>%</button>
          <button onClick={deleteLast}>CE</button>
          <button onClick={clearResult}>AC</button>
          <button onClick={() => updateResult("1")}>1</button>
          <button onClick={() => updateResult("2")}>2</button>
          <button onClick={() => updateResult("3")}>3</button>
          <button onClick={() => updateResult("4")}>4</button>
          <button onClick={() => updateResult("5")}>5</button>
          <button onClick={() => updateResult("6")}>6</button>
          <button onClick={() => updateResult("7")}>7</button>
          <button onClick={() => updateResult("8")}>8</button>
          <button onClick={() => updateResult("9")}>9</button>
          <button onClick={() => updateResult("0")}>0</button>
          <button onClick={() => updateResult(".")}>.</button>
          <button onClick={showResult}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
