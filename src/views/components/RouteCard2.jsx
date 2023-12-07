const React = require('react');

const RouteCard2 = ({ route }) => {
  return (
    <div className="card m-2" style={{ width: '300px' }}>
      <div className="card-body">
        <h5 className="card-title">{route.routName}</h5>
        <div className="text__info">
          <p className="card-text">Местоположение: {`${route.location}`}</p>
          <p className="card-text">Длина маршрута: ... км</p>
          <br />
          <p>Автор: {route.User?.userName ? route.User?.userName : 'None'}</p>
          <p>
            Оценка:{' '}
            {route.averageRating
              ? `${Number(route.averageRating).toFixed(1)}`
              : ' NEW '}
          </p>
          <a href={`/rout/${route.id}`} className="btn btn-primary more-btn">
            Подробнее
          </a>

          {'  '}
          <button className="btn btn-primary delete-btn" data-id={route.id}>
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

module.exports = RouteCard2;
