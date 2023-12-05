const React = require('react');

function NavBar({ user }) {
  return (
    <nav className="navigation">
    <ul className="navigation__list">
      <li><a className="navigation__link" href="/main">К поиску</a></li>
      {/* <li><a className="navigation__link" href="#">Профиль</a></li> */}
      <li><a className="navigation__link nav__logout" href="/logout">Выйти</a></li>
    </ul>
  </nav>
      )
}


module.exports = NavBar;