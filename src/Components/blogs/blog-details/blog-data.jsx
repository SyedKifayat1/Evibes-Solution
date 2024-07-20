import React from 'react';
import BlogDetails from './index';

const blogData = {
  title: "Monthly Review Forms: A Key to Coaching Success",
  author: "MOSTLYDIGITAL",
  date: "MAY 8, 2024",
  category: "BLOG",
  readTime: "3 MIN READ",
  content: [
    {
      type: "paragraph",
      text: "Coaching is like crafting a masterpiece – it requires dedication, skill, and the right tools. Among these tools, Monthly Review Forms stand out as indispensable instruments for coaches..."
    },
    {
      type: "image",
      src: "path/to/monthly-review-forms-a-key-to-coaching-success.webp",
      alt: "Monthly Review Forms"
    },
    {
      type: "heading",
      level: 2,
      text: "The Role of Monthly Review Forms in Coaching"
    },
    {
      type: "paragraph",
      text: "Monthly Review Forms serve as a bridge between coaches and their clients, facilitating open communication and fostering a sense of accountability..."
    },
    {
      type: "table",
      rows: [
        ["Pros of Monthly Review Forms", "Cons of Monthly Review Forms"],
        ["Provides structured framework for assessment and reflection", "May be time-consuming to complete"],
        ["Facilitates open communication between coaches and clients", "Requires commitment from both parties to be effective"],
        // Add more rows as needed
      ]
    }
  ]
};

const BlogContentDetails = () => {
  return (
    <div>
      <BlogDetails blog={blogData} />
    </div>
  );
};

export default BlogContentDetails;
