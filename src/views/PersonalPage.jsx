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
              <input
                type="text"
                className="form-control"
                placeholder="Название"
                name="routName"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-5 duration-distance-container">
              <h4>
                <i className="bi bi-arrows"></i>
                {'  '}
              </h4>
              <span className="distance">0 км</span>
            </div>
            <div className="col-5 duration-distance-container">
              <h4>
                <i className="bi bi-clock"></i>
                {'  '}
              </h4>
              <span className="duration-time">0 час. 0 мин.</span>
            </div>
          </div>

          <div className="row">
            <span>Откуда</span>
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
            <br /> <br />
            <div className="col">
              <input
                type="text"
                className="form-control start-address"
                placeholder="Откуда"
              />
            </div>
          </div>

          <div className="row">
            <span>Куда</span>
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
            <br /> <br />
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                placeholder="Широта"
                name="latitude"
                id="latitudeB"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control end-address"
                placeholder="Куда"
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
