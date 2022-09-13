import React from "react";

const Navbar = ({ totalCounters }) => {
  return (
    <div>
      <nav className='navbar navbar-light bg-light'>
        <div>
          Navbar{" "}
          <span className='badge badge-pill badge-secondary'>
            {totalCounters}
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
