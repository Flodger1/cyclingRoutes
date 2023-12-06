const React = require("react");
const Layout = require("./Layout");

function Registration({ user }) {
  return (
    <Layout>
      <div className="card" style={{ width: "18rem" }}>
        <h4 className="card-header">Регистрация</h4>
        <div className="card-body">
          <form
            className="registration__form"
            // action="/api/users/"
            // method="POST"
          >
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                User name
                <input
                  name="login"
                  className="form-control"
                //   id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="user_name"
                />
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="mail@.com"
                />
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="password"
                  autocomplete="on"
                />
              </label>
            </div>
            <button type="submit" className="btn btn-dark">
              Create
            </button>
          </form>
          <div className="registration__text"></div>
        </div>
      </div>
      <script src="/js/registration.js" />
    </Layout>
  );
}

module.exports = Registration;
