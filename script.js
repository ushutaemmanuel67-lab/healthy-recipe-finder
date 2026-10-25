const toggle = document.querySelector(".menu-toggle");
const links = document.getElementById("navLinks");

toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");

    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.textContent = isOpen ? "✕" : "☰";
});

links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        links.classList.remove("open");

        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "☰";
    });
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
        links.classList.remove("open");

        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "☰";
    }
});
