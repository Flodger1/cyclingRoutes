const React = require('react');
const Layout = require("./Layout");
const RouteCard = require('./components/RouteCard');

const RoutesList = ({ routes, user, rate}) => {
  return (
    <Layout user={user}>
      <h1 style={{ color: "black", textAlign: "center" }}>Велосипедные Маршруты</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {routes.map(route => (
          <RouteCard key={route.id} route={route} />
        ))}
      </div>
    </Layout>
  );
};

module.exports = RoutesList;
