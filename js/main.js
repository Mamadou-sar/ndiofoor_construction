let navbar = document.querySelector(".navbar");
let bars = document.querySelector(".fa-bars");
let links = document.querySelectorAll(".nav-link");

bars.onclick = () => {
    bars.classList.toggle("fa-times");
    navbar.classList.toggle("active");
};

window.onscroll = () => {
    navbar.classList.remove("active");
    bars.classList.remove("fa-times");
};

links.forEach((link) => {
    link.addEventListener("click", function () {
        document.querySelector(".actived").classList.remove("actived");
        this.classList.add("actived");
    });
});
