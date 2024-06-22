import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Orange Cricket Ltd</h1>
      <nav className="header-nav">
        <ul className="nav-list">
          <li><a href="#team">Team</a></li>
          <li><a href="#updates">Updates</a></li>
          <li><a href="#forum">Forum</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
