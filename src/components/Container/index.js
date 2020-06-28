import React from "react";
import "./style.css";

function Container({ conSize, padding, margin, children }) {
  return (
    <div
      className={`container${conSize ? `${conSize}` : ""} ${
        padding ? padding : ""
      } ${margin ? margin : ""} `}
    >
      {...children}
    </div>
  );
}

export default Container;
