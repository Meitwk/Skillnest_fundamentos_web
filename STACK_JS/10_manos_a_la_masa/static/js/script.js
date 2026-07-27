console.log("Conexion exitosa...");
// Instrucciones 
// 👨‍🍳 Crea una función llamada pizzaOven que devuelva un objeto con las propiedades:

// corteza: tipo de corteza de la pizza.
// salsa: tipo de salsa utilizada.
// quesos: un arreglo con los tipos de queso que tiene la pizza.
// ingredientes: un arreglo con los ingredientes adicionales.
// 🍕 Usa la función para crear las siguientes pizzas:

// Una pizza “estilo Chicago” con corteza tradicional, salsa tradicional, mozzarella y los ingredientes pepperoni y salchicha.
// Una pizza “lanzada a mano” con salsa marinara, mozzarella y feta, y los ingredientes champiñones, aceitunas y cebollas.
// Crea dos pizzas más con tus ingredientes favoritos.
// 💻 Muestra en "html con alert" los objetos de cada pizza creada.

function crearPizza(corteza, salsa, quesos, ingredientes){
    let pizza = {};
    pizza.corteza = corteza;
    pizza.salsa = salsa;
    pizza.quesos = quesos;
    pizza.ingredientes = ingredientes;
    return pizza;
}
function pizzaOven(){
let chicago = crearPizza(
    "Tradicional",
    "Tradicional",
    ["Mozzarella"],
    ["pepperoni", "salchicha"]
);
let lanzadaMano = crearPizza(
    "Lanzada a mano",
    "Marinara",
    ["Mozzarella", "Feta"],
    ["Champiñones", "Aceitunas", "Cebollas"]
);
let pizzafav1 = crearPizza(
    "Corteza con queso",
    "Salsa de ajo",
    ["Mozzarella"],
    ["Aceitunas", "Choclo", "Carne"]
)
let pizzafav2 = crearPizza(
    "Tradicional",
    "Tomate",
    ["Mozzarella"],
    ["Pollo", "Aceitunas", "Jamon", "Carne", "Choclo"]

)
alert(`Estilo Chicago \nCorteza: ${chicago.corteza} \nSalsa: ${chicago.salsa} \nQueso: ${chicago.quesos.join(", ")} \nIngredientes: ${chicago.ingredientes.join(", ")}`);
alert(`Lanzada a mano \nCorteza: ${lanzadaMano.corteza} \nSalsa: ${lanzadaMano.salsa} \nQueso: ${lanzadaMano.quesos.join(", ")} \nIngredientes: ${lanzadaMano.ingredientes.join(", ")}`);
alert(`Pizza Favorita 1 \nCorteza: ${pizzafav1.corteza} \nSalsa: ${pizzafav1.salsa} \nQueso: ${pizzafav1.quesos.join(", ")} \nIngredientes: ${pizzafav1.ingredientes.join(", ")}`);
alert(`Pizza Favorita 2 \nCorteza: ${pizzafav2.corteza} \nSalsa: ${pizzafav2.salsa} \nQueso: ${pizzafav2.quesos.join(", ")} \nIngredientes: ${pizzafav2.ingredientes.join(", ")}`);
}
