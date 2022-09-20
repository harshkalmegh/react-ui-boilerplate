import React from "react";
import "./button.css";

function Button() {
  return (
    <>
      <div>
        Button Light
        <button className="ButtonLight">Button Light</button>
      </div>
      <div>
        Button Dark
        <button className="ButtonDark">Button Dark</button>
      </div>
    </>
  );
}

export default Button;
