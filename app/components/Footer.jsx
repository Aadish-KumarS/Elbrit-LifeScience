import { footerItems } from '../constant'; 
import '../styles/footer.css';
import { GrLocation } from "react-icons/gr";



// Footer Component
const Footer = () => {
  return (
    <section className='footer column'>
      {/* Footer Cards Section */}
      <div className='footer-card-section flex'>
        {/* Dynamically render footer cards based on footerItems array */}
        {footerItems.map((item, index) => (
          <div className="footer-card flex" key={index}>
            {/* Footer card image */}
            <img 
              src={item.img} 
              alt={`Footer Image ${index + 1}`} 
              className="footer-img" 
            />
            {/* Footer card info: title and description */}
            <div className="footer-info">
              <h3>{item.title}</h3> 
              <p>{item.desc}</p> 
            </div>
          </div>
        ))}
      </div>

      {/* Footer Information Section */}
      <div className='footer-section2 flex'>
        <img src='/logo.webp' alt='logo' loading="lazy" />
        <p>
          Your health, physical and emotional well-being is important to us. 
          We are always by your side and have made it even easier for you to find the necessary vitamins.
        </p>
      </div>

      {/* Footer Location Section */}
      <div className='footer-location flex'>
        <GrLocation /> 
        <p>
          Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051
        </p> 
      </div>
    </section>
  );
};

export default Footer; 
