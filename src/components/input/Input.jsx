import React from "react";
import "./input.css";

function Input() {
  return (
    <>
      <input type="text" placeholder="Input" list="fruits" />
      <datalist id="fruits">
        <option>Apple</option>
        <option>Banana</option>
        <option>Orange</option>
        <option>Pineapple</option>
        <option>Kiwi</option>
      </datalist>
    </>
  );
}

export default Input;
