import React, { useEffect, useRef } from "react";
import Typed from "./type"; // Updated import statement

const TypeWriter = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    if (el.current) {
      typed.current = new Typed(el.current, {
        strings: ["Web Development", "Software Development", "Graphic Designing", "SEO", "Video Editing", "E-Commerce"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
      });
    }

    return () => {
      typed.current?.destroy();
    };
  }, []);

  return <h2 style={{color:"#0044EB"}} className="type-heading" ref={el}></h2>;
};

export default TypeWriter;
