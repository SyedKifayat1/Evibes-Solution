// import React, { useState, useEffect } from 'react';
// import './unique-ui-ux.css';
// import UniqueUiUxImg1 from '../../../assets/31262585_7799000.jpg';
// import UniqueUiUxImg2 from '../../../assets/7335301_3606208-scaled.jpg';
// import UniqueUiUxImg3 from '../../../assets/7047869_3526470-scaled.jpg';

// const UniqueUiUx = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const images = [UniqueUiUxImg1, UniqueUiUxImg2, UniqueUiUxImg3];

//   const nextImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextImage();
//     }, 5000); 

//     return () => clearInterval(interval); // Cleanup the interval on component unmount
//   }, []);

//   return (
//     <section className="unique-ui-ux">
//       <div className="unique-ui-ux-content">
//         <h4>Your Unique UI/UX Design Partner</h4>
//         <h1>Why Choose Mostly Digital for Your UI/UX Design Needs?</h1>
//         <p>If you want to stand out in the highly competitive digital landscape, exceptional UI/UX design is a must. That’s where Mostly Digital comes in. With our experienced team of designers, we create engaging and intuitive design solutions tailored to your unique business needs. We keep your users in mind every step of the way, ensuring a seamless user experience that keeps them coming back for more.</p>
//         <button className="unique-ui-ux-button">See Our Work</button>
//       </div>
//       <div className="unique-ui-ux-image-container">
//         <button className="scroll-button left" onClick={prevImage}>❮</button>
//         <img src={images[currentIndex]} alt="UI/UX Design" className="unique-ui-ux-image" />
//         <button className="scroll-button right" onClick={nextImage}>❯</button>
//       </div>
//     </section>
//   );
// }

// export default UniqueUiUx;


import React, { useState, useEffect, useRef } from 'react';
import './unique-ui-ux.css';
import UniqueUiUxImg1 from '../../../assets/31262585_7799000.jpg';
import UniqueUiUxImg2 from '../../../assets/7335301_3606208-scaled.jpg';
import UniqueUiUxImg3 from '../../../assets/7047869_3526470-scaled.jpg';

const UniqueUiUx = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const images = [UniqueUiUxImg1, UniqueUiUxImg2, UniqueUiUxImg3];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextImage();
    }

    if (touchStartX.current - touchEndX.current < -50) {
      prevImage();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="unique-ui-ux">
      <div className="unique-ui-ux-content">
        <h4>Your Unique UI/UX Design Partner</h4>
        <h1>Why Choose Mostly Digital for Your UI/UX Design Needs?</h1>
        <p>If you want to stand out in the highly competitive digital landscape, exceptional UI/UX design is a must. That’s where Mostly Digital comes in. With our experienced team of designers, we create engaging and intuitive design solutions tailored to your unique business needs. We keep your users in mind every step of the way, ensuring a seamless user experience that keeps them coming back for more.</p>
        <button className="unique-ui-ux-button">See Our Work</button>
      </div>
      <div className="unique-ui-ux-image-container">
        <img
          src={images[currentIndex]}
          alt="UI/UX Design"
          className="unique-ui-ux-image"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        />
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default UniqueUiUx;
