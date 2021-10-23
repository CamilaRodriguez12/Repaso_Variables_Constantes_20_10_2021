addEventListener("DOMContentLoaded", ()=>{
    console.log("Hola"); //Esta linea se puede reemplazar por todo el codigo que esta por fuera
});

const gravedad = 9.807;
let unidad = "m/s2";
const info = {
    direccion: "Carrera",
    ciudad: "Bucaramanga"
}

//Diferentes formas de imprimir la información
console.group("Mensaje de las diferentes formas de imprimir");
console.log(Object(unidad));
console.log("".concat(gravedad,unidad)); //Cocatenar, unir información en una sola
console.log(gravedad+"  "+unidad);
console.log(`La gravedad del planeta tierra es de: ${gravedad} ${unidad}`);
console.error(`La gravedad del planeta tierra es de: ${gravedad} ${unidad}`); //imprimer como error
console.warn(`La gravedad del planeta tierra es de: ${gravedad} ${unidad}`); // imprime como advertencia
console.log(`%cLa gravedad del planeta tierra es de: ${gravedad} ${unidad}`,`font-family:Arial;color:#fff;background:red;`); // Permite cambiar el tipo de letra
console.log(info);
console.groupEnd("Mensaje de las diferentes formas de imprimir");   




