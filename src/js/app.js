const toTopBtn = document.querySelector("#top-btn");
const hamburger = document.querySelector("#hamburger");
const mobileNavbar = document.querySelector("#mobile-navbar");
const exitNavbar = document.querySelector("#toggler-mobile-nav");

toTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

hamburger.addEventListener("click", () => {
  if ((mobileNavbar.style.right = 0)) {
    mobileNavbar.style.right = "-100%";
  } else {
    mobileNavbar.style.right = 0;
  }
});

exitNavbar.addEventListener("click", () => {
  mobileNavbar.style.right = "-100%";
});
