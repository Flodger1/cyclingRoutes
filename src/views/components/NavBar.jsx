const React = require('react');

function NavBar({ user }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {/* <img src="/chess-logo3.png" alt="Home" style={{ height: '55px', animation: 'rotate-back-and-forth 5s infinite linear' }} /> */}
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="/#">Главная</a></li>
            { user ? (
              <>
                <li className="nav-item"><a className="nav-link" href="/profile">Странник {user.name}</a></li>
                <li className="nav-item"><a className="nav-link logout__link" href="/#">Выйти</a></li>
              </>
            ) : (
              <>
                <li className="nav-item"><a className="nav-link" href="/login">Вход</a></li>
                <li className="nav-item"><a className="nav-link" href="/registration">Регистрация</a></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

module.exports = NavBar;
