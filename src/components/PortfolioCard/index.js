import React from "react";
import "../masterstyle.css";

function PortfolioCard({ title, description, url, image, other }) {
  return (
    <div className="col mb-4">
      <div className="card h-100 bg-third">
        <img className="card-img-top img-fluid" src={image} alt=""></img>
        <div className="card-body bg-third">
          <h2 className="card-title font-weight-bold">{title}</h2>
          <hr className="fourth"></hr>
          <p className="card-text">{description}</p>
          <a className="stretched-link" href={url} target="_blank" rel="noopener noreferrer"></a>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;
