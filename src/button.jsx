import React from "react";
import "./App.css";


function Button(props) {
  return (
    <button className="control-button" onClick={props.onClick}>
      {props.value}
    </button>
  );
}


export default Button;