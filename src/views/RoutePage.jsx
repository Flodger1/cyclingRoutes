const React = require('react');
const Layout = require('./Layout');

const RoutePage = ({route, rate, reviews, user}) => (
    <Layout user={user}> 
      <div className="route__wrapper">      
          <h2>{route.routName}</h2>
          <div className='rout__info' >
            <div className='text__info'>
              <p>Населенный пункт: {`${route.location}`}</p>
              <p>Длина маршрута: ??? км</p>
              <br />
              <p>Автор: {`${route.User.userName}`}</p>
              <p>Оценка: {`${rate}`}</p>           
            </div>
            <div className='map__info'><img src='#' alt='тут карта'></img></div>            
        </div>
        {/* //! вставить проверку на авторизованного юзера */}
        {user && (user.id !== route.userId) && (<div className="feedback__containetr">
          <div className="rating__block">
            <form className="rating__form" data-id={`${route.id}`}>
              <h3>Оцените маршрут</h3>
              <p>***** Блок со звездочками</p>
              <label htmlFor="1"><input type="radio" name="rate" value="1" id="1"/>1</label>
              <label htmlFor="2"><input type="radio" name="rate" value="2" id="2"/>2</label>
              <label htmlFor="3"><input type="radio" name="rate" value="3" id="3"/>3</label>
              <label htmlFor="4"><input type="radio" name="rate" value="4" id="4"/>4</label>
              <label htmlFor="5"><input type="radio" name="rate" value="5" id="5"/>5</label><br/>
              <button type="submit" className="rating__btn">Оценить</button>
            </form>
          </div>
          <div className="review__block">
            <form className="review__form" data-id={`${route.id}`}>
              <h3>Оставьте отзыв:</h3>
              <textarea cols="50" rows="7" name="text" placeholder="Текст отзыва..."></textarea><br/>
              <button type="submit" className="review__btn">Отправить отзыв</button>
            </form>
            <div className="info__text"></div>
          </div>
        </div>)}
        <div className='reviews__container'>
          {reviews.map((el) => (
            <div className="review__item" key={`${el.id}`}>
              <p>{`${el.text}`}</p>
              <br/>
              <p>{`${el.User.userName}`}</p>
            </div>
          ))}
        <script src="/js/feedback.js"></script>
        </div>
      </div>       
    </Layout>
  );




module.exports = RoutePage;