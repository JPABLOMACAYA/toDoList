/*Variables asociadas a elementos html*/
let inputPrincipal = document.querySelector("#input1");

let botonAgregar = document.querySelector(".boton-agregar");

let contenedor = document.querySelector(".container");

/*Clase "Item" la cual es capaz de invocar a su propio método "crearDiv" desde su constructor*/
class Item {
    constructor(nuevaTarea) {
        this.crearDiv(nuevaTarea)
    }
    crearDiv(nuevaTarea) {
        /*Se crea el elemento input que irá guardando cada tarea*/
        let inputItem = document.createElement("input");
        inputItem.disabled = true; //se deja deshabilitada su edición
        inputItem.classList.add("item-input"); //se le añade una clase
        inputItem.value = nuevaTarea;
        
        /*Se crea el elemento div que contendrá al input y sus 2 botones*/
        let divItem = document.createElement("div");
        divItem.classList.add("Item"); //se le añade una clase
        
        /*Se crea el botón editar*/
        let botonEditar = document.createElement("button");
        botonEditar.innerHTML = '<i class="fa-solid fa-lock"></i>'; //se le añade un ícono
        botonEditar.classList.add("boton-editar"); //se le añade una clase
        
        /*Se crea el botón remover*/
        let botonRemover = document.createElement("button");
        botonRemover.innerHTML = '<i class="fa-solid fa-trash"></i>'; //se le añade un ícono
        botonRemover.classList.add("boton-remover"); //se le añade una clase
        
        /*Luego se agrega el input y sus 2 botones, al interior de divItem con el método appendChild.*/
        divItem.appendChild(inputItem);
        divItem.appendChild(botonEditar);
        divItem.appendChild(botonRemover);
        
        /*Se agrega divItem al interior del div contenedor.*/
        contenedor.appendChild(divItem);
        
        /*Listener asociado al evento click del botón agregar. Al activarse se cambiará el valor booleano de disabled en el input que contiene la tarea guardada. Además cambia el ícono del botón y sus colores*/
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

/*La función "chequearInput se encarga de verificar si el input principal tiene o no un value. Si es afirmativo, pasa este value como argumento al instanciar un objeto de la clase Item. Luego se vuelve a vaciar el value del input principal*/
function chequearInput() {
    if (inputPrincipal.value) {
        let nuevaTarea = inputPrincipal.value;
        new Item(nuevaTarea);
        inputPrincipal.value = "";
    };
};

/*Listener asociado al evento click del botón agregar. Al activarse se invocará la función chequearInput()*/
botonAgregar.addEventListener("click", function () {
    chequearInput();
});

/*Listener asociado al evento keypress de tipo Enter. Al activarse se invocará la función chequearInput()*/
inputPrincipal.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        chequearInput();
    };
});
