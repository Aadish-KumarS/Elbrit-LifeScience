import "../styles/ingredientsSection.css";
import dynamic from 'next/dynamic';

const VitaminCards = dynamic(() => import('../components/VitaminCards'), {
  loading: () => <div>Loading...</div>,
});

const IngredientsSection = () => {
  
  
  return (
    <section className="ingredientsSec flex">

      <div className="ingredientsSec-container flex">
        <div className="ingredientsSec-container__main">
          <h4>Ingredients</h4>
          <h2>Better Ingredients</h2>
          <p>
            Only the best when you choose products offered on our platform -
            high-quality ingredients for high-quality products!
          </p>
        </div>
        <div className="ingredientsSec-row">
          <VitaminCards start={0} end={2} />
        </div>
      </div>

      <div className="ingredientsSec-container ingredientsSec-row">
        <VitaminCards start={2} end={5} />
        <div className="ingredientsSec-graphics ">
          <img 
            src="/graphics.png" 
            alt="Graphic"  
            loading="lazy"
          />
        </div>
      </div>

    </section>
  );
};

export default IngredientsSection;
