async function loadGameData() {
    const response = await fetch("../web/data/game-data.json");
    const data = await response.json();

    document.getElementById("game-title").textContent = data.title;
    document.getElementById("game-desc").textContent = data.description;

    renderCards("features", data.features);
    renderCards("characters-list", data.characters);
    renderCards("monsters-list", data.monsters);
    renderCards("skills-list", data.skills);
}

function renderCards(elementId, items) {
    const root = document.getElementById(elementId);
    root.innerHTML = "";

    items.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <div class="icon">${item.icon}</div>
            <h3>${item.name}</h3>
            <p>${item.description}</p>
        `;
        root.appendChild(card);
    });
}

loadGameData().catch(error => console.error(error));
