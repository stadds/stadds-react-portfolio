import React from "react";
import "../masterstyle.css"

function Row({margin,order, children}){
    return <div className={`row ${margin ? margin : ""} ${order ? order : ""}`}>{children}</div>;
}

export default Row;