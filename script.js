const items = [];
const roulette = document.getElementById("roulette");
const result = document.getElementById("result");

document.getElementById("addItem").addEventListener("click", function() {
    const itemInput = document.getElementById("itemInput");
    const itemValue = itemInput.value.trim();
    if (itemValue) {
        items.push(itemValue);
        itemInput.value = '';
        drawRoulette();
    }
});

document.getElementById("spinButton").addEventListener("click", function() {
    if (items.length > 0) {
        const randomIndex = Math.floor(Math.random() * items.length);
        const degrees = randomIndex * (360 / items.length) + 360 * 5; // 5 spins
        roulette.style.transform = `rotate(${degrees}deg)`;
        
        setTimeout(() => {
            result.textContent = `Resultado: ${items[randomIndex]}`;
        }, 4000); // Tempo da animação
    } else {
        alert("Adicione pelo menos um item!");
    }
});

function drawRoulette() {
    roulette.innerHTML = ''; // Limpa a roleta
    items.forEach((item, index) => {
        const slice = document.createElement("div");
        slice.textContent = item;
        slice.style.transform = `rotate(${(360 / items.length) * index}deg)`;
        slice.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Cor do fundo do item
        slice.style.color = "white"; // Cor do texto
        roulette.appendChild(slice);
    });
}