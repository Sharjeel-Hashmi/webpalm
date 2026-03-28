import React, { useState, useEffect, useRef } from "react";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";

const FunFactCounter = () => {
  const [counts, setCounts] = useState({ projects: 0, results: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const checkIfInView = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasAnimated) {
        setCounts({ projects: 735, results: 100 }); // Final values
        setHasAnimated(true);
      }
    };

    const observer = new IntersectionObserver(checkIfInView, {
      threshold: 0.5, // 50% of the section visible
    });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    // Check immediately if section is already in view after refresh
    if (counterRef.current && counterRef.current.getBoundingClientRect().top < window.innerHeight) {
      setCounts({ projects: 735, results: 100 });
      setHasAnimated(true);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div className="about_funfact_counter" ref={counterRef}>
      <div className="funfact_item">
        <div className="counter_value">
          <Odometer className="fun6" value={counts.projects} style={{fontSize:'50px', marginTop:'-8px'}} format="d" />
          <span>+</span>
        </div>
        <h3 className="funfact_title mb-0">Projects Done</h3>
      </div>
      <div className="funfact_item">
        <div className="counter_value">
          <Odometer value={counts.results} format="d" />
          <span>%</span>
        </div>
        <h3 className="funfact_title mb-0">100% results are assured.</h3>
      </div>
    </div>
  );
};

export default FunFactCounter;
