import React from "react";
import "../masterstyle.css";


function Col({ size, margin, order, other, children }) {
  const newSize = size
    .split(" ")
    .map((size) => "col-" + size)
    .join(" ");

  return (
    <div className={`${newSize} ${order ? order : ""} ${other ? other : ""} ${margin ? margin : ""}`}>
      {children}
    </div>
  );
}

export default Col;
