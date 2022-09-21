import React from "react";
import "./button.css";

function Button() {
  return (
    <>
      <button>Button Light</button>
      <button style={{ backgroundColor: "black", color: "white" }}>
        Button Dark
      </button>
    </>
  );
}

export default Button;
