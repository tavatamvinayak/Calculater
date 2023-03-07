
import React, { useState } from "react";

import "./calculator.css"

function Calculator() {
  const [Result, setResult] = useState("");
  //numbers input
  const handleClick = (e) => {
    setResult(Result.concat(e.target.name));
  };

  // buttons answer
  const clear = () => {
    setResult("");
  };
  const backSpace = () => {
    setResult(Result.slice(0, Result.length - 1));
  };
  const Calculate =()=>{
    try {
      // eslint-disable-next-line 
      setResult(eval(Result).toString())
    } catch (error) {
      setResult('error')
    }
  }

  return (
    <>
      <div className="">
        <form>
          <input type="text" value={Result} readOnly/>
        </form>
      </div>
      <div className="keypad">
        <button className="highlight" onClick={clear} id="clear">
          Clear
        </button>
        <button className="highlight" onClick={backSpace} id="backSpace">
          C
        </button>
        <button className="highlight" name="/" onClick={handleClick}>
          &divide;
        </button>
        <button name="7" onClick={handleClick}>
          7
        </button>
        <button name="8" onClick={handleClick}>
          8
        </button>
        <button name="9" onClick={handleClick}>
          9
        </button>
        <button className="highlight" name="*" onClick={handleClick}>
          &times;
        </button>
        <button name="4" onClick={handleClick}>
          4
        </button>
        <button name="5" onClick={handleClick}>
          5
        </button>
        <button name="6" onClick={handleClick}>
          6
        </button>
        <button className="highlight" name="-" onClick={handleClick}>
          &ndash;
        </button>
        <button name="1" onClick={handleClick}>
          1
        </button>
        <button name="2" onClick={handleClick}>
          2
        </button>
        <button name="3" onClick={handleClick}>
          3
        </button>
        <button className="highlight" name="+" onClick={handleClick}>
          +
        </button>
        <button name="0" onClick={handleClick}>
          0
        </button>
        <button className="highlight" name="." onClick={handleClick}>
          .
        </button>
        <button className="highlight" onClick={Calculate} id="result">
          =
        </button>
      </div>
    </>
  );
}

export default Calculator;
