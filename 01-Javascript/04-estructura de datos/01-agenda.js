var agenda = [];
agenda[0] = "Eugenio"
console.table(agenda);
agenda[1] = "Juan";
console.table(agenda);
agenda[2] = "Jorge";
console.table(agenda);
agenda.push("Julia"); // Introduce a continuación de la última posición
console.table(agenda);
agenda.pop(); // Borra última posición
console.table(agenda);
agenda.splice(1,1); // Elimina el índice y cuantos se eliminan, los índices corren y se modifican
console.table(agenda);