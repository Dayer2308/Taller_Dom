const Pokemons = document.querySelector(".Pokemon-container");

function PokeAPI(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then(data => 
        {CrearPokemons(data);
            console.log(data);
    });
}

function fetchPokemons(number){
    for(let i = 1; i < number; i++){
        PokeAPI(i);
    }
}

function CrearPokemons(pokemon){

    const card = document.createElement("div");
    card.classList.add("pokemon-block");

    const spriteContainer = document.createElement("div");
    spriteContainer.classList.add("img-container");

    const sprite = document.createElement("img");
    sprite.src = pokemon.sprites.front_default;

    spriteContainer.appendChild(sprite);

    const number = document.createElement("p");
    number.textContent = `ID: #${pokemon.id.toString().padStart(3,0)}`;

    const name = document.createElement("p");
    name.classList.add("name");
    name.textContent = "Nombre: "+pokemon.name;   

    const types = document.createElement("p");
    types.classList.add("types");
    types.textContent = "Tipo: "+pokemon.types[0];

    const value = document.createElement("p");
    value.classList.add("value");
    value.textContent ="Precio: $"+10000;

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);
    card.appendChild(types);
    card.appendChild(value);

    Pokemons.appendChild(card);
}
 
fetchPokemons(21);

const Pokemon ={
    IMAGEN: 300,
    ID: 200,
    NOMBRE: 200,
    TIPO: 200,
    PRECIO: 10000
}
    
