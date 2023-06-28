let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Вернитесь :( ";
})
window.addEventListener("focus", () => {
    document.title = docTitle;
})