// Typed.js initialization
var typed = new Typed(".typing", {
  strings: ["", "Ethical Hacker", "Cloud Security Expert"],
  typeSpeed: 100,
  backSpeed: 60,  // Fixed capitalization here
  loop: true,
});

// Navigation and Section Handling
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  allSection = document.querySelectorAll(".section");

for (let i = 0; i < navList.length; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    // Remove "back-section" and "active" classes
    allSection.forEach(section => section.classList.remove("back-section", "active"));
    navList.forEach(navItem => navItem.querySelector("a").classList.remove("active"));

    // Add "back-section" class to the previously active section
    if (document.querySelector(".section.active")) {
      document.querySelector(".section.active").classList.add("back-section");
    }

    // Set the current clicked link as active and show the correct section
    this.classList.add("active");
    showSection(this);

    // Hide the nav menu for smaller screens
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function showSection(element) {
  // Determine target section from href attribute
  const target = element.getAttribute("href").split("#")[1];
  const targetSection = document.querySelector(`#${target}`);
  if (targetSection) {
    targetSection.classList.add("active");
  }
}

// "Hire Me" button
document.querySelector(".hire-me").addEventListener("click", function () {
  showSection(this);
  updateNav(this);
});

function updateNav(element) {
  const target = element.getAttribute("href").split("#")[1];
  navList.forEach(navItem => {
    const link = navItem.querySelector("a");
    link.classList.remove("active");
    if (link.getAttribute("href").split("#")[1] === target) {
      link.classList.add("active");
    }
  });
}

// Nav Toggler Button
const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
}
