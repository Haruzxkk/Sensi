const items = [];
const roulette = document.getElementById("roulette");
const result = document.getElementById("result");

document.getElementById("addItem").addEventListener("click", function() {
    const itemInput = document.getElementById("itemInput");
    const itemValue = itemInput.value;
    if (itemValue) {
        items.push(itemValue);
        itemInput.value = '';
        drawRoulette();
    }
});

document.getElementById("spinButton").addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * items.length);
    const degrees = randomIndex * (360 / items.length) + 360 * 5; // 5 full spins
    roulette.style.transform = `rotate(${degrees}deg)`;
    
    setTimeout(() => {
        result.textContent = `Resultado: ${items[randomIndex]}`;
    }, 4000); // Tempo da animação
});

function drawRoulette() {
    roulette.innerHTML = '';
    items.forEach((item, index) => {
        const slice = document.createElement("div");
        slice.textContent = item;
        slice.style.transform = `rotate(${(360 / items.length) * index}deg)`;
        slice.style.position = "absolute";
        slice.style.top = "50%";
        slice.style.left = "50%";
        slice.style.transformOrigin = "0 100%";
        slice.style.width = "50%"; // Ajuste a largura do item
        slice.style.height = "50%"; // Ajuste a altura do item
        roulette.appendChild(slice);
    });
}