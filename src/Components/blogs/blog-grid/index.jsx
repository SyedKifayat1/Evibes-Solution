import React from 'react';
import './blog-grid.css';
import BlogCardImg from '../../assets/about-2.webp';

const BlogGrid = () => {
  return (
    <section className='blog-grid'>
      <div className='blog-grid-description'>
        <h1>Blog Grid</h1>
        <p>This is another form of “new and improved.” It communicates that the product is the latest model or the hottest on the market.</p>
      </div>
      <div className='blog-grid-cards'>
        {Array(3).fill().map((_, idx) => (
          <div className="blog-grid-card" key={idx}>
            <div className="blog-card-img">
              <img src={BlogCardImg} alt="Blog" />
            </div>
            <h3 className="blog-card-title">Monthly Review Forms: A Key to Coaching Success</h3>
            <h5 className="blog-publish-date">May 8, 2024</h5>
            <p className="blog-card-description">Coaching is like crafting a masterpiece – it requires dedication, skill, and the right tools. Among these tools, Monthly Review Forms stand</p>
            <button className='blog-card-button'>Read More</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BlogGrid;
