const MTS = document.getElementById("Mts");
const fragment = document.createDocumentFragment();

document.addEventListener("DOMContentLoaded", e=> {fetchMTS()})
const fetchMTS = async () =>{
    const res = await fetch('/public/api_Mts.json');
    const data = await res.json();
    PintarCard(data);
}

const PintarCard = data =>{
    console.log(data);
    const TemplateMTS = document.getElementById("template-Mts").content;
    data.forEach(item =>{
        TemplateMTS.querySelector("h5").textContent = item.Nombre;
        TemplateMTS.querySelector("p1").textContent = "ID:"+item.Id;
        TemplateMTS.querySelector("p2").textContent = item.Descripcion;
        TemplateMTS.querySelector("p3").textContent = "Precio: $"+item.Precio;
        TemplateMTS.querySelector("img").setAttribute("src",item.Imagen);
        TemplateMTS.querySelector("button").dataset.id=item.Id
        const clone = TemplateMTS.cloneNode(true);
        fragment.appendChild(clone);
    });
    MTS.appendChild(fragment);
}