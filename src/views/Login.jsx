const React = require("react");
const Layout = require("./Layout");

function Login({ user }) {
  return (
    <Layout user={user}>
      <div className="card" style={{ width: "18rem" }}>
        <h4 className="card-header">Логин</h4>
        <div className="card-body">
          <form className="login__form" >
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Почта
                <input
                  name="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Пароль
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  autocomplete="on"
                />
              </label>
            </div>
            <button type="submit" className="btn btn-dark">
              Вход
            </button>
          </form>
          <div className="login__text"></div>
        </div>
      </div>
      <script src="/js/login.js" />
    </Layout>
  );
}

module.exports = Login;
