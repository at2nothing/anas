import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "rgba(255,255,255,0.75)",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
        transition: "transform 0.3s ease", // Add a smooth transition effect
        transform: isScrolled ? "translateX(-100%)" : "translateX(0)",
      }}
    >
      <a href="#home" onClick={(e) => handleSmoothScroll(e, "home")}>
        Home
      </a>
      <a href="#about" onClick={(e) => handleSmoothScroll(e, "about")}>
        About
      </a>
      <a href="#portfolio" onClick={(e) => handleSmoothScroll(e, "portfolio")}>
        Portfolio
      </a>
      <a href="#footer" onClick={(e) => handleSmoothScroll(e, "footer")}>
        Contact
      </a>
    </div>
  );
};

export default Header;
