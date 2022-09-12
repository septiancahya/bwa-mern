import React from "react";
import Button from "elements/Button";
import BrandIcon from "parts/IconText";

export default function Header() {
  const getNavLinkClass = (path) => {
    props.location.pathname === path ? " active" : "";
  };

  return (
    <header className="spacing-sm">
      <div className="container">
        <nav className="nvabar navbar-expand-lg navbar-light">
          <BrandIcon />
        </nav>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className={`nav-item${getNavLinkClass("/")}`}>
              <Button className="nav-link" href="/" tyepe="link">
                Home
              </Button>
            </li>
            <li className={`nav-item${getNavLinkClass("/browse-by")}`}>
              <Button className="nav-link" href="/browse-by" tyepe="link">
                Browse by
              </Button>
            </li>
            <li className={`nav-item${getNavLinkClass("/stories")}`}>
              <Button className="nav-link" href="/stories" tyepe="link">
                Stories
              </Button>
            </li>
            <li className={`nav-item${getNavLinkClass("/agents")}`}>
              <Button className="nav-link" href="/agents" tyepe="link">
                Agents
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
