/**
 * ALGEMENE SCRIPT VOOR DE HELE SITE
 * Gemaakt door Issam Lamsayeh
 */

// ========== 1. HUIDIG JAAR IN FOOTER ==========
// Toont automatisch het huidige jaar in de footer (bv. © 2025 Issam Lamsayeh)

const currentYear = new Date().getFullYear();
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = currentYear;
}

// ========== 2. ACTIEVE NAVIGATIE MARKEREN ==========
// Zorgt dat de juiste navigatielink "actief" wordt op basis van de huidige pagina

const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

navLinks.forEach(link => {
    const linkHref = link.getAttribute("href");
    if (linkHref === currentPage || (currentPage === "" && linkHref === "index.html")) {
        link.classList.add("active");
    } else if (currentPage === "" && linkHref === "index.html") {
        link.classList.add("active");
    }
});

// ========== 3. SMOOTH SCROLLEN VOOR ANKERLINKS (optioneel) ==========
// Als je interne links hebt zoals #section, dan scrollt het soepel

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        if (targetId === "#") return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// ========== 4. LAZY LOADING VOOR AFBEELDINGEN (optioneel) ==========
// Zorgt dat afbeeldingen pas laden als ze in beeld komen (snellere site)

if ("IntersectionObserver" in window) {
    const lazyImages = document.querySelectorAll("img[data-src]");
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute("data-src");
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
}