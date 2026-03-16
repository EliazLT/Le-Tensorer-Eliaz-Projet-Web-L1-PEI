document.addEventListener("DOMContentLoaded", () => {
    const footerYear = document.getElementById("footer-year");
    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }

    const currentYear = document.getElementById("current-year");
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    const currentDate = document.getElementById("current-date");
    if (currentDate) {
        const today = new Date();
        currentDate.textContent = today.toLocaleDateString("fr-FR");
    }

    const projectButtons = document.querySelectorAll(".project-switch");
    const projectImage = document.getElementById("project-showcase-image");
    const projectCaption = document.getElementById("project-showcase-caption");

    if (projectButtons.length > 0 && projectImage && projectCaption) {
        projectButtons.forEach((button) => {
            button.addEventListener("click", () => {
                const newImage = button.dataset.image;
                const newCaption = button.dataset.caption;
                const newAlt = button.dataset.alt;

                projectImage.src = newImage;
                projectImage.alt = newAlt;
                projectCaption.textContent = newCaption;

                projectButtons.forEach((item) => {
                    item.classList.remove("is-selected");
                });

                button.classList.add("is-selected");
            });
        });
    }


});