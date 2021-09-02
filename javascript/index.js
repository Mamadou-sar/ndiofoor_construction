const humburger = document.querySelector(".fa-bars");
const toggle = document.querySelector(".nav-links");

humburger.addEventListener("click", () => {
    toggle.classList.toggle("toggle");
});

// Active
const links = document.querySelectorAll(".nav-link");

links.forEach((link) => {
    link.addEventListener("click", function () {
        document.querySelector(".active").classList.remove("active");
        this.classList.add("active");
    });
});
