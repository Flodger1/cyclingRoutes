const React = require('react');
const Layout = require('./Layout');

const RoutePage = ({ route, rate, reviews, user }) => (
  <Layout user={user}>
    <div className="route__wrapper">
      <a href='/' className="tomain__btn"><button type="button" className="btn btn-primary">Назад</button></a>
      <h2>{route.routName}</h2>
      <div className="rout__info">
        <div className="text__info">
          <p>Местоположение: {`${route.location}`}</p>
          <p>Длина маршрута: ... км</p>
          <br />
          <p>Автор: {`${route.User.userName}`}</p>
          <p>Оценка: {`${rate}`}</p>
        </div>
        <div
          id="map"
          style={{ height: '350px', width: '450px' }}
          className="map__info"
        >
        </div>
      </div>
      {user && user.id !== route.userId && (
        <div className="feedback__containetr">
          <div className="rating__block">
            <form className="rating__form" data-id={`${route.id}`}>
              <h3>Оцените маршрут</h3>
              <p>***** Блок со звездочками</p>
              <label htmlFor="1">
                <input type="radio" name="rate" value="1" id="1" />1
              </label>
              <label htmlFor="2">
                <input type="radio" name="rate" value="2" id="2" />2
              </label>
              <label htmlFor="3">
                <input type="radio" name="rate" value="3" id="3" />3
              </label>
              <label htmlFor="4">
                <input type="radio" name="rate" value="4" id="4" />4
              </label>
              <label htmlFor="5">
                <input type="radio" name="rate" value="5" id="5" />5
              </label>
              <br />
              <button type="submit" className="rating__btn btn btn-primary">
                Оценить
              </button>
            </form>
          </div>
          <div className="review__block">
            <form className="review__form" data-id={`${route.id}`}>
              <h3>Оставьте отзыв:</h3>
              <textarea
                cols="50"
                rows="7"
                name="text"
                placeholder="Текст отзыва..."
              ></textarea>
              <br />
              <button type="submit" className="review__btn btn btn-primary">
                Отправить отзыв
              </button>
            </form>
            <div className="info__text"></div>
          </div>
        </div>
      )}
      <h3>Отзывы:</h3>
      <div className="reviews__container">
        {reviews.length ? (reviews.map((el) => (
          <div className="review__item" key={`${el.id}`}>
            <p>{`${el.text}`}</p>
            <br />
            <p>{`${el.User.userName}`}</p>
            {(user.id === el.userId) && (
              <div><button type='button' data-id={`${el.id}`} className="detele-review__btn btn btn-primary">Delete my review</button></div>
            )}
          </div>
        ))) : <p className="no-reviews__not">Отзывов по этому маршруту пока нет.</p>}
        <script src="/js/feedback.js"></script>
        <script src="/js/routeMap.js"></script>
      </div>
    </div>
  </Layout>
);

module.exports = RoutePage;
