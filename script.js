const dashboardHover = document.querySelector("#hover-dashboard-icon");
const dashboardHeader = document.querySelector("#header-dashboard-menu");
const dashboardChild = document.querySelector(".dashboard-children");
const dashBoard = document.querySelector(".dashboard");
const categoryDetails = document.querySelector(".category-details");
const details = document.querySelector(".details");

dashboardChild.addEventListener("mouseenter", () => {
  dashboardChild.classList.add("scroll-hover");
});
dashboardChild.addEventListener("mouseleave", () => {
  dashboardChild.classList.remove("scroll-hover");
});

dashboardHover.addEventListener("click", () => {
  if (window.innerWidth >= 1200) {
    dashBoard.classList.toggle("no-display");
    categoryDetails.classList.toggle("hide-dashboard");
    details.classList.toggle("hide-dashboard");
  } else if (window.innerWidth <= 1200) {
    dashBoard.classList.toggle("display");
  } else {
    dashBoard.classList.toggle("display");
  }
});
dashboardHeader.addEventListener("click", () => {
  if (window.innerWidth >= 1200) {
    dashBoard.classList.toggle("no-display");
    categoryDetails.classList.toggle("hide-dashboard");
    details.classList.toggle("hide-dashboard");
  } else if (window.innerWidth <= 1200) {
    dashBoard.classList.toggle("display");
  } else {
    dashBoard.classList.toggle("display");
  }
});
// dashboardHeader.addEventListener("click", () => {
//   if (window.innerWidth <= 768) {
//     dashBoard.classList.toggle("display");
//   }
// });
