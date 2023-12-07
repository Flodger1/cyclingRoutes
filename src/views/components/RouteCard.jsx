const React = require('react');

const RouteCard = ({ route }) => {
  // Функция для форматирования данных карты, если они будут добавлены позже
  //   const formatMapData = (mapData) => {
  //     // Логика форматирования mapData
  //     return "Map Data Placeholder";
  //   };
  return (
    <div className="card m-2" style={{ width: '300px', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
      <div className="card-body">
        <h5 className="card-title">{route.routName}</h5>
        <div className="text__info">
          <p className="card-text">Местоположение: {`${route.location}`}</p>
          {/* <p className="card-text">Длина маршрута: ... км</p> */}
          <br />
          <p>Автор: {route.User?.userName ? route.User?.userName : 'None'}</p>
          <p>
            Оценка:{' '}
            {route.averageRating
              ? `${Number(route.averageRating).toFixed(1)}`
              : ' NEW '}
          </p>
          <a href={`/rout/${route.id}`}>
            <button type="button" className="btn__my">
              Подробнее
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

module.exports = RouteCard;
