const React = require('react');
const Layout = require('./Layout');
const RouteCard = require('./components/RouteCard');

const RoutesList = ({ routes, user }) => {
  return (
    <Layout user={user}>
      <h1 style={{ color: 'black', textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
        Велосипедные Маршруты
      </h1>
      <div className="d-flex flex-wrap justify-content-center">
        {routes.map((route) => (
          <RouteCard key={route.id} route={route} user={user} />
        ))}
      </div>
    </Layout>
  );
};

module.exports = RoutesList;
