const p1 = document.querySelector("#para")
const b1 = document.querySelector("#btn")


b1.addEventListener('click', () => {
    p1.textContent = "Changed paragraph"
})