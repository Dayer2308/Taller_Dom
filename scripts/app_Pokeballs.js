const Pokeballs = document.getElementById("Pokeballs");
const fragment = document.createDocumentFragment();

document.addEventListener("DOMContentLoaded", e=> {fetchPokeballs()})
const fetchPokeballs = async () =>{
    const res = await fetch('/public/api_Pokeballs.json');
    const data = await res.json();
    PintarCard(data);
}

const PintarCard = data =>{
    console.log(data);
    const TemplatePokeballs = document.getElementById("template-Pokeballs").content;
    data.forEach(item =>{
        TemplatePokeballs.querySelector("h5").textContent = item.Nombre;
        TemplatePokeballs.querySelector("p1").textContent = "ID: "+item.Id;
        TemplatePokeballs.querySelector("p2").textContent = item.Descripcion;
        TemplatePokeballs.querySelector("p3").textContent = "Precio: $"+item.Precio;
        TemplatePokeballs.querySelector("img").setAttribute("src",item.Imagen);
        TemplatePokeballs.querySelector("button").dataset.id=item.Id
        const clone = TemplatePokeballs.cloneNode(true);
        fragment.appendChild(clone);
    });
    Pokeballs.appendChild(fragment);
}