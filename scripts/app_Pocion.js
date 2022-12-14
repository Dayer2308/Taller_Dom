const Pocion = document.getElementById("Pociones");
const fragment = document.createDocumentFragment();

document.addEventListener("DOMContentLoaded", e=> {fetchPocion()})
const fetchPocion = async () =>{
    const res = await fetch('/public/api_Pociones.json');
    const data = await res.json();
    PintarCard(data);
}

const PintarCard = data =>{
    console.log(data);
    const TemplatePociones = document.getElementById("template-Pociones").content;
    data.forEach(item =>{
        TemplatePociones.querySelector("h5").textContent = item.Nombre;
        TemplatePociones.querySelector("p1").textContent = "ID: "+item.Id;
        TemplatePociones.querySelector("p2").textContent = item.Descripcion;
        TemplatePociones.querySelector("p3").textContent = "Precio:$"+item.Precio;
        TemplatePociones.querySelector("img").setAttribute("src",item.Imagen);
        TemplatePociones.querySelector("button").dataset.id=item.Id
        const clone = TemplatePociones.cloneNode(true);
        fragment.appendChild(clone);
    });
    Pocion.appendChild(fragment);
}