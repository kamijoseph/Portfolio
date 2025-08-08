
// Script //
document.addEventListener("DOMContentLoaded", function () {
    /* ------------------ TAB SWITCHING ------------------ */
    const tabLinks = document.querySelectorAll(".tab-links");
    const tabContents = document.querySelectorAll(".tab-contents");

    tabLinks.forEach(link => {
        link.addEventListener("click", () => {
            // remove 'active-tab' from all tab contents
            tabContents.forEach(content => content.classList.remove("active-tab"));

            // remove underline effect from all tab links
            tabLinks.forEach(tab => tab.classList.remove("active"));

            // normalize text to lowercase id format
            const targetId = link.textContent.trim().toLowerCase();
            const targetContent = document.getElementById(targetId);

            if (targetContent) {
                targetContent.classList.add("active-tab");
                link.classList.add("active");
            }
        });
    });

    /* ------------------ TYPING ANIMATION ------------------ */
    const words = [
        "Machine Learning Engineer",
        "Data Scientist",
        "Deep Learning Specialist",
        "Artificial Intelligence Engineer",
        "Data Analyst"
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingElement = document.getElementById("typing-text");

    function typeEffect() {
        const currentWord = words[wordIndex];
        if (isDeleting) {
            typingElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }
        } else {
            typingElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(typeEffect, 1000);
                return;
            }
        }
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }

    typeEffect();
});

