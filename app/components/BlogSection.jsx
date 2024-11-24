import { blogData } from "../constant"
import '../styles/blogSection.css'


// BlogSection Component 
const BlogSection = () => {
  return (
    <section className="blogSec">
      <div className="blogSec-title">
        <h4>Our Blog</h4>
        <h2>Latest news</h2>
      </div>
      <div className="blogSec-list">
        {blogData.map((item, index) => (
          <div key={index} className="blog-item" >
            <img src={item.img} alt={`Blog ${index + 1} Img`} className="blog-img" loading="lazy"/>
            <div className="blog-info column">
              <p>{item.date}</p>
              <h3>{item.desc}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BlogSection