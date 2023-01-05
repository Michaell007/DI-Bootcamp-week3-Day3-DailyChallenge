
// Show Only The Letters
let inputEl = document.getElementById("letter");
inputEl.addEventListener("keyup", () => {
    let verif = /^[a-zA-Z]+$/.test(inputEl.value);
    if (!verif) {
        inputEl.value = inputEl.value.replace(/[0-9]/g, '');
    }

    let paragraph = document.querySelector("p");
    paragraph.innerHTML = inputEl.value;
})

