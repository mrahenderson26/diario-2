const obtenerPokemon = async (pokemon) => {
    try {
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`
        );

        if (!response.ok) {
            throw new Error("Pokémon no encontrado");
        }

        const data = await response.json();

        const main = document.getElementById("main");

        const div = document.createElement("div");

        div.innerHTML = `
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <ul>
                <li><strong>Nombre:</strong> ${data.name}</li>
                <li><strong>Altura:</strong> ${data.height}</li>
                <li><strong>Peso:</strong> ${data.weight}</li>
            </ul>
        `;

        main.appendChild(div);
    } catch (error) {
        console.error(error);
        alert("Pokémon no encontrado");
    }
};

const input = document.querySelector("input");

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();

        const pokemon = input.value.trim();

        if (pokemon) {
            obtenerPokemon(pokemon);
            input.value = "";
        }
    }
});

const listarPokemon = async () => {
    try {
        const response = await fetch(
            "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000"
        );

        const data = await response.json();

        const main = document.getElementById("main");

        const ul = document.createElement("ul");

        data.results.forEach((item) => {
            ul.innerHTML += `<li>${item.name}</li>`;
        });

        main.appendChild(ul);
    } catch (error) {
        console.error(error);
    }
};

const listar = document.getElementById("listar");

listar.addEventListener("click", listarPokemon);