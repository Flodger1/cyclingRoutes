const React = require('react');
const Layout = require('./Layout.jsx');

module.exports = function PersonalPage({ user, userRoutes, title }) {
  return (
    <Layout user={user} title={title}>
      <div className="main-container">
        <div className="row map-container" id="map">
          GOOGLE MAP HERE
        </div>
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              placeholder="Longitude"
              name="longitude"
              readOnly
            />
          </div>

          <div className="col-6">
            <input
              type="text"
              className="form-control"
              placeholder="Latitude "
              name="latitude"
              readOnly
            />
          </div>
        </div>

        <form className="row g-3">
          <div className="col-auto">
            <label className="visually-hidden">Password</label>
            <input
              type="text"
              className="form-control"
              placeholder="Route Name"
              name="routName"
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3">
              Add
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};
