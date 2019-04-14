import React from "react";
import "./style.css";

function Wrapper(props) {
  console.log(props.children);
  return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;
