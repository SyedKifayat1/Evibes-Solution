import React from 'react';
import './blog-details.css';

const BlogDetails = ({ blog }) => {
  const renderContent = (content) => {
    return content.map((section, index) => {
      switch (section.type) {
        case 'paragraph':
          return <p key={index}>{section.text}</p>;
        case 'image':
          return <img key={index} src={section.src} alt={section.alt} className="blog-image" />;
        case 'heading':
          const HeadingTag = `h${section.level}`;
          return <HeadingTag key={index}>{section.text}</HeadingTag>;
        case 'table':
          return (
            <table key={index} className="blog-table">
              <tbody>
                {section.rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          );
        default:
          return null;
      }
    });
  };

  return (
    <section className="blog-details">
      <h1>{blog.title}</h1>
      <div className="blog-meta">
        <span>{blog.author}</span> | <span>{blog.date}</span> | <span>{blog.category}</span> | <span>{blog.readTime}</span>
      </div>
      <div className="blog-content">
        {renderContent(blog.content)}
      </div>
    </section>
  );
};

export default BlogDetails;
