import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer>
      <div className="container-lg border-top">
        <div className="row mt-2">
          <div className="col-md-3 text-center font-weight-bold mb-2">
            &copy; Samantha Taddonio
          </div>
          <div className="col-md-9 mb-2">
            <ul className="nav nav-pills nav-justified">
              <li className="nav-item mx-2">
                <a
                  className="nav-link nav-footer bg-fourth"
                  href="https://github.com/stadds"
                  target="_blank"
                >
                  <i className="fab fa-github-square mr-2"></i>GitHub
                </a>
              </li>
              <li className="nav-item  mx-2">
                <a
                  className="nav-link nav-footer bg-fourth"
                  href="https://www.linkedin.com/in/samanthataddonio/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin mr-2"></i>LinkedIn
                </a>
              </li>
              <li className="nav-item  mx-2">
                <a
                  className="nav-link nav-footer bg-fourth"
                  href="mailto:info@stadds.dev"
                >
                  <i className="fas fa-envelope-square mr-2"></i>Email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
