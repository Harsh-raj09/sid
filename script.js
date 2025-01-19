document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("showParagraphs");
    const paragraphs = document.querySelectorAll(".paragraphs p");
    let index = 0;

    button.addEventListener("click", () => {
        if (index < paragraphs.length) {
            paragraphs[index].style.display = "block";
            paragraphs[index].style.animation = "fadeIn 1s ease-in";
            index++;
        }
    });
});
