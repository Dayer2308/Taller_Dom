const Pokemons = document.querySelector(".Pokemon-container");
const Antes = document.querySelector(".Btn_Azul");
const Despues = document.querySelector(".Btn_Rojo");
const BtnGuardar = document.querySelector(".BtnCompra");
let Pokemon = {};
let offset = 1;
let limit = 9;
let PokemonNuevo = JSON.parse(localStorage.getItem("PokemonRegistradosLS")) || [];

Antes.addEventListener("click",()=>{
    if(offset != 1){
    offset-=9;
    removeChildNodes(Pokemons); 
    fetchPokemons(offset,limit);
}
})

Despues.addEventListener("click",()=>{   
    if(offset != 100){
    offset+=9; 
    removeChildNodes(Pokemons);
    fetchPokemons(offset,limit);
}
})

 function PokeAPI(id){
     fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
     .then(res => res.json())
     .then(data => 
         {CrearPokemons(data);
            Pokemon = {
                IMAGEN: data.sprites.front_default,
                ID: data.id,
                NOMBRE: data.name,
                TIPO: data.types[0].type.name,
                PRECIO: 10000
            }});
 }

 function fetchPokemons(offset,limit){
     for(let i = offset; i < offset + limit; i++){
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
     number.textContent = `ID: #${pokemon.id.toString()}`;

     const name = document.createElement("p");
     name.classList.add("name");
     name.textContent =pokemon.name;
     
     const type = document.createElement("p");
     type.classList.add("type");
     type.textContent = pokemon.types[0].type.name;

     const value = document.createElement("p");
     value.classList.add("value");
     value.textContent ="Precio: $"+10000;

     const Left = document.createElement("i");
     Left.classList.add("ILeft");
     Left.classList.add("bi");
     Left.classList.add("bi-caret-left-fill");
     const Rigth = document.createElement("i");
     Rigth.classList.add("IRigth");
     Rigth.classList.add("bi");
     Rigth.classList.add("bi-caret-right-fill");

     const Contador = document.createElement("p")
     Contador.classList.add("Contador");
     Contador.textContent = 0 ;
     

     const BtnCompra = document.createElement("button");
     BtnCompra.classList.add("BtnCompra");
     BtnCompra.classList.add("btn");
     BtnCompra.classList.add("btn-primary");
     BtnCompra.textContent ="AGREGAR";
     

     card.appendChild(spriteContainer);
     card.appendChild(number);
     card.appendChild(name);
     card.appendChild(type);
     card.appendChild(value);
     card.appendChild(Left);
     card.appendChild(Rigth);
     card.appendChild(Contador);
     card.appendChild(BtnCompra);
     Pokemons.appendChild(card);
}
 
function removeChildNodes(parent){
     while(parent.firstChild){
         parent.removeChild(parent.firstChild);
     }
}

fetchPokemons(offset,limit);

BtnGuardar.addEventListener("click", () =>{
    console.log(Pokemon);
	PokemonNuevo.push(Pokemon);
	localStorage.setItem("PokemonRegistradosLS", JSON.stringify(PokemonNuevo));
})