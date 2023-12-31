/**
 * Entry point of application, where App is rendered within the div with the id of "app" 
 */

import React from "react";
import { render } from "react-dom";

import App from "./App";
document.addEventListener("DOMContentLoaded", function () {
  // Select all anchor links with the hash (#) attribute
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  // Add a click event listener to each anchor link
  anchorLinks.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      // Get the target element's ID from the link's href attribute
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      // Scroll to the target element smoothly
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
});


render(<App></App>, document.getElementById("app"));
