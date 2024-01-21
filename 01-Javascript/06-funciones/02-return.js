function saluda(nombre,edad,email){
    cadena = "";
    cadena += "Me llamo "+nombre+".\n";
    cadena += "Tengo "+edad+" años\n"
    cadena += "Mi correo es "+email+"\n"
    return cadena;
}


console.log(saluda("Eugenio",35,"info@eugenio.com"));
console.log(saluda("Juan",46,"juan@eugenio.com"));
console.log(saluda("Jorge",47,"jorge@eugenio.com"));