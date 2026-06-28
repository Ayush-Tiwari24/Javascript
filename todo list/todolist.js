
const Addbtn = document.querySelector(".btn-grad");
const input = document.querySelector("input");
const parent = document.querySelector(".parent");
const empty = document.querySelector(".prev");
let count = 0;
Addbtn.addEventListener("click", () => {
    const value = input.value.trim();
    if (!value) return;

    const empty = document.querySelector(".prev");
    if (empty) empty.remove();

    parent.innerHTML += `
    <div class="task">
        <label><input type="checkbox"></label>
        ${value}
        <button class="dlt">Delete</button>
    </div>`;

    input.value = "";
});
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") Addbtn.click();
});
parent.addEventListener("click", (e) => {
    if (e.target.classList.contains("dlt")) {
        e.target.parentElement.remove();
    }
    if (parent.children.length === 0) {
        const h4 = document.createElement("h4");
        h4.className = "prev";
        h4.textContent = "NO TASK YET";
        parent.before(h4);
    }
});
