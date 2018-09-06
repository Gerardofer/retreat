import React from "react";

const Header = () => {
  return (
    <div className="container">
      <img
        src="https://static1.squarespace.com/static/58346b2c2e69cf18c6f862ec/t/5877c3a0d1758e6fa40174e4/1484342881158/"
        alt="Tetra Tech DPK"
      />
      <h1>Welcome to the 2018 Tetra Tech DPK's Annual Retreat</h1>
      <hr />
      <p>
        Please let us know below if you will be attending this year's retreat
      </p>
      <a href="/all">
        <button className="btn mb-2">See People Attending</button>
      </a>
      <hr />
    </div>
  );
};

export default Header;
