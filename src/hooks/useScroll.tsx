"use client";

import { useEffect, useState } from "react";

export const useScroll = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Aquí puedes realizar cualquier acción que necesites con el valor de scrollTop
      setScroll(scrollY);
      console.log("Scroll Top:", scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log("hi", scroll);
  return scroll;
};
