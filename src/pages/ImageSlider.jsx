// import React, { useRef, useEffect } from 'react';
// import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';

// function ImageSlider() {
//   const swiperRef = useRef(null);

//   useEffect(() => {
//     console.log('Swiper initializing...');
//     swiperRef.current = new Swiper('.review_onecol_carousel', {
//       loop: true,
//     });
//     console.log('Swiper initialized:', swiperRef.current); // Debugging
//   }, []);

//   const goPrev = () => {
//     console.log('prev clicked'); // Debugging
//     if (swiperRef.current) {
//       swiperRef.current.slidePrev();
//     }
//   };

//   const goNext = () => {
//     console.log('next clicked'); // Debugging
//     if (swiperRef.current) {
//       swiperRef.current.slideNext();
//     }
//   };

//   return (
//     // ... rest of your component
//   );
// }

// export default ImageSlider;