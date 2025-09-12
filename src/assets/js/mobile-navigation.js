import { navigationMarkup } from "./navigation.js";

export function createMobileNav() {
  const mobileNav = document.getElementById("mobile-navigation");
  mobileNav.insertAdjacentHTML("beforeend", navigationMarkup());
}
