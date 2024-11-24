import {vitaminData} from '../constant/index.js'

const VitaminCards = ({ start, end }) => {
  return (
    <>
      {vitaminData.slice(start, end).map((item, index) => (
        <div key={index} className="ingredientsSec-card">
          <img
            src={`/${item.imageSrc}`}
            alt={item.title}
            loading="lazy"
            className="ingredientsSec-card__image"
          />
          <div className="ingredientsSec-card__info column">
            <div>
              <h3 className="ingredientsSec-card__title">{item.title}</h3>
              <p className="ingredientsSec-card__desc">{item.description}</p>
            </div>
            <button className="ingredientsSec-card__btn">See More</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default VitaminCards