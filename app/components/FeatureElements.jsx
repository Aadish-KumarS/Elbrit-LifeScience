const { productFeatures } = require("../constant");


// FeatureElement Component 
const FeatureElement = () => {
  return (
    <>
    {productFeatures.map((feature, index) => (
      <div key={index} className="feature-ele center column">
        <div className="feature-ele__image center">
          <img
            src={feature.imageSrc}
            alt={feature.title}
            loading="lazy"
          />
        </div>
        <h3 className="feature-ele__title">{feature.title}</h3>
        <p className="feature-ele__desc">{feature.description}</p>
      </div>
    ))}
    </>
  )
}

export default FeatureElement