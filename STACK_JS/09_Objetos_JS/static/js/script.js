console.log("conexión exitosa...");

let hamburguesaEspecial = {
    pan:"Pan brioche",
    carne:"Pollo crujiente",
    queso:"Suizo",
    extras:[
        "Lechuga",
        "Pepinos",
        "Miel"
    ],
    mostrarIngredientes:function(){
        console.log("Pan:",this.pan);
        console.log("Carne:",this.carne);
        console.log("Queso:",this.queso);
        console.log(
            "Extras:",
            this.extras.join(", ")
        );
    }
};

// Acceder al pan 
console.log(hamburguesaEspecial.pan);
hamburguesaEspecial.mostrarIngredientes()

// Objeto con método automovil
function automovil(){
let auto = {
    marca:"Toyota",
    modelo:"Corolla",
    año:2023,
    encender:function(){
        alert("Encendiendo",);
        alert(`Marca: ${this.marca}`);
        alert(`Modelo: ${this.modelo}`);
        alert(`Año: ${this.año}`);
        
    }
};
auto.encender();
}


// Objeto con método casa
function casa(){
let casa = {
    direccion:"Av. Siempre Viva 742",
    habitaciones:4,
    baños:2,
    mostrarInformacion:function(){
        alert(`Direccion: ${this.direccion}`);
        alert(`Habitaciones: ${this.habitaciones}`);
        alert(`Baño: ${this.baños}`);
    }
};
casa.mostrarInformacion();
}

