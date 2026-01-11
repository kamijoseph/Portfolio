document.addEventListener("DOMContentLoaded", function () {
    const tabLinks = document.querySelectorAll(".tab-links");
    const tabContents = document.querySelectorAll(".tab-contents");

    tabLinks.forEach(link => {
        link.addEventListener("click", () => {
            tabContents.forEach(content => content.classList.remove("active-tab"));
            tabLinks.forEach(tab => tab.classList.remove("active"));

            link.classList.add("active");

            const dataTarget = link.getAttribute("data-target");
            const targetId = dataTarget ? dataTarget : link.textContent.trim().toLowerCase().replace(/\s+/g, "");
            const targetContent = document.getElementById(targetId);

            if (targetContent) {
                targetContent.classList.add("active-tab");
            }
        });
    });

    const words = [
        "Data Scientist",
        "Data Analyst",
        "Machine Learning Engineer",
        "Data Visualization",
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingElement = document.getElementById("typing-text");

    function typeEffect() {
        if (!typingElement) return;
        const currentWord = words[wordIndex];
        if (isDeleting) {
            typingElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex <= 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }
        } else {
            typingElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(typeEffect, 900);
                return;
            }
        }
        setTimeout(typeEffect, isDeleting ? 50 : 110);
    }

    typeEffect();
});
