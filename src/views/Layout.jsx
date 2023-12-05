const React = require('react');
const NavBar = require('./components/NavBar.jsx');

function Layout({ children, user }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/style.css" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
          crossOrigin="anonymous"
        />
        <title>React SSR</title>
      </head>
      <body>
        <header>
          <NavBar user={user} />
        </header>
        <main>
          <div className="d-flex flex-column align-items-center">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}

module.exports = Layout;
