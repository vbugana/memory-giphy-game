import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <ul className="nav nav-tabs bg-dark">
      <li className="nav-item">
        <NavLink
          to="memory-giphy-game/" end
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          Game
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="memory-giphy-game/scores"
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          HighScores
        </NavLink>
      </li>
    </ul>
  );
}

export default Nav;