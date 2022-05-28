// Variables globales asociadas a elementos html
let inputPrincipal = document.querySelector("#input1");

let botonAgregar = document.querySelector(".boton-agregar");

let contenedor = document.querySelector(".container");

//Clase Item -->incluye el método crearDiv, capaz de crear tareas enlistadas y dar funcionalidad mediante botones para editar, bloquear su edición o eliminar de la lista.
class Item {
    constructor(nuevaTarea) {
        this.crearDiv(nuevaTarea)
    }
    crearDiv(nuevaTarea) {
        let inputItem = document.createElement("input");
        inputItem.disabled = true;
        inputItem.classList.add("item-input");
        inputItem.value = nuevaTarea;
        let divItem = document.createElement("div");
        divItem.classList.add("Item");
        let botonEditar = document.createElement("button");
        botonEditar.innerHTML = '<i class="fa-solid fa-lock"></i>';
        botonEditar.classList.add("boton-editar");
        let botonRemover = document.createElement("button");
        botonRemover.innerHTML = '<i class="fa-solid fa-trash"></i>';
        botonRemover.classList.add("boton-remover");
        divItem.appendChild(inputItem);
        divItem.appendChild(botonEditar);
        divItem.appendChild(botonRemover);
        contenedor.appendChild(divItem);
        botonEditar.addEventListener("click", function () {
            if (inputItem.disabled === true) {
                inputItem.disabled = false;
                botonEditar.innerHTML = '<i class="fa-solid fa-lock-open"></i>';
                botonEditar.style.background = "rgb(218, 183, 235)";
                botonEditar.style.color = "rgb(23, 23, 23)";
            } else {
                inputItem.disabled = true;
                botonEditar.innerHTML = '<i class="fa-solid fa-lock"></i>';
                botonEditar.style.background = "rgb(23, 23, 23)";
                botonEditar.style.color = "rgb(218, 183, 235)";
            };
        });
        botonRemover.addEventListener("click", function () {
            contenedor.removeChild(divItem);
        });
    };
};

//Listener usado para invocar función chequearInput una vez se presiona el botón agregar (+).
botonAgregar.addEventListener("click", function () {
    chequearInput();
});

//chequearInput toma los datos de la tarea ingresada en el input principal (id = input1) y la ingresa como parámetro al momento de generar una nueva instancia de la clase Item. Luego deja en blanco el input principal.
function chequearInput() {
    if (inputPrincipal.value) {
        let nuevaTarea = inputPrincipal.value;
        new Item(nuevaTarea);
        inputPrincipal.value = "";
    };
};
