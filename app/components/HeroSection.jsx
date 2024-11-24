import '../styles/heroSection.css'; 
import { Suspense } from 'react'; 
import { cardData } from '../constant/index'; 
import FeatureElement from './FeatureElements';



// HeroSection Component
const HeroSection = () => {
  return (
    <section className='herosection'>
      {/* Hero section heading */}
      <h1 
        className='herosection-heading'
        style={{ fontSize: "115px", fontWeight: 700, lineHeight: '211px', textAlign: "center" }}
      >
        Essential Vitamins
      </h1>

      <div className='herosection-main flex'>
        {/* Hero section description and call-to-action */}
        <div className='herosection-main__decs column'>
          <p>Online Medical Supplies</p>
          <h2>Get Your Vitamins & Minerals</h2>
          <button>Explore</button>
        </div>

        {/* Hero section main image */}
        <div className="herosection-main__img">
          <Suspense fallback={<div className="spinner"></div>}>
            <img
              src="/heroImg.webp"
              alt="Main Image"
            />
          </Suspense>
        </div>

        {/* Hero section cards container */}
        <div className="herosection-main-container column">
          {/* Dynamically render cards from cardData */}
          {cardData.map((card, index) => (
            <div className="herosection-main-container__info flex" key={index}>
              {/* Card image */}
              <img 
                src={card.imageSrc} 
                alt={card.title} 
                loading="lazy" 
              />
              {/* Card title and description */}
              <div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative graphics for the hero section */}
      <div className='herosection-graphics flex'>
        <div className='herosection-graphics__circle'></div>
        <div className='herosection-graphics__circle'></div>
      </div>

      {/* Feature elements section */}
      <div className='herosection-features'>
        <FeatureElement />
      </div>
    </section>
  );
};

export default HeroSection; 
