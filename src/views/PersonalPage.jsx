const React = require('react');
const Layout = require('./Layout.jsx');

module.exports = function PersonalPage({ user, userRoutes, title }) {
  return (
    <Layout user={user} title={title}>
      <div className="main-container">
        <div
          className="row map-container"
          id="map"
          style={{ height: '500px' }}
        ></div>
        {/* <div className="row">
          <span>Point A</span>
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              placeholder="Longitude"
              name="longitude"
              id="longitudeA"
              readOnly
            />
          </div>

          <div className="col-6">
            <input
              type="text"
              className="form-control"
              placeholder="Latitude "
              name="latitude"
              id="latitudeA"
              readOnly
            />
          </div>
        </div>

        <div className="row">
          <span>Point B</span>
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              placeholder="Longitude"
              name="longitude"
              id="longitudeB"
              readOnly
            />
          </div>

          <div className="col-6">
            <input
              type="text"
              className="form-control"
              placeholder="Latitude "
              name="latitude"
              id="latitudeB"
              readOnly
            />
          </div>
        </div> */}

        <form className="row g-3 route-form">
          <div className="row">
            <span>Point A</span>
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                placeholder="Longitude"
                name="longitude"
                id="longitudeA"
                readOnly
              />
            </div>

            <div className="col-6">
              <input
                type="text"
                className="form-control"
                placeholder="Latitude "
                name="latitude"
                id="latitudeA"
                readOnly
              />
            </div>
          </div>

          <div className="row">
            <span>Point B</span>
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                placeholder="Longitude"
                name="longitude"
                id="longitudeB"
                readOnly
              />
            </div>

            <div className="col-6">
              <input
                type="text"
                className="form-control"
                placeholder="Latitude "
                name="latitude"
                id="latitudeB"
                readOnly
              />
            </div>
          </div>
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
