import React, { useState, useEffect, useRef } from 'react';
import './ParallaxSection.css'; // Create a CSS file for styling
import { Link } from 'react-router-dom';

function ParallaxSection4() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;

        // Calculate the relative scroll position within the section
        if (scrollY > sectionTop - windowHeight && scrollY < sectionTop + sectionHeight) {
          const relativeScroll = scrollY - (sectionTop - windowHeight);
          setScrollPosition(relativeScroll);
        } else {
          setScrollPosition(0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxStyle = {
    backgroundImage: `url(${'assets/images/backgrounds/SEOImg3.png'})`,
    backgroundPositionY: `${scrollPosition * 0.11}px` // Adjust the multiplier for parallax effect
  };

  return (
    <section
      ref={sectionRef}
      className="calltoaction_section parallaxie"
      style={parallaxStyle}
    >
      <div className="container text-center">
        <div className="heading_block text-white">
          <h2 className="heading_text">Ready To Work, Let's Chat</h2>
          <p className="heading_description mb-0">
          From the first consultation until implementation, our team of professionals is prepared to work with you at every stage.
          </p>
        </div>
        <Link to={"/contact"}>
        <a className="btn btn-primary">
          <span className="btn_label" data-text="Contact Us Today!">
            Contact Us TODAY!
          </span>
          <span className="btn_icon">
            <i className="fa-solid fa-arrow-up-right"></i>
          </span>
        </a>
        </Link>
      </div>
    </section>
  );
}

export default ParallaxSection4;