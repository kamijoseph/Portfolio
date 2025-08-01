
// Sctipt //
document.addEventListener("DOMContentLoaded", function () {
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
});
