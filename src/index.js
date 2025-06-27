import { home } from "./home.js";
import { menu } from "./menu.js";
import { contact } from "./about.js";
import "./styles.css";

(() => {
  const content = document.getElementById("content");
  const homeButton = document.getElementById("home");
  const menuButton = document.getElementById("menu");
  const aboutButton = document.getElementById("about");

  content.replaceChildren(home());

  homeButton.addEventListener("click", () => {
    content.replaceChildren(home());
  });
  menuButton.addEventListener("click", () => {
    content.replaceChildren(menu());
  });
  aboutButton.addEventListener("click", () => {
    content.replaceChildren(contact());
  });
})();
