const React = require('react');
const Layout = require('./Layout.jsx');

module.exports = function PersonalPage({ user, userRoutes, title }) {
  return (
    <Layout user={user} title={title}>
      <div className="profile-container">
        <div className="profile-info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            fill="currentColor"
            className="bi bi-person"
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z" />
          </svg>
          <div className="profile">
            <h5 className="card-title">{user ? user.name : 'None'}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              {user ? user.email : 'None'}
            </h6>
            <span>
              <button className="add-btn"> add new route</button>
            </span>
          </div>
        </div>
        <div className="stats-info">
          <h1>372 KM</h1>
          <span>was traveled</span>
          <br />
          <h2>0</h2>
          <span>routes were added</span>
          <h2>0</h2>
          <span>liked routes</span>
        </div>
      </div>

      <div className="user-routes-container"></div>
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
      <script src="/js/newroute.js"></script>
    </Layout>
  );
};
