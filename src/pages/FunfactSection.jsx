// import React, { useEffect, useState, useRef } from "react";
// import Odometer from "react-odometerjs";
// import "odometer/themes/odometer-theme-default.css";

// const FunfactSection = () => {
//   const [values, setValues] = useState({
//     experience: 0,
//     successStories: 0,
//     companiesTrust: 0,
//     resultsGuaranteed: 0,
//   });

//   const [hasAnimated, setHasAnimated] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !hasAnimated) {
//           setHasAnimated(true);
//           startCounting();
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, [hasAnimated]);

//   const startCounting = () => {
//     const targetValues = {
//       experience: 25,
//       successStories: 280,
//       companiesTrust: 56, // Corrected to 56K
//       resultsGuaranteed: 100,
//     };

//     const duration = 1500; // Animation duration in ms
//     const startTime = performance.now();

//     const animate = (currentTime) => {
//       const elapsedTime = currentTime - startTime;
//       const progress = Math.min(elapsedTime / duration, 1);

//       setValues({
//         experience: Math.floor(progress * targetValues.experience),
//         successStories: Math.floor(progress * targetValues.successStories),
//         companiesTrust: Math.floor(progress * targetValues.companiesTrust),
//         resultsGuaranteed: Math.floor(progress * targetValues.resultsGuaranteed),
//       });

//       if (progress < 1) {
//         requestAnimationFrame(animate);
//       }
//     };

//     requestAnimationFrame(animate);
//   };

//   return (
//     <div ref={sectionRef} className="row funfact_wrapper">
//       <div className="col-lg-8">
//         <div className="row">
//           <div className="col-md-6">
//             <div className="funfact_block">
//               <div className="funfact_icon">
//                 <img src="assets/images/icons/icon_head.svg" alt="Experience Icon" />
//               </div>
//               <div className="funfact_content">
//                 <div className="counter_value">
//                   <Odometer style={{fontSize:'50px',fontWeight:'700'}} value={values.experience} format="d" />
//                   <span>+</span>
//                 </div>
//                 <h3 className="funfact_title mb-0">Years of Experience</h3>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-6">
//             <div className="funfact_block">
//               <div className="funfact_icon">
//                 <img src="assets/images/icons/icon_check.svg" alt="Success Stories Icon" />
//               </div>
//               <div className="funfact_content">
//                 <div className="counter_value">
//                   <Odometer style={{fontSize:'50px',fontWeight:'700'}} value={values.successStories} format="d" />
//                   <span>+</span>
//                 </div>
//                 <h3 className="funfact_title mb-0">Success Stories</h3>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-6">
//             <div className="funfact_block">
//               <div className="funfact_icon">
//                 <img src="assets/images/icons/icon_like.svg" alt="Companies Trust Us Icon" />
//               </div>
//               <div className="funfact_content">
//                 <div className="counter_value">
//                   <Odometer style={{fontSize:'50px',fontWeight:'700'}} value={values.companiesTrust} format="d" />
//                   <span>K+</span>
//                 </div>
//                 <h3 className="funfact_title mb-0">Companies Trust Us</h3>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-6">
//             <div className="funfact_block">
//               <div className="funfact_icon">
//                 <img src="assets/images/icons/icon_dart_board.svg" alt="Results Guaranteed Icon" />
//               </div>
//               <div className="funfact_content">
//                 <div className="counter_value">
//                   <Odometer style={{fontSize:'50px',fontWeight:'700'}} value={values.resultsGuaranteed} format="d" />
//                   <span>%</span>
//                 </div>
//                 <h3 className="funfact_title mb-0">Results Guaranteed</h3>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="col-lg-4">
//                 <div className="our_world_employees">
//                   <div className="image_wrap">
//                     <img
//                       src="assets/images/about/about_image_1.webp"
//                       alt="Techco - Employees Guoup Image"
//                     />
//                   </div>
//                   <div className="content_wrap">
//                     <h3 className="title_text mb-0">
//                       <b className="d-block">12000+</b> employees in 30 countries in
//                       Europe
//                     </h3>
//                   </div>
//                 </div>
//               </div>
//     </div>
    
//   );
// };

// export default FunfactSection;

import React, { useEffect, useState, useRef } from "react";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";

const FunfactSection = () => {
  const [values, setValues] = useState({
    experience: 0,
    successStories: 0,
    companiesTrust: 0,
    resultsGuaranteed: 0,
  });

  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startCounting();
        }
      },
      {
        threshold: 0.1, // Lowered threshold for small screen visibility
        rootMargin: "0px 0px -10% 0px", // Adjust trigger zone
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Fallback if observer doesn't trigger (esp. on mobile)
    const fallback = setTimeout(() => {
      if (!hasAnimated) {
        setHasAnimated(true);
        startCounting();
      }
    }, 3000); // 3s fallback

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [hasAnimated]);

  const startCounting = () => {
    const targetValues = {
      experience: 20,
      successStories: 150,
      companiesTrust: 50,
      resultsGuaranteed: 100,
    };

    const duration = 1500;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      setValues({
        experience: Math.floor(progress * targetValues.experience),
        successStories: Math.floor(progress * targetValues.successStories),
        companiesTrust: Math.floor(progress * targetValues.companiesTrust),
        resultsGuaranteed: Math.floor(progress * targetValues.resultsGuaranteed),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div ref={sectionRef} className="row funfact_wrapper">
      <div className="col-lg-8">
        <div className="row">
          <div className="col-md-6">
            <div className="funfact_block">
              <div className="funfact_icon">
                <img src="assets/images/icons/icon_head.svg" alt="Experience Icon" />
              </div>
              <div className="funfact_content">
                <div className="counter_value">
                  <Odometer style={{ fontSize: '50px', fontWeight: '700' }} value={values.experience} format="d" />
                  <span>+</span>
                </div>
                <h3 className="funfact_title mb-0">Years of Experience</h3>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="funfact_block">
              <div className="funfact_icon">
                <img src="assets/images/icons/icon_check.svg" alt="Success Stories Icon" />
              </div>
              <div className="funfact_content">
                <div className="counter_value">
                  <Odometer style={{ fontSize: '50px', fontWeight: '700' }} value={values.successStories} format="d" />
                  <span>+</span>
                </div>
                <h3 className="funfact_title mb-0">Success Stories</h3>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="funfact_block">
              <div className="funfact_icon">
                <img src="assets/images/icons/icon_like.svg" alt="Companies Trust Us Icon" />
              </div>
              <div className="funfact_content">
                <div className="counter_value">
                  <Odometer style={{ fontSize: '50px', fontWeight: '700' }} value={values.companiesTrust} format="d" />
                  <span>+</span>
                </div>
                <h3 className="funfact_title mb-0">Companies Trust Us</h3>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="funfact_block">
              <div className="funfact_icon">
                <img src="assets/images/icons/icon_dart_board.svg" alt="Results Guaranteed Icon" />
              </div>
              <div className="funfact_content">
                <div className="counter_value">
                  <Odometer style={{ fontSize: '50px', fontWeight: '700' }} value={values.resultsGuaranteed} format="d" />
                  <span>%</span>
                </div>
                <h3 className="funfact_title mb-0">Results Guaranteed</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4">
        <div className="our_world_employees">
          <div className="image_wrap">
            <img
              src="assets/images/about/about_image_1.webp"
              alt="Techco - Employees Group Image"
            />
          </div>
          <div className="content_wrap">
            {/* <h3 className="title_text mb-0">
              <b className="d-block">50+</b> employees in 2 countries
            </h3> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunfactSection;
