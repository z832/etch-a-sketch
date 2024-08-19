const container = document.querySelector('#container');

function createGrid(size) {
    // create rows
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("gridRow");
        container.appendChild(row);
        // create cells
        for (let i2 = 0; i2 < size; i2++) {
            const cell = document.createElement("div");
            cell.classList.add("gridCell");
            row.appendChild(cell);
        }
    }
}

createGrid(16);

container.addEventListener("mouseover", (event) => {
    let target = event.target;
    if(target.classList.contains("gridCell")) {
        target.classList.toggle("hovered");
    }
})