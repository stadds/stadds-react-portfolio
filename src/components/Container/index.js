import React from "react";
// import "./style.css";

function Container({ conSize, padding, margin, other, children }) {
  return (
    <div
      className={`container${conSize ? `${conSize}` : ""} ${
        padding ? padding : ""
      } ${margin ? margin : ""} ${other ? other : ""}`}
    >
      {children}
    </div>
  );
}

export default Container;
