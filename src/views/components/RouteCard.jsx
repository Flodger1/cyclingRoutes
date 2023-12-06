const React = require("react");

const RouteCard = ({ route }) => {
  // Функция для форматирования данных карты, если они будут добавлены позже
//   const formatMapData = (mapData) => {
//     // Логика форматирования mapData
//     return "Map Data Placeholder";
//   };

  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{route.routName}</h5>
        <p className="card-text">Создатель: {route['User.userName']}</p>
        <p className="card-text">Местоположение: {route.location}</p>
        <a href={`/rout/${route.id}`} className="btn btn-primary">
          Подробнее
        </a>
      </div>
    </div>
  );
};

module.exports = RouteCard;
