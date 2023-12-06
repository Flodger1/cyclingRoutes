const React = require('react');
const Layout = require('./Layout.jsx');

module.exports = function PersonalPage({ user, userRoutes, title }) {
  return (
    <Layout user={user} title={title}>
      <div className="main-container">
        <div className="row" id="map"></div>
        <form className="row g-3 route-form">
          <div className="row">
            <div className="col">
              <span>Название</span>
              <label className="visually-hidden">Password</label>
              <input
                type="text"
                className="form-control"
                placeholder="Название"
                name="routName"
              />
            </div>
          </div>

          <div className="row">
            <span>Point A</span>
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                placeholder="Долгота"
                name="Longitude"
                id="longitudeA"
                readOnly
              />
            </div>

            <div className="col-6">
              <input
                type="text"
                className="form-control"
                placeholder="Широта"
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
                placeholder="Долгота"
                name="longitude"
                id="longitudeB"
                readOnly
              />
            </div>

            <div className="col-6">
              <input
                type="text"
                className="form-control"
                placeholder="Широта"
                name="latitude"
                id="latitudeB"
                readOnly
              />
            </div>
          </div>

          <div className="row">
            <button
              type="submit"
              className="btn btn-primary mb-3"
              id="add-route-btn"
            >
              Добавить маршрут
            </button>
          </div>
        </form>
      </div>
      <script src="/js/map.js"></script>
    </Layout>
  );
};
