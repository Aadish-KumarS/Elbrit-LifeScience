import { footerItems } from '../constant'
import '../styles/footer.css'
import { GrLocation } from "react-icons/gr";

const Footer = () => {
  return (
    <section className='footer column'>
      <div className='footer-card-section flex'>
        {footerItems.map((item, index) => (
          <div className="footer-card flex" key={index}>
            <img src={item.img} alt={`Footer Image ${index + 1}`} className="footer-img" />
            <div className="footer-info">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='footer-section2 flex'>
        <img src='/logo.webp' alt='logo' loading="lazy"/>
        <p>
          Your health, physical and emotional well-being is important to us. We are always by your side and have made it even easier for you to find the necessary vitamins.
        </p>
      </div>
      <div className='footer-location flex'>
        <GrLocation/>
        <p>Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051</p>
      </div>
    </section>
  )
}

export default Footer