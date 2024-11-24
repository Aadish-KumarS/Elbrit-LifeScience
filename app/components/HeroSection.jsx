import '../styles/heroSection.css'
import { Suspense } from 'react'; 
import { cardData } from '../constant/index';
import FeatureElement from './FeatureElements';


const HeroSection = () => {
  return (
    <section className='herosection'>
      <h1 
        className='herosection-heading'
        style={{fontSize: "115px", fontWeight: 700, lineHeight: '211px', textAlign:"center"}}
      >
        Essential Vitamins
      </h1>

      <div className='herosection-main flex'>
        <div className='herosection-main__decs column'>
          <p>Online Medical Supplies</p>
          <h2>Get Your Vitamins & Minerals</h2>
          <button>Explore</button>
        </div>

        <div className="herosection-main__img">
          <Suspense fallback={<div className="spinner"></div>}>
            <img
              src="/heroImg.webp"
              alt="Main Image"
            />
          </Suspense>
        </div>

        <div className="herosection-main-container column">
          {cardData.map((card, index) => (
            <div className="herosection-main-container__info flex" key={index}>
              <img src={card.imageSrc} alt={card.title} loading="lazy"/>
              <div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='herosection-graphics flex'>
        <div className='herosection-graphics__circle'></div>
        <div className='herosection-graphics__circle'></div>
      </div>

      <div className='herosection-features'>
        <FeatureElement/>
      </div>
    </section>
  )
}

export default HeroSection;
